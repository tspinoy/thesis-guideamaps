import React from 'react';

import './css/App.css';
import {PDDNodeHeight, PDDNodeWidth} from './Constants';
import AddChildButton from './AddChildButton';
import EditButton from './EditButton';
import ExpandCollapseButton from './ExpandCollapseButton';

class PlateformeDDNode extends React.Component {
  render() {
    const {
      node,
      onAddNode,
      onNodeDataChange,
      onNodePositionChange,
      onNodeVisibleChildrenChange, onClick, centered
    } = this.props;
    return (
      <div
        key={node.id}
        className={
          'node absolute ' +
          'border border-solid border-black rounded ' +
          'hover:border-red m-2 ' +
          (node.visible ? 'visibleNode ' : 'hiddenNode ')
        }
        style={{
          width: PDDNodeWidth,
          height: PDDNodeHeight,
          transform: `translate(${node.x}px, ${node.y}px)`,
          color: node.backgroundColor,
          backgroundColor: node.backgroundColor,
          transition: centered && 'all 1s ease 0s',
        }}
        onClick={onClick}>
        <div // title div
          className={'relative pb-1 pt-1 pl-2 pr-2 rounded-t'}
          style={{
            borderBottom: '1px solid',
            borderColor: '#000000',
            color: '#000000',
            backgroundColor: 'white',
          }}>
          <p
            className={'font-sans text-lg overflow-hidden'}
            style={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              //textAlign: 'center',
            }}>
            {node.data.title === '' ? 'No title' : node.data.title}
          </p>
        </div>
        {node.data.media !== '' && (
          <img
            className={'relative'}
            src={node.data.media}
            alt={'Smiley face'}
            style={{maxHeight: '45%', width: 'auto'}}
          />
        )}
        <div // content div
          className={
            'font-sans text-base pl-2 pr-2 pt-1 pb-1 overflow-hidden invertColors'
          }
          style={{
            color: node.backgroundColor, // this is inverted by the invertColors-class
            height: '6em', // 1.2 times WebkitLineClamp of the paragraph
          }}>
          <p
            style={{
              WebkitLineClamp: 5,
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
            }}>
            {node.data.text === '' ? 'No content' : node.data.text}
          </p>
        </div>
        <div // controls div
          className={'absolute pin-b flex rounded-b w-full'}>
          <AddChildButton
            width={node.height !== 0 ? 'w-1/3' : 'w-1/2'}
            node={node}
            onAddNode={onAddNode}
            bgcolor={node.backgroundColor}
          />
          <EditButton
            width={node.height !== 0 ? 'w-1/3' : 'w-1/2'}
            node={node}
            leaf={node.height === 0}
            onNodeDataChange={onNodeDataChange}
            bgcolor={node.backgroundColor}
          />
          {node.height !== 0 && (
            // At non-child nodes the expand-collapse button should be added
            <ExpandCollapseButton
              width={'w-1/3'}
              node={node}
              onNodeVisibleChildrenChange={onNodeVisibleChildrenChange}
              bgcolor={node.backgroundColor}
            />
          )}
        </div>
      </div>
    );
  }
}

export default PlateformeDDNode;
