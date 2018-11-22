import React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import {initializeNode, NodeWidth, NodeHeight, maxZoomScale} from './Constants';
import './css/App.css';
import Zoom from './Zoom.js';
import * as d3 from 'd3';

class Cluster extends React.Component {
  state = {selectedId: null};

  render() {
    const {NodeType, nodes, links, width, height} = this.props;
    const {selectedId} = this.state;
    // The type of the nodes is dynamic: the props define what kind of nodes should be represented.
    // In the case of GuideaMaps, NodeType = GuideMapsNode.

    const line = d3.line().curve(d3.curveCatmullRom.alpha(0.5));

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
      // Start from the current state
      const newState = this.state.nodes;
      // Invert the showChildren value: collapse => expand and expand => collapse
      newState[nodeId].showChildren = !this.state.nodes[nodeId].showChildren;
      // Take all the child nodes on all levels starting from this node (the node itself is included!)
      const childNodes = newState[nodeId].descendants();
      // Invert the show property of all descending nodes, start from 1 to not hide the node itself!
      for (let x = 1; x < childNodes.length; x++) {
        const child = childNodes[x];
        child.show = newState[nodeId].showChildren;
        child.showChildren = newState[nodeId].showChildren;
      }
      // Save the new state
      this.setState(newState);
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
      const newState = this.state.nodes;
      newState[nodeId].data.name = nodeTitle;
      newState[nodeId].content = nodeContent;
      this.setState(newState);
    };

    /**
     * Update the background color of a node and eventually its children.
     * @param nodeId: The id of the node of which we have to change the background color.
     * @param hexColor: The new color of the node in hexadecimal.
     * @param children: A boolean to tell whether the children have to be updated with the new color or not.
     */
    const updateNodeBackground = (nodeId, hexColor, children) => {
      const newState = this.state.nodes;
      if (children) {
        // Take all the child nodes on all levels starting from this node (the node itself is included!)
        const childNodes = newState[nodeId].descendants();
        // Invert the show property of the node and all descending nodes
        for (let x = 0; x < childNodes.length; x++) {
          const child = childNodes[x];
          child.backgroundColor = hexColor;
        }
      } else {
        newState[nodeId].backgroundColor = hexColor;
      }
      this.setState(newState);
    };

    return (
      <div className="relative" style={{width, height}}>
        <Zoom
          data={nodes}
          width={width}
          height={height}
          selectedId={selectedId}
          maxZoomScale={maxZoomScale}>
          {(zoomedNodes, zHandler) => (
            <div
              id={'cluster'}
              className={'absolute pin-t pin-l overflow-hidden border'}
              style={{width, height}}>
              <svg className={'absolute pin-t pin-l'} style={{width, height}}>
                <defs>
                  <marker
                    id="arrow"
                    markerUnits="strokeWidth"
                    markerWidth="12"
                    markerHeight="12"
                    viewBox="0 0 12 12"
                    refX="6"
                    refY="6"
                    orient="auto">
                    <path
                      d="M2,2 L10,6 L2,10 L6,6 L2,2"
                      style={{fill: 'black'}}
                    />
                  </marker>
                </defs>
                {links.map((l, index) => (
                  <path
                    key={index}
                    d={line([
                      zHandler.apply([l.source.x, l.source.y]),
                      zHandler.apply([
                        (l.source.x + l.target.x) / 2 + 20,
                        (l.source.y + l.target.y) / 2 + 20,
                      ]),
                      zHandler.apply([l.target.x, l.target.y]),
                    ])}
                    fill="none"
                    stroke={'black'}
                    strokeDasharray={l.optional ? 3 : 0}
                    markerMid={'url(#arrow)'}
                    style={{
                      transform: `translate(${NodeWidth / 2}px,
                                            ${NodeHeight / 2}px)`,
                      display: l.target.show ? 'block' : 'none',
                    }}
                  />
                ))}
              </svg>
              {zoomedNodes.map(n => (
                <NodeType
                  key={n.id}
                  node={n}
                  onClick={() => this.setState({selectedId: n.id})}
                  /*
                  addChildNode={addChildNode}
                  updateShowChildren={updateNodeShowChildren}
                  updatePosition={updateNodePosition}
                  updateData={updateNodeData}
                  updateBackgroundColor={updateNodeBackground}
                  */
                />
              ))}
            </div>
          )}
        </Zoom>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Cluster);
