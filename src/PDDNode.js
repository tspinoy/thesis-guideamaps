import React from 'react';
import './css/App.css';
import EditButton from './EditButton';
import {arraysEqual, PDDNodeHeight, PDDNodeWidth} from './Constants';
import ExpandCollapseButton from './ExpandCollapseButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PDDNode extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

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

  onClickHandler() {
    this.props.onClick();
    if (
      this.props.centered &&
      parseInt(this.props.lastSelectedId) === this.props.node.data.id
    ) {
      document.getElementById('editbtn' + this.props.node.data.id).click();
    }
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
          'hover:border-red m-2 ' +
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
        }}>
        <div // title div
          id={'title' + node.data.id}
          className={
            (node.data.image !== '' ? 'text-black ' : 'text-white ') +
            'flex h-full invertColors items-center justify-center ' +
            'pb-1 pt-1 pl-2 pr-2 relative text-center ' +
            'w-full '
          }
          onClick={this.onClickHandler}>
          <p className={'text-base overflow-hidden'}>
            {node.data.titre === '' ? 'No title' : node.data.titre}
          </p>
        </div>
        <div // controls div
          className={'absolute invertColors pin-b rounded-b w-full'}>
          {node.data.id > 0 && (
            <EditButton
              border={false}
              width={'w-full'}
              iconSize={'lg'}
              node={node}
              leaf={node.height === 0}
              onNodeDataChange={onNodeDataChange}
              bgcolor={node.data.image !== '' ? '#ffffff' : '#000000'}
              onEditNode={onEditNode}
              EditNodeComp={EditNodeComp}
              tooltiptext={false}
            />
          )}
        </div>
        {node.height !== 0 && (
          // At non-child nodes the expand-collapse button should be added
          <div
            className={'tooltip absolute'}
            style={{
              transform:
                node.data.id === 0 ? 'translate(10px, 0)' : 'translate(0, 0)',
            }}>
            <button
              id={'ec-btn-node' + this.props.node.data.id}
              className={
                'block expand-collapse-btn font-bold items-center ' +
                'px-1 py-1 rounded-br text-grey-darkest w-full ' +
                'bg-white '
              }
              style={{
                border: '3px solid #60b660',
                borderRadius: '50%',
                //borderColor: node.backgroundColor,
                color: '#60b660',
                boxShadow: '0 0 0 2px #ffffff',
              }}
              onClick={() => {
                this.props.onClick();
                this.props.onNodeVisibleChildrenChange(this.props.node.data.id);
              }}>
              <FontAwesomeIcon
                icon={node.visibleChildren ? 'minus' : 'plus'}
                size={'lg'}
              />
            </button>
            <span className="tooltiptext">
              {node.visibleChildren ? 'Collapse' : 'Expand'}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default PDDNode;
