import React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import {initializeNode, maxZoomScale} from './Constants';
import './css/App.css';
import Zoom from './Zoom.js';
import * as d3 from 'd3';

class ZoomableTree extends React.Component {
  state = {selectedId: null, nodes: null};

  componentDidMount() {
    this.setState({nodes: this.props.nodes});
  }

  render() {
    // The nodes can be represented by different kinds of components.
    // In the case of GuideaMaps, NodeComp = GuideaMapsNode.
    const {NodeComp, nodes, LinkComp, links, width, height} = this.props;
    const {selectedId} = this.state;

    // based on https://stackoverflow.com/questions/43140325/add-node-to-d3-tree-v4
    const addChildNode = parent => {
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
     * Expand or collapse a particular node with id = nodeId.
     * @param nodeId: The id of the node of which we want to show or hide the descendant nodes.
     */
    const updateNodeShowChildren = nodeId => {
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

    /**
     * Update the position of the node after a drag and drop event.
     * @param nodeId: The id of the node of which the coordinates have to change.
     * @param newX: The new x-coordinate of the node.
     * @param newY: The new y-coordinate of the node.
     */
    const updateNodePosition = (nodeId, newX, newY) => {
      // Start from the current state
      const newState = this.state.nodes;
      // Update the x and y coordinates of the node
      newState[nodeId].x = newX;
      newState[nodeId].y = newY;
      // Save the new state
      this.setState(newState);
    };

    /**
     * Update the data of a node after it was edited and the form was submitted.
     * @param nodeId: The id of the node of which the data have to change.
     * @param nodeTitle: The new title of the node.
     * @param nodeContent: The new content of the node.
     * */
    const updateNodeData = (nodeId, nodeTitle, nodeContent) => {
      const newNodes = this.state.nodes.map((node, j) => {
        if (j === nodeId) {
          // update the node with this nodeId
          node.title = nodeTitle;
          node.content = nodeContent;
          return node;
        } else {
          // other nodes remain the same
          return node;
        }
      });
      this.setState({nodes: newNodes});
    };

    /**
     * Update the background color of a node and eventually its children.
     * @param nodeId: The id of the node of which we have to change the background color.
     * @param hexColor: The new color of the node in hexadecimal.
     * @param children: A boolean to tell whether the children have to be updated with the new color or not.
     */
    const updateNodeBackground = (nodeId, hexColor, children) => {
      const newNodes = this.state.nodes.map((node, j) => {
        if (j === nodeId) {
          // update the node with this nodeId
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

    return (
      <div className="relative" style={{width, height}}>
        <Zoom
          data={nodes}
          width={width}
          height={height}
          selectedId={selectedId}
          maxZoomScale={maxZoomScale}
          onZoom={() => {
            this.setState({selectedId: null});
          }}>
          {(zoomedNodes, zHandler, centered) => (
            <div
              id={'cluster'}
              className={'absolute pin-t pin-l overflow-hidden border'}
              style={{width, height}}>
              <svg
                id={'linksSVG'}
                className={'absolute pin-t pin-l'}
                style={{width, height}}>
                <defs>
                  <marker
                    id={'arrow'}
                    markerUnits={'strokeWidth'}
                    markerWidth={'12'}
                    markerHeight={'12'}
                    viewBox={'0 0 12 12'}
                    refX={'6'}
                    refY={'6'}
                    orient={'auto'}>
                    <path
                      d={'M2,2 L10,6 L2,10 L6,6 L2,2'}
                      style={{fill: 'black'}}
                    />
                  </marker>
                </defs>
                {links.map(link => (
                  <LinkComp
                    link={link}
                    zHandler={zHandler}
                    selectedId={selectedId}
                    centered={centered}
                  />
                ))}
              </svg>
              {zoomedNodes.map(n => (
                <NodeComp
                  key={n.id}
                  node={n}
                  onClick={() => {
                    this.setState({selectedId: n.id});
                  }}
                  addChildNode={addChildNode}
                  updateShowChildren={updateNodeShowChildren}
                  //updatePosition={updateNodePosition}
                  updateData={updateNodeData}
                  updateBackgroundColor={updateNodeBackground}
                  centered={centered}
                />
              ))}
            </div>
          )}
        </Zoom>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ZoomableTree);
