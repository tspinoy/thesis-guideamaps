import React, {Component} from 'react';
import './css/App.css';
import './css/tailwind.css';
import * as d3 from 'd3';
import logo from './logo.svg';

import {
  GMNodeTypes,
  initializeGMLink,
  initializeGMNode,
  ModalID,
  Modes,
  PDDNodeWidth,
} from './Constants';
import ZoomableTree from './ZoomableTree';

import GuideaMapsNode from './GMNode';
import GMLink from './GMLink';
import {GMData2} from './GMData';
import GMEditModal from './GMEditModal';

import PDDNode from './PDDNode';
import {PDDData2, PDDDataComplete} from './PDDData';
import PDDEditModal from './PDDEditModal';
import PDDLink from './PDDLink';

import {TemplateData} from './TemplateData';

// Font Awesome for SVG icons
import {library} from '@fortawesome/fontawesome-svg-core';
// Import solid icons
import {
  faAdjust,
  faCircle as faCircleSolid,
  faCompress,
  faEdit,
  faEllipsisH,
  faExpand,
  faLock,
  faLockOpen,
  faMinus,
  faPlus,
  faPlusCircle,
  faSearch,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
// Import regular icons
import {
  faCircle as faCircleRegular,
  faSave,
} from '@fortawesome/free-regular-svg-icons';
import {ChoiceNodeData} from './ChoiceNodeData';
library.add(
  faAdjust,
  faCircleRegular,
  faCircleSolid,
  faCompress,
  faEdit,
  faEllipsisH,
  faExpand,
  faLock,
  faLockOpen,
  faMinus,
  faPlus,
  faPlusCircle,
  faSave,
  faSearch,
  faTrashAlt,
);

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const [width, height] = [windowWidth * 0.9, windowHeight * 0.9];

const EMPTY = 'New map';
const GUIDEAMAPS = 'GuideaMaps';
const PLATEFORMEDD = 'PlateformeDD';
let current_visualization = GUIDEAMAPS;

let currentData = null;
let savedData = {};

const setCurrentData = () => {
  // First check whether we will show a template.
  let template = false;
  Object.keys(TemplateData).map(function(t) {
    if (current_visualization === TemplateData[t].name) {
      if (savedData[current_visualization] !== undefined) {
        // There is saved data, open it
        currentData = savedData[current_visualization];
      } else {
        // No saved data exists yet, open the default data
        currentData = TemplateData[t].nodes;
      }
      template = true;
    }
  });

  // If it is not a template, it is one of the predefined visualizations (GM or PDD)
  // or an empty visualization (with a single node as starting point.
  if (!template) {
    // Open saved data if it exists
    if (savedData[current_visualization] !== undefined) {
      currentData = savedData[current_visualization];
    } else {
      // No saved data exists, open the default data
      switch (current_visualization) {
        case EMPTY:
        case GUIDEAMAPS:
          currentData = [
            {
              id: 0,
              description: 'Start here',
              name: '',
              type: GMNodeTypes.DEFAULT,
              parent: '',
            },
          ];
          break;
        case PLATEFORMEDD:
          currentData = PDDDataComplete;
          break;
        default:
          currentData = GMData2;
          break;
      }
    }
  }
};

// Root definitions
let root = null;
const setRoot = (data = currentData) => {
  root = d3
    .stratify()
    .id(function(d) {
      return d.id;
    })
    .parentId(function(d) {
      return d.parent;
    })(data);
};

// Cluster definitions
let cluster = null;
const setCluster = sep => {
  cluster = d3
    .cluster()
    .size([360, (root.height + 2) * 130]) // A size of [360, radius] corresponds to a breadth of 360° and a depth of radius.
    .separation(function(a, b) {
      return a.parent === b.parent ? sep : sep;
    });
};

// ClusterRoot definitions
let clusterRoot = null;
const setClusterRoot = () => {
  clusterRoot = cluster(root);
};

// ClusterNodes definitions
let clusterNodes = null;
const setClusterNodes = (state = null) => {
  clusterNodes = clusterRoot
    .descendants()
    .sort(function(a, b) {
      return a.id - b.id; // sort by ascending id
    })
    .map((node, index) =>
      initializeGMNode(
        node,
        state === null ? node : state.nodes[index],
        width,
        height,
        true, // First time
      ),
    );
};

// ClusterLinks definitions
let clusterLinks = null;
const setClusterLinks = () => {
  clusterLinks = clusterRoot.links().map(link => initializeGMLink(link));
};

const initializeData = () => {
  setCurrentData();
  setRoot();
  setCluster(current_visualization === PLATEFORMEDD ? PDDNodeWidth : 50);
  setClusterRoot();
  setClusterNodes();
  setClusterLinks();
};

initializeData();

/* ClusterNodes contains a lot of information about each node.
 * Some parts of this information will be changed while using the app,
 * other parts will/should not.
 * The variable nodeOptions stores the fields that are allowed to be updated.
 * */
const nodeOptions = clusterNodes.map(function(node) {
  return {
    id: node.data.id,
    show: node.visible,
    showChildren: node.visibleChildren,
    title: node.title,
    content: node.content,
    background: node.background,
  };
});

class App extends Component {
  state = {
    nodes: clusterNodes,
    links: clusterLinks,
    editing: false,
    mode: Modes.END_USER,
  };

  render() {
    const findNodeWithId = nodeId => {
      for (let i = 0; i < this.state.nodes.length; i++) {
        if (this.state.nodes[i].id === nodeId) {
          return this.state.nodes[i];
        }
      }
      return null;
    };

    /**
     * Add a child node to the current node, which will become the {@param parent} of the new node.
     * @param id {Number}: The id of the node-to-add. When it is null, the id is computed by this function,
     * otherwise, the id passed as argument is taken as the id of the new node.
     * @param parent {Node}: The parent node.
     * @param nodeType {GMNodeTypes}: The type of the node-to-add.
     * @param choices {Object|null}: nodeType === GMNodeTypes.CHOICE ? An object with the choices of the choice node. : null.
     * @param title {String}: The title (aka name) of the node-to-add.
     * @param description {String}: The description of the node-to-add.
     * @param optional {Boolean}: The node-to-add is optional (true) or not (false).
     */
    const addGMChildNode = (
      id = null,
      parent,
      nodeType,
      choices,
      title,
      description,
      optional,
    ) => {
      let nextId =
        id === null
          ? this.state.nodes[this.state.nodes.length - 1].data.id + 1
          : id;
      if (nodeType === GMNodeTypes.CHOICE) {
        currentData.push({
          id: nextId,
          choices: choices,
          description: description,
          name: title,
          optional: optional,
          parent: parseInt(parent.id),
          type: nodeType,
        });
      } else {
        currentData.push({
          id: nextId,
          description: description,
          name: title,
          optional: optional,
          parent: parseInt(parent.id),
          type: GMNodeTypes[nodeType],
        });
      }

      setRoot(currentData);
      setCluster(50);
      setClusterRoot();

      // Compute the new cluster layout.
      clusterNodes = clusterRoot
        .descendants()
        .sort(function(a, b) {
          return a.id - b.id; // sort by ascending id
        })
        .map((node, index) =>
          initializeGMNode(
            node,
            this.state.nodes.length !== index ? findNodeWithId(node.id) : null,
            width,
            height,
            this.state.nodes.length === index, // additional node
          ),
        );
      setClusterLinks();

      this.setState({nodes: clusterNodes, links: clusterLinks}); // Update the state
    };

    /**
     * Delete a node with a specific id.
     * @param nodeId: The id of the node to be deleted.
     */
    const deleteGMNode = nodeId => {
      const index = currentData.findIndex(node => node.id === nodeId);
      currentData.splice(index, 1); // Remove the node from currentData.
      setRoot(currentData);
      setCluster(50);
      setClusterRoot();

      // Compute the new cluster layout.
      clusterNodes = clusterRoot
        .descendants()
        .sort(function(a, b) {
          return a.id - b.id; // sort by ascending id
        })
        .map((node, index) =>
          initializeGMNode(
            node,
            this.state.nodes.length !== index ? findNodeWithId(node.id) : null,
            width,
            height,
            this.state.nodes.length === index,
          ),
        );
      setClusterLinks();

      this.setState({nodes: clusterNodes, links: clusterLinks}); // Update the state
    };

    /**
     * Update the data of a node after it was edited and the form was submitted.
     * @param nodeId {Number}: The id of the node of which the data has to change.
     * @param nodeDescription {String}: A string describing the (expected) content of the node.
     * @param nodeTitle {String}: The new title of the node.
     * @param nodeContent {String}: The new content of the node.
     * @param hexColor {String}: The new color of the node in hexadecimal.
     * @param children {Boolean}: A boolean to tell whether the children have to be updated with the new color or not.
     * */
    const updateGMNode = (
      nodeId,
      nodeDescription,
      nodeTitle,
      nodeContent,
      hexColor,
      children,
    ) => {
      // Loop over all nodes.
      const newNodes = this.state.nodes.map(node => {
        if (node.data.id === nodeId) {
          // Update its data if the id is correct.
          node.description = nodeDescription;
          node.title = nodeTitle;
          node.content = nodeContent;

          node.backgroundColor = hexColor;
          if (children) {
            const childNodes = node.descendants();
            // Invert the show property of all descending nodes, start from x=1 because the node itself is already changed
            for (let x = 1; x < childNodes.length; x++) {
              const child = childNodes[x];
              child.backgroundColor = hexColor;
            }
          }
        }
        return node; // Return the (updated) node
      });
      this.setState({nodes: newNodes}); // Update the state
    };

    /**
     * Update the choices and choice-limits of a choice node.
     * @param nodeId {Number}: The id of the node to be updated.
     * @param choices {Object}: An object with the choices for the choice node.
     * @param lowerLimit {Number}: The lowest number of choices the user should select.
     * @param upperLimit {Number}: The highest number of choices the user can select.
     */
    const updateGMChoicePossibilities = (
      nodeId,
      choices,
      lowerLimit,
      upperLimit,
    ) => {
      // Loop over all nodes.
      const newNodes = this.state.nodes.map(node => {
        if (node.data.id === nodeId) {
          // Update its data if the id is correct.
          node.choices = choices;
          node.choiceLowerLimit = lowerLimit;
          node.choiceUpperLimit = upperLimit;
        }
        return node; // Return the (updated) node
      });
      this.setState({nodes: newNodes}); // Update the state
    };

    /**
     * Update the position of the node after a drag and drop event.
     * @param nodeId {Number}: The id of the node of which the coordinates have to change.
     * @param newX: The new x-coordinate of the node.
     * @param newY: The new y-coordinate of the node.
     */
    const updateGMNodePosition = (nodeId, newX, newY) => {
      const newNodes = this.state.nodes.map(node => {
        if (node.data.id === nodeId) {
          node.x = newX;
          node.y = newY;
          return node;
        } else {
          return node;
        }
      });
      this.setState({nodes: newNodes}); // Update the state
    };

    /**
     * Lock or unlock a node.
     * @param nodeId {Number}: The id of the node to (un)lock.
     */
    const updateGMNodeLock = nodeId => {
      // Loop over all nodes.
      const newNodes = this.state.nodes.map(node => {
        if (node.data.id === nodeId) {
          // Update its data if the id is correct.
          const newLockedStatus = !node.locked;
          node.locked = newLockedStatus;

          // Lock all descendant nodes as well.
          const childNodes = node.descendants();
          for (let x = 1; x < childNodes.length; x++) {
            const child = childNodes[x];
            child.locked = newLockedStatus;
          }
        }
        return node;
      });
      this.setState({nodes: newNodes}); // Update the state
    };

    /**
     * Expand or collapse a particular node with id = nodeId.
     * @param nodeId {Number}: The id of the node of which we want to show or hide the descendant nodes.
     */
    const updateGMVisibleChildren = nodeId => {
      // Loop over all nodes.
      const newNodes = this.state.nodes.map(node => {
        if (node.data.id === nodeId) {
          // Update its data if the id is correct.
          node.visibleChildren = !node.visibleChildren;
          if (node.visibleChildren) {
            // Loop over the children if we want to make them visible.
            node.children.map(child => {
              child.visible = true; // Make the child visible
              if (
                child.data.type === GMNodeTypes.CHOICE &&
                child.children !== undefined
              ) {
                for (let x = 0; x < child.children.length; x++) {
                  // Make the children under of a choice node visible by default
                  const c = child.children[x];
                  c.visible = true;
                  child.visibleChildren = true;
                }
              }
            });
          } else {
            // The child nodes should not be visible
            const childNodes = node.descendants();
            // Invert the show property of all descending nodes, start from x=1 to not hide the node itself!
            for (let x = 1; x < childNodes.length; x++) {
              const child = childNodes[x];
              child.visible = false;
              child.visibleChildren = false;
            }
          }
        }
        return node;
      });

      this.setState({nodes: newNodes});
    };

    /**
     * this.state.editing defines whether the EditModal is visible or not.
     * A call to this function inverts visible to invisible and invisible to visible.
     */
    const editNode = () => {
      this.setState({editing: !this.state.editing});
    };

    /**
     * In the navbar, the user can select which template or visualization he wants.
     */
    const selectTemplate = () => {
      savedData[current_visualization] = currentData; // Save the data, so that it can be reopened later if the user switches back to this template
      current_visualization = document.getElementById('templateSelect').value; // Switch to the selected template
      initializeData();
      document.getElementById('node0').click(); // Center the root node
    };

    return (
      <div>
        {
          /*current_visualization === GUIDEAMAPS &&*/

          <div
            className={'w-full text-center flex h-1 pin-t bg-grey mb-2'}
            style={{height: '50px'}}>
            {/*
            <div
              className={'w-1/3 flex'}
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <label
                className={
                  'rounded border border-black hover:bg-black hover:text-grey'
                }
                style={{
                  width: '130px',
                  height: '35px',
                  cursor: 'pointer',
                  // three rules to center the label
                  display: 'block',
                  textAlign: 'center',
                  lineHeight: '35px', // must be equal to height
                }}>
                Enter your file
                <input
                  type="file"
                  id="file"
                  size="60"
                  style={{display: 'none'}}
                />
              </label>
            </div>
            */}
            <div className={'w-1/3 inline-flex justify-center items-center'}>
              <button
                className={
                  'border border-black hover:bg-black hover:text-grey rounded-l ' +
                  (this.state.mode === Modes.END_USER
                    ? 'underline bg-black text-grey '
                    : '')
                }
                style={{height: '35px', outline: 'none', width: '150px'}}
                onClick={() => this.setState({mode: Modes.END_USER})}>
                END USER
              </button>
              <button
                className={
                  'border border-black hover:bg-black hover:text-grey rounded-r ' +
                  (this.state.mode === Modes.MAP_CREATOR
                    ? 'underline bg-black text-grey '
                    : '')
                }
                style={{height: '35px', outline: 'none', width: '150px'}}
                onClick={() => this.setState({mode: Modes.MAP_CREATOR})}>
                MAP CREATOR
              </button>
            </div>
            <div
              className={'items-center w-1/3'}
              style={{
                verticalAlign: 'baseline',
                display: 'inline-flex',
                justifyContent: 'center',
              }}>
              <img
                src={logo}
                alt={'logo'}
                style={{width: '50px', height: '50px'}}
              />
              <select
                className={'bg-grey border border-black border-solid rounded'}
                id={'templateSelect'}
                onChange={() => {
                  selectTemplate();
                  this.setState({nodes: clusterNodes, links: clusterLinks});
                }}
                style={{height: '35px', outline: 'none'}}>
                <optgroup label={'Existing visualizations'}>
                  <option
                    value={GUIDEAMAPS}
                    selected={current_visualization === GUIDEAMAPS}>
                    {GUIDEAMAPS}
                  </option>
                  <option
                    value={PLATEFORMEDD}
                    selected={current_visualization === PLATEFORMEDD}>
                    {PLATEFORMEDD}
                  </option>
                  {/* TODO: If you have a server, you can load the names of the saved visualizations here. */}
                </optgroup>
                <optgroup label={'Available templates'}>
                  {Object.keys(TemplateData).map(function(template) {
                    return (
                      <option
                        key={template}
                        className={'cursor-pointer text-center w-full'}
                        selected={
                          current_visualization === TemplateData[template].name
                        }
                        style={{height: '50px'}}
                        value={TemplateData[template].name}>
                        {TemplateData[template].name}
                      </option>
                    );
                  })}
                </optgroup>
                {this.state.mode === Modes.MAP_CREATOR && (
                  <optgroup label={'Create new map'}>
                    <option value={EMPTY}>{EMPTY}</option>
                  </optgroup>
                )}
              </select>
            </div>
            <div className={'w-1/3 flex justify-center items-center'}>
              <button
                id={'zoom-to-fit-btn'}
                className={
                  'rounded border border-black hover:bg-black hover:text-grey'
                }
                style={{height: '35px', width: '110px', outline: 'none'}}>
                Zoom to fit
              </button>
            </div>
          </div>
        }
        <div className={'w-screen flex justify-center items-center mt-5'}>
          <ZoomableTree
            // Fixed props
            currentVisualization={current_visualization}
            height={height}
            links={this.state.links}
            mode={this.state.mode}
            nodes={this.state.nodes}
            nodeOptions={nodeOptions} // remove this
            onEditNode={() => editNode()}
            width={width}
            // Variable props
            EditModalComp={
              current_visualization === PLATEFORMEDD
                ? PDDEditModal
                : GMEditModal
            }
            LinkComp={current_visualization === PLATEFORMEDD ? PDDLink : GMLink}
            NodeComp={
              current_visualization === PLATEFORMEDD ? PDDNode : GuideaMapsNode
            }
            onAddNode={
              current_visualization === PLATEFORMEDD
                ? () => null
                : (
                    id,
                    parent,
                    nodeType,
                    choices,
                    title,
                    description,
                    optional,
                  ) =>
                    addGMChildNode(
                      id,
                      parent,
                      nodeType,
                      choices,
                      title,
                      description,
                      optional,
                    )
            }
            onDeleteNode={
              current_visualization === PLATEFORMEDD
                ? () => null
                : nodeId => deleteGMNode(nodeId)
            }
            onNodeChoicesUpdate={(nodeId, choices, lowerLimit, upperLimit) =>
              updateGMChoicePossibilities(
                nodeId,
                choices,
                lowerLimit,
                upperLimit,
              )
            }
            onNodeLockUpdate={
              current_visualization === PLATEFORMEDD
                ? () => null
                : nodeId => updateGMNodeLock(nodeId)
            }
            onNodeUpdate={
              current_visualization === PLATEFORMEDD
                ? () => null
                : (
                  nodeId,
                  nodeDescription,
                  nodeTitle,
                  nodeContent,
                  hexColor,
                  children,
                ) =>
                  updateGMNode(
                    nodeId,
                    nodeDescription,
                    nodeTitle,
                    nodeContent,
                    hexColor,
                    children,
                  )
            }
            onNodePositionChange={
              current_visualization === PLATEFORMEDD
                ? () => null
                : (nodeId, newX, newY) =>
                  updateGMNodePosition(nodeId, newX, newY)
            }
            onVisibleChildrenUpdate={nodeId => updateGMVisibleChildren(nodeId)}
          />
        </div>

        <div
          id={ModalID}
          className={
            'absolute pin-t z-50 ' +
            (this.state.editing ? 'editing' : 'finished')
          }
          style={{
            width: '100%',
          }}
        />
      </div>
    );
  }
}

export default App;
