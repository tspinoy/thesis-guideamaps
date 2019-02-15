import React, {Component} from 'react';
import './css/App.css';
import './css/tailwind.css';
import * as d3 from 'd3';
import logo from './logo.svg';

import {initializeLink, initializeNode} from './Constants';
import GuideaMapsNode from './GuideaMapsNode';
import GuideaMapsLink from './GuideaMapsLink';
import {data, data2} from './NodesData';
import ZoomableTree from './ZoomableTree';

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
  faPlus,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
// Import regular icons
import {
  faCircle as faCircleRegular,
  faSave,
} from '@fortawesome/free-regular-svg-icons';
library.add(
  faAdjust,
  faCircleRegular,
  faCircleSolid,
  faCompress,
  faEdit,
  faEllipsisH,
  faExpand,
  faPlus,
  faPlusCircle,
  faSave,
);

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const [width, height] = [windowWidth * 0.9, windowHeight * 0.9];

/*
const root = d3.hierarchy(data, function(d) {
  return d.children;
});
*/

const root = d3
  .stratify()
  .id(function(d) {
    return d.id;
  })
  .parentId(function(d) {
    return d.parent;
  })(data2);

// A size of [360, radius] corresponds to a breadth of 360° and a depth of radius.
const cluster = d3
  .cluster()
  .size([360, (root.height + 2) * 130])
  .separation(function(a, b) {
    return a.parent === b.parent ? 50 : 50;
  });
const clusterRoot = cluster(root);

const clusterNodes = clusterRoot
  .descendants()
  .map((node, index) => initializeNode(node, index, width, height));

console.log(clusterNodes);

const clusterLinks = clusterRoot.links().map(link => initializeLink(link));

/* ClusterNodes contains a lot of information about each node.
 * Some parts of this information will be changed while using the app,
 * other parts will/should not.
 * The variable nodeOptions stores the fields that are allowed to be updated.
 * */
const nodeOptions = clusterNodes.map(function(node) {
  return {
    id: node.id,
    show: node.show,
    showChildren: node.showChildren,
    title: node.title,
    content: node.content,
    background: node.background,
  };
});

class App extends Component {
  state = {nodes: clusterNodes};

  render() {
    // based on https://stackoverflow.com/questions/43140325/add-node-to-d3-tree-v4
    const addGMChildNode = parent => {
      let newNode = {
        name: Date.now(),
        children: [],
      };
      newNode = d3.hierarchy(newNode, function(d) {
        return d.children;
      });

      newNode = initializeNode(newNode, this.state.nodes.length);

      newNode.depth = parent.depth + 1;
      newNode.height = parent.height - 1;
      newNode.parent = parent;

      //Selected is a node, to which we are adding the new node as a child
      //If no child array, create an empty array
      if (!parent.children) {
        parent.children = [];
        parent.data.children = [];
      }

      //Push it to parent.children array
      parent.children.push(newNode);
      parent.data.children.push(newNode.data);

      const newNodesState = this.state.nodes;
      newNodesState[parent.id] = parent;
      newNodesState.push(newNode);
      this.setState({nodes: newNodesState});

      console.log(this.state);
    };

    /**
     * Update the data of a node after it was edited and the form was submitted.
     * @param nodeId: The id of the node of which the data have to change.
     * @param nodeTitle: The new title of the node.
     * @param nodeContent: The new content of the node.
     * @param hexColor: The new color of the node in hexadecimal.
     * @param children: A boolean to tell whether the children have to be updated with the new color or not.
     * */
    const updateGMNodeData = (
      nodeId,
      nodeTitle,
      nodeContent,
      hexColor,
      children,
    ) => {
      const newNodes = this.state.nodes.map((node, j) => {
        if (j === nodeId) {
          // update the node with this nodeId
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

          return node;
        } else {
          // other nodes remain the same
          return node;
        }
      });
      this.setState({nodes: newNodes});
    };

    /**
     * Expand or collapse a particular node with id = nodeId.
     * @param nodeId: The id of the node of which we want to show or hide the descendant nodes.
     */
    const updateGMNodeVisibleChildren = nodeId => {
      const newNodes = this.state.nodes.map((node, j) => {
        if (j === nodeId) {
          // update the node ith this nodeId
          node.showChildren = !node.showChildren;
          const childNodes = node.descendants();
          // Invert the show property of all descending nodes, start from x=1 to not hide the node itself!
          for (let x = 1; x < childNodes.length; x++) {
            const child = childNodes[x];
            child.show = node.showChildren;
            child.showChildren = node.showChildren;
          }
          return node;
        } else {
          // other nodes remain the same
          return node;
        }
      });

      this.setState({nodes: newNodes});
    };

    return (
      <div>
        <div
          className={'w-full text-center flex h-1 pin-t bg-grey mb-2'}
          style={{height: '50px'}}>
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
          <div
            className={'w-1/3 items-center'}
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
            GuideaMaps
          </div>
          <div
            className={'w-1/3 flex'}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <button
              id={'zoom-to-fit-btn'}
              className={
                'rounded border border-black hover:bg-black hover:text-grey'
              }
              style={{width: '110px', height: '35px'}}>
              Zoom to fit
            </button>
          </div>
        </div>
        <div id={'editField'} />
        <div className={'w-screen flex justify-center items-center'}>
          <ZoomableTree
            width={width}
            height={height}
            NodeComp={GuideaMapsNode}
            onAddNode={(parent) => addGMChildNode(parent)}
            onNodeDataChange={(
              nodeId,
              nodeTitle,
              nodeContent,
              hexColor,
              children,
            ) =>
              updateGMNodeData(
                nodeId,
                nodeTitle,
                nodeContent,
                hexColor,
                children,
              )
            }
            onNodeVisibleChildrenChange={nodeId =>
              updateGMNodeVisibleChildren(nodeId)
            }
            nodes={clusterNodes}
            nodeOptions={nodeOptions}
            LinkComp={GuideaMapsLink}
            links={clusterLinks}
          />
        </div>
      </div>
    );
  }
}

export default App;
