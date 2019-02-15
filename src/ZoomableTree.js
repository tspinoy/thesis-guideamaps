import React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import {initializeGMNode, maxZoomScale} from './Constants';
import './css/App.css';
import Zoom from './Zoom.js';
import * as d3 from 'd3';
import PlateformeDDNode from './PlateformeDDNode';

class ZoomableTree extends React.Component {
  state = {selectedId: null, nodes: null};

  componentDidMount() {
    this.setState({nodes: this.props.nodes});
  }

  render() {
    // The nodes can be represented by different kinds of components.
    // In the case of GuideaMaps, NodeComp = GuideaMapsNode.
    const {
      NodeComp,
      nodes,
      LinkComp,
      links,
      width,
      height,
      onAddNode,
      onNodeDataChange,
      onNodeVisibleChildrenChange,
    } = this.props;
    const {selectedId} = this.state;

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
              className={
                'absolute pin-t pin-l border ' +
                (NodeComp === PlateformeDDNode
                  ? 'flex overflow-scroll'
                  : 'overflow-hidden')
              }
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
                {LinkComp !== null &&
                  links.map(link => (
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
                  onAddNode={onAddNode}
                  onNodeVisibleChildrenChange={onNodeVisibleChildrenChange}
                  //updatePosition={updateNodePosition}
                  onNodeDataChange={onNodeDataChange}
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
