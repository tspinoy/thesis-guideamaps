import React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Picky from 'react-picky';
import 'react-picky/dist/picky.css';

import {
  ChoiceNodeAllowedTypes,
  GMNodeTypes,
  maxZoomScale,
  Modes,
  updateAllowedChoiceNodeType,
} from './Constants';
import './css/App.css';
import Zoom from './Zoom.js';

class ZoomableTree extends React.Component {
  state = {allowedNodeTypes: [], selectedId: null, nodes: null};

  componentDidMount() {
    // Make sure that the checkbox of already allowed types are selected
    const allowedTypes = [];
    Object.keys(ChoiceNodeAllowedTypes).map(function(type) {
      if (ChoiceNodeAllowedTypes[type]) {
        allowedTypes.push({label: type, value: GMNodeTypes[type]});
      }
    });

    this.setState({allowedNodeTypes: allowedTypes, nodes: this.props.nodes});
  }

  render() {
    // The nodes can be represented by different kinds of components.
    // In the case of GuideaMaps, NodeComp = GuideaMapsNode.
    const {
      deleteNode,
      EditNodeComp,
      height,
      LinkComp,
      links,
      mode,
      NodeComp,
      nodes,
      onAddNode,
      onEditNode,
      onNodeDataChange,
      onNodeLockUnlock,
      onNodePositionChange,
      onNodeVisibleChildrenChange,
      width,
    } = this.props;
    const {selectedId} = this.state;

    const options = Object.keys(ChoiceNodeAllowedTypes).map(function(type) {
      return {label: type, value: GMNodeTypes[type]};
    });

    const handleChange = value => {
      console.log(value);
      this.setState({allowedNodeTypes: value});
      updateAllowedChoiceNodeType(value);
    };

    return (
      <div className={'relative'} style={{width, height}}>
        {mode === Modes.MAP_CREATOR && (
          <div
            className={'absolute pin-r'}
            style={{
              width: '200px',
              zIndex: 1000000000,
            }}>
            <Picky
              value={this.state.allowedNodeTypes}
              options={options}
              onChange={handleChange}
              open={false}
              valueKey={'value'}
              labelKey={'label'}
              multiple={true}
              includeSelectAll={true}
              includeFilter={true}
              dropdownHeight={600}
            />
          </div>
        )}
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
                  key={n.id}
                  mode={mode}
                  deleteNode={deleteNode}
                  node={n}
                  onClick={() => {
                    this.setState({selectedId: n.id});
                  }}
                  onAddNode={onAddNode}
                  onEditNode={onEditNode}
                  onNodeLockUnlock={onNodeLockUnlock}
                  onNodeVisibleChildrenChange={onNodeVisibleChildrenChange}
                  onNodePositionChange={onNodePositionChange}
                  onNodeDataChange={onNodeDataChange}
                  centered={centered}
                  selectedId={selectedId}
                  lastSelectedId={lastSelectedId}
                  EditNodeComp={EditNodeComp}
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
