import React from 'react';
import './css/App.css';
import EditButton from './EditButton';
import {PDDNodeHeight, PDDNodeWidth} from './Constants';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {getPrimaryNodeColor} from './PDDData';

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

  /**
   * OnClick is a bit special in PDD. The first click is meant to center the node.
   * A second click (if the node is still centered) opens the node.
   */
  onClickHandler() {
    this.props.onClick(); // Center the node.
    if (
      this.props.centered &&
      this.props.node.data.id !== 0 &&
      parseInt(this.props.lastSelectedId) === this.props.node.data.id
    ) {
      // Simulate a click to open the node.
      document.getElementById('editbtn' + this.props.node.data.id).click();
    }
  }

  render() {
    const {
      node,
      onEditNode,
      EditModalComp,
      onNodeUpdate,
      centered,
    } = this.props;

    return (
      <div
        key={node.data.id}
        id={'node' + node.data.id}
        className={
          'absolute cursor-pointer flex ' +
          'hover:border-red m-2 node ' +
          (node.visible ? 'z-40 ' : 'z-0 ') +
          (node.visible ? 'visibleNode ' : 'hiddenNode ')
        }
        style={{
          backgroundColor: getPrimaryNodeColor(node),
          border: '3px solid #ffffff',
          borderRadius: '50%',
          boxShadow: '0 0 0 3px ' + getPrimaryNodeColor(node),
          color: 'white',
          cursor: 'pointer',
          fontWeight: 'bold',
          height: node.data.id === 0 ? PDDNodeHeight * 1.3 : PDDNodeHeight,
          transition: centered && 'all 500ms ease 0s',
          width: node.data.id === 0 ? PDDNodeWidth * 1.3 : PDDNodeWidth,
          '--nodex': node.x + 'px',
          '--nodey': node.y + 'px',
          '--parentx': this.getRootXY(node)[0] + 'px', // fading goes always from/to the point of the root node
          '--parenty': this.getRootXY(node)[1] + 'px', // because the clicked node is centered first
        }}>
        <div className={'tooltipright w-full'}>
          <div // title div
            id={'title' + node.data.id}
            className={
              'flex h-full items-center justify-center ' +
              'pb-1 pt-1 pl-2 pr-2 relative text-center ' +
              'w-full '
            }
            onClick={this.onClickHandler}>
            <p className={'text-base overflow-hidden'}>
              {node.data.title === '' ? 'No title' : node.data.title}
            </p>
          </div>
          <div // controls div
            className={'absolute pin-b rounded-b w-full'}>
            {node.data.id > 0 && (
              <EditButton
                bgcolor={'#000000'}
                border={false}
                EditModalComp={EditModalComp}
                iconSize={'lg'}
                leaf={node.height === 0}
                node={node}
                onEditNode={onEditNode}
                onNodeUpdate={onNodeUpdate}
                tooltiptext={false}
                width={'w-full'}
              />
            )}
          </div>
          {node.data.id > 0 && (
            <span className={'tooltiptextright'}>
              {centered && this.props.lastSelectedId === node.id
                ? 'Open'
                : 'Center'}
            </span>
          )}
        </div>
        {node.height !== 0 && (
          // At non-child nodes the edit button should be added
          <div
            className={'tooltip absolute'}
            style={{
              transform:
                node.data.id === 0 ? 'translate(10px, 0)' : 'translate(0, 0)',
            }}>
            <button
              id={'ec-btn-node' + this.props.node.data.id}
              className={
                'bg-white block expand-collapse-btn font-bold items-center ' +
                'px-1 py-1 rounded-br text-grey-darkest w-full '
              }
              style={{
                border: '3px solid ' + getPrimaryNodeColor(node),
                borderRadius: '50%',
                boxShadow: '0 0 0 2px #ffffff',
                //borderColor: node.backgroundColor,
                color: getPrimaryNodeColor(node),
                outline: 'none',
              }}
              onClick={() => {
                this.props.onClick();
                this.props.onVisibleChildrenUpdate(this.props.node.data.id);
              }}>
              <FontAwesomeIcon
                icon={node.visibleChildren ? 'minus' : 'plus'}
                size={'lg'}
              />
            </button>
            <span className={'tooltiptext'}>
              {node.visibleChildren ? 'Collapse' : 'Expand'}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default PDDNode;
