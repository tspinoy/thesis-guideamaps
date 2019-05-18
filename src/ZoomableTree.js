import React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import {maxZoomScale} from './Constants';
import './css/App.css';
import Zoom from './Zoom.js';

class ZoomableTree extends React.Component {
  state = {selectedId: null, nodes: null};

  componentDidMount() {
    this.setState({nodes: this.props.nodes});
    if (this.props.currentVisualization === 'PlateformeDD') {
      for (let i = 1; i < 4; i++) {
        document.getElementById('ec-btn-node' + i).click();
      }
    }
  }

  render() {
    // The nodes can be represented by different kinds of components.
    // In the case of GuideaMaps, NodeComp = GuideaMapsNode.
    const {
      EditModalComp,
      height,
      LinkComp,
      links,
      mode,
      NodeComp,
      nodes,
      onAddNode,
      onDeleteNode,
      onEditNode,
      onNodeChoicesUpdate,
      onNodeLockUpdate,
      onNodeUpdate,
      onNodePositionChange,
      onVisibleChildrenUpdate,
      width,
    } = this.props;
    const {selectedId} = this.state;

    return (
      <div className={'relative'} style={{width, height}}>
        <Zoom
          data={nodes}
          width={width}
          height={height}
          selectedId={selectedId}
          lastSelectedId={selectedId}
          maxZoomScale={maxZoomScale}
          onZoom={() => {
            this.setState({selectedId: null});
          }}>
          {(zoomedNodes, zHandler, centered, lastSelectedId) => (
            <div
              id={'cluster'}
              className={'absolute pin-t pin-l border overflow-hidden'}
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
                    key={link.source.id + link.target.id}
                    link={link}
                    zHandler={zHandler}
                    selectedId={selectedId}
                    lastSelectedId={lastSelectedId}
                    centered={centered}
                  />
                ))}
              </svg>
              {zoomedNodes.map(n => (
                <NodeComp
                  key={n.data.id}
                  mode={mode}
                  onDeleteNode={onDeleteNode}
                  node={n}
                  nrOfNodes={nodes.length}
                  onClick={() => {
                    this.setState({selectedId: n.id});
                  }}
                  onAddNode={onAddNode}
                  onEditNode={onEditNode}
                  onVisibleChildrenUpdate={onVisibleChildrenUpdate}
                  onNodeChoicesUpdate={onNodeChoicesUpdate}
                  onNodeLockUpdate={onNodeLockUpdate}
                  onNodePositionChange={onNodePositionChange}
                  onNodeUpdate={onNodeUpdate}
                  centered={centered}
                  selectedId={selectedId}
                  lastSelectedId={lastSelectedId}
                  EditModalComp={EditModalComp}
                  width={width}
                  height={height}
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
