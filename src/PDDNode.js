import React from 'react';
import './css/App.css';
import EditButton from './EditButton';
import {PDDNodeHeight, PDDNodeWidth} from './Constants';

class PDDNode extends React.Component {
  componentDidMount() {
    let node = document.getElementById('node' + this.props.node.data.id);
    setTimeout(() => {
      if (node.classList.contains('visibleNode')) {
        node.classList.remove('visibleNode');
        node.classList.add('node');
      }
    }, 600);

    document
      .getElementById('node' + this.props.node.data.id)
      .addEventListener('dblclick', () => {
        this.props.node.children !== undefined &&
          this.props.onNodeVisibleChildrenChange(this.props.node.data.id);
      });
  }

  componentDidUpdate() {
    let node = document.getElementById('node' + this.props.node.data.id);
    setTimeout(() => {
      if (node.classList.contains('visibleNode')) {
        node.classList.remove('visibleNode');
        node.classList.add('node');
      }
    }, 600);
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
      EditNodeComp,
      onNodeDataChange,
      onNodePositionChange,
      onNodeVisibleChildrenChange,
      onClick,
      centered,
    } = this.props;
    return (
      <div
        key={node.data.id}
        id={'node' + node.data.id}
        className={
          'node absolute flex cursor-pointer ' +
          'hover:border-red m-2 overflow-hidden ' +
          (node.visible ? 'z-40 ' : 'z-0 ') +
          (node.visible ? 'visibleNode ' : 'hiddenNode ')
        }
        style={{
          width: node.data.id === 0 ? PDDNodeWidth * 1.3 : PDDNodeWidth,
          height: node.data.id === 0 ? PDDNodeHeight * 1.3 : PDDNodeHeight,
          //transform: `translate(${node.x}px, ${node.y}px)`,
          color: 'white',
          fontWeight: 'bold',
          backgroundColor:
            node.data.id === 0
              ? '#373244'
              : node.data.image !== ''
              ? '#60b660'
              : 'white',
          transition: centered && 'all 500ms ease 0s',
          borderRadius: '50%',
          border: '3px solid #ffffff',
          boxShadow:
            node.data.id === 0 ? '0 0 0 3px #373244' : '0 0 0 3px #5cb85c',
          cursor: 'pointer',
          '--nodex': node.x + 'px',
          '--nodey': node.y + 'px',
          '--parentx': this.getRootXY(node)[0] + 'px', // fading goes always from/to the point of the root node
          '--parenty': this.getRootXY(node)[1] + 'px', // because the clicked node is centered first
        }}
        onClick={onClick}>
        <div // title div
          className={'relative flex pb-1 pt-1 pl-2 pr-2 w-full invertColors'}
          style={{
            color: node.data.image !== '' ? '#000000' : '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '75%',
          }}>
          <p className={'text-base overflow-hidden'}>
            {node.data.titre === '' ? 'No title' : node.data.titre}
          </p>
        </div>
        <div // controls div
          className={'absolute pin-b rounded-b w-full invertColors'}
          style={{height: '25%'}}>
          {node.data.id > 0 && (
            <EditButton
              width={'w-full'}
              iconSize={'lg'}
              node={node}
              leaf={node.height === 0}
              onNodeDataChange={onNodeDataChange}
              bgcolor={node.data.image !== '' ? '#ffffff' : '#000000'}
              onEditNode={onEditNode}
              EditNodeComp={EditNodeComp}
            />
          )}
        </div>
      </div>
    );
  }
}

export default PDDNode;
