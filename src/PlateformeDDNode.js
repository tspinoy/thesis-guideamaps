import React from 'react';

import './css/App.css';
import { GMNodeWidth, PDDNodeHeight, PDDNodeWidth } from "./Constants";
import AddChildButton from './AddChildButton';
import EditButton from './EditButton';
import ExpandCollapseButton from './ExpandCollapseButton';

class PlateformeDDNode extends React.Component {
  componentDidMount() {
    let node = document.getElementById('node' + this.props.node.id);
    setTimeout(() => {
      if (node.classList.contains('visibleNode')) {
        node.classList.remove('visibleNode');
        node.classList.add('node');
      }
    }, 1600);
  }

  componentDidUpdate() {
    let node = document.getElementById('node' + this.props.node.id);
    setTimeout(() => {
      if (node.classList.contains('visibleNode')) {
        node.classList.remove('visibleNode');
        node.classList.add('node');
      }
    }, 1600);
  }

  getRootXY(node) {
    let current = node;
    while (current.parent !== null) {
      current = current.parent;
    }
    return [current.x, current.y];
  }

  render() {
    const {
      node,
      onAddNode,
      onEditNode,
      onNodeDataChange,
      onNodePositionChange,
      onNodeVisibleChildrenChange,
      onClick,
      centered,
    } = this.props;
    return (
      <div
        key={node.id}
        id={'node' + node.id}
        className={
          'node absolute hoverarea ' +
          'border border-solid border-black rounded ' +
          'hover:border-red m-2 overflow-hidden ' +
          (node.visible ? 'z-40 ' : 'z-0 ') +
          (node.visible ? 'visibleNode ' : 'hiddenNode ')
        }
        style={{
          width: GMNodeWidth,
          //height: PDDNodeHeight,
          //transform: `translate(${node.x}px, ${node.y}px)`,
          color: node.backgroundColor,
          backgroundColor: node.backgroundColor,
          transition: centered && 'all 1s ease 0s',
          '--nodex': node.x + 'px',
          '--nodey': node.y + 'px',
          '--parentx': this.getRootXY(node)[0] + 'px', // fading goes always from/to the point of the root node
          '--parenty': this.getRootXY(node)[1] + 'px', // because the clicked node is centered first
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
            {node.data.titre === '' ? 'No title' : node.data.titre}
          </p>
        </div>
        {node.data.media !== '' && (
          <img
            className={'relative'}
            src={node.data.image}
            alt={'Smiley face'}
            style={{maxHeight: '45%', width: 'auto'}}
          />
        )}
        <div // content div
          className={
            'relative inner font-sans text-base pl-2 pr-2 pt-1 pb-1 overflow-hidden invertColors'
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
            {node.data.resume === '' ? 'No content' : node.data.resume}
          </p>
        </div>
        <div // controls div
          className={'relative inner pin-b rounded-b w-full'}
          style={{display: 'flex'}}>
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
            onEditNode={onEditNode}
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
