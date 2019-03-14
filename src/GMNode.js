import React from 'react';
import PropTypes from 'prop-types';
import {ItemTypes, GMNodeTypes} from './Constants';
import {DragSource, DropTarget} from 'react-dnd';
import flow from 'lodash/flow';

import './css/App.css';
import {GMNodeWidth, GMNodeHeight} from './Constants';
import AddChildButton from './AddChildButton';
import EditButton from './EditButton';
import ExpandCollapseButton from './ExpandCollapseButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const nodeSource = {
  beginDrag(props, monitor, component) {
    console.log(monitor.getItem());
    return {
      nodeId: props.id,
    };
  },
  endDrag(props, monitor, component) {
    console.log(props);
    console.log(monitor);
    console.log(component);
    let newPositions = monitor.getClientOffset();
    console.log(newPositions);
  },
};

const nodeTarget = {
  drop(props, monitor) {
    console.log(props);
    console.log(monitor);
  },
};

function dragCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

function dropCollect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

class GMNode extends React.Component {
  constructor(props) {
    super(props);
    this.getAllChildren = this.getAllChildren.bind(this);
    //this.handleMouseDown = this.handleMouseDown.bind(this);
    //this.handleMouseMove = this.handleMouseMove.bind(this);
    //this.handleMouseUp = this.handleMouseUp.bind(this);
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

  /*
  setInterval(() => {
    if (this.state.last === 'in') {
      if (this.props.node.visible) {
        setTimeout(() => this.setState({keyframesFinished: true}), 2000);
      } else {
        this.setState({keyframesFinished: false, last: 'out'});
      }
    } else {
      if (this.props.node.visible) {
        this.setState({keyframesFinished: false, last: 'in'});
      } else {
        setTimeout(() => this.setState({keyframesFinished: true}), 2000);
      }
    }
  }, 100);
  */

  /*
  offsetWidth;
  offsetHeight;

  componentDidMount() {
    //this.offsetWidth = document.getElementById('node' + this.props.node.id).offsetWidth;
    //this.offsetHeight = document.getElementById('node' + this.props.node.id).offsetHeight;
    this.offsetHeight = document.getElementById('node' + this.props.node.id).getBoundingClientRect().top;
    this.offsetWidth = document.getElementById('node' + this.props.node.id).getBoundingClientRect().left;
    document
      .getElementById('node' + this.props.node.id)
      .addEventListener('pointerdown', this.handleMouseDown);
    document.addEventListener('pointermove', this.handleMouseMove);
    document.addEventListener('pointerup', this.handleMouseUp);
  }

  componentWillUnmount() {
    //Don't forget to unlisten!
    document
      .getElementById('node' + this.props.node.id)
      .removeEventListener('pointerdown', this.handleMouseDown);
    document.removeEventListener('pointermove', this.handleMouseMove);
    document
      .getElementById('node' + this.props.node.id)
      .removeEventListener('pointerup', this.handleMouseUp);
  }

  handleMouseDown(e) {
    e.stopPropagation();
    e.preventDefault();
    //console.log('mousedown');
    this.setState({dragging: true, x: e.pageX, y: e.pageY});
  }

  handleMouseUp(e) {
    e.stopPropagation();
    e.preventDefault();
    //console.log('mouseup');
    this.setState({dragging: false});
  }

  handleMouseMove(e) {
    e.stopPropagation();
    e.preventDefault();
    if (this.state.dragging) {
      var x =
        this.props.node.x - e.pageX / 2 + this.props.width / 2 - GMNodeWidth;
      var y =
        this.props.node.y - (this.props.node.y - e.pageY) - GMNodeHeight;

      console.log(this.state.x, this.state.y, e.pageX, e.pageY, x, y);

      this.props.onNodePositionChange(this.props.node.id, x, y);
      //document.getElementById('node' + this.props.node.id).style.transform = `translate(${x}px, ${y}px)`
    }
  }
  */

  /**
   * A {@param node} is defined as complete if both "title"- and "content"-fields
   * are filled in.
   * @param node
   * @return {boolean}
   */
  static completeNode(node) {
    return node.title !== '' && node.content !== '';
  }

  static emptyNode(node) {
    return node.title === '' && node.content === '';
  }

  static atLeastPartiallyCompleteNode(node) {
    return node.title !== '' || node.content !== '';
  }

  /**
   * A helper function for {@see completenessIcon}
   * to get all the children of a {@param node}.
   * @param node: the node of which we want all children
   * @param result: the result is built into the array in this argument
   * @return {Array}: an array with all children of the {@param node}
   */
  getAllChildren(node, result = []) {
    if (node.children === undefined) {
      return result;
    } else {
      for (let i = 0; i < node.children.length; i++) {
        let child = node.children[i];
        result.push(child);
        this.getAllChildren(child, result);
      }
      return result;
    }
  }

  /**
   * A helper function for {@see completenessIcon} to check the completeness
   * of the children of a {@param node}.
   * @param node: the node of which we will check the children for completeness
   * @return {boolean}: the children are complete (true) or not (false)
   */
  completeChildren(node) {
    if (node.children === undefined) {
      return true;
    } else {
      // run over all children
      let children = this.getAllChildren(node);
      for (let i = 0; i < children.length; i++) {
        let child = children[i];
        // When an incomplete node is detected, false is immediately returned
        if (!GMNode.completeNode(child)) {
          return false;
        }
      }
      // All nodes are complete => return true
      return true;
    }
  }

  emptyChildren(node) {
    if (node.children === undefined) {
      return true;
    } else {
      // run over all children
      let children = this.getAllChildren(node);
      for (let i = 0; i < children.length; i++) {
        let child = children[i];
        // When an (partially) complete node is detected, false is immediately returned
        if (GMNode.atLeastPartiallyCompleteNode(child)) {
          return false;
        }
      }
      // All nodes are empty => return true
      return true;
    }
  }

  /**
   * Check what the completeness-icon should look like. If the node itself and all
   * children are completed, a solid filled circle should be visible.
   * Otherwise (if the node and/or one or more of its children is incomplete),
   * a half filled circle should be visible.
   * @param node: the node to check for completeness
   * @return {string[]}: the specifications of the icon
   */
  completenessIcon(node) {
    switch (node.data.type) {
      case GMNodeTypes.CHOICE:
        return ['fas', 'circle'];
      default:
        // default node
        if (GMNode.emptyNode(node)) {
          if (this.emptyChildren(node)) {
            return ['far', 'circle'];
          } else {
            return ['fas', 'adjust'];
          }
        } else if (GMNode.completeNode(node)) {
          // The node itself is complete, now check the children
          if (this.completeChildren(node)) {
            // Complete children
            return ['fas', 'circle'];
          } else {
            // At least one of the children is incomplete
            return ['fas', 'adjust'];
          }
        } else {
          return ['fas', 'adjust'];
        }
    }
  }

  getRootXY(node) {
    let current = node;
    while (current.parent !== null) {
      current = current.parent;
    }
    return [current.x, current.y];
  }

  /**
   * To render a node, a div element is created.
   * Inside this div we have another div to display the title of the node + a second div showing the content of it.
   * The last div is responsible for the interactions:
   * - Adding a child node
   * - Edit the current node
   * - Expand or collapse the current node to show or hide the child nodes (only visible if the node does have children)
   * */
  render() {
    const {
      centered,
      EditNodeComp,
      mode,
      node,
      onAddNode,
      onClick,
      onEditNode,
      onNodeDataChange,
      onNodePositionChange,
      onNodeVisibleChildrenChange,
      connectDragSource,
      connectDropTarget,
      isDragging, // injected by react dnd
    } = this.props;
    //console.log(this.getAllChildren(node, []));

    switch (node.data.type) {
      case GMNodeTypes.CHOICE:
        return (
          //connectDragSource(connectDropTarget(
          <div
            key={node.data.id}
            id={'node' + node.data.id}
            className={
              'node absolute ' +
              'border border-solid border-black rounded ' +
              'hover:border-red ' +
              'p-2 ' +
              (node.visible ? 'z-40 ' : 'z-0 ') +
              (node.visible ? 'visibleNode ' : 'hiddenNode ')
            }
            style={{
              width: GMNodeWidth,
              height: GMNodeHeight / 2,
              //transform: `translate(${node.x}px,${node.y + GMNodeHeight / 4}px)`,
              backgroundColor: node.backgroundColor,
              opacity: isDragging ? 0.5 : '',
              transition: centered && 'all 500ms ease 0s',
              '--nodex': node.x + 'px',
              '--nodey': node.y + GMNodeHeight / 4 + 'px',
              '--parentx': this.getRootXY(node)[0] + 'px', // fading goes always from/to the point of the root node
              '--parenty': this.getRootXY(node)[1] + 'px', // because the clicked node is centered first
            }}
            onClick={onClick}>
            <div // content div
              className={'invertColors text-base'}
              style={{color: node.backgroundColor}}>
              <FontAwesomeIcon
                className={'absolute pin-r text-base'}
                icon={this.completenessIcon(node)}
              />
              {'NodeType 2'}
            </div>
          </div>
        );
      default:
        // node.data.type === GMNodeTypes.DEFAULT
        return (
          //connectDragSource(connectDropTarget(
          <div
            key={node.data.id}
            id={'node' + node.data.id}
            className={
              'node absolute ' +
              'border border-solid border-black rounded ' +
              'hover:border-red ' +
              (node.visible ? 'z-40 ' : 'z-0 ') +
              (node.visible ? 'visibleNode ' : 'hiddenNode ')
            }
            style={{
              width: GMNodeWidth,
              height: GMNodeHeight,
              //transform: `translate(${node.x}px, ${node.y}px)`,
              color: node.backgroundColor,
              backgroundColor: node.backgroundColor,
              //opacity: isDragging ? 0.5 : '',
              transition: centered && 'all 500ms ease 0s',
              '--nodex': node.x + 'px',
              '--nodey': node.y + 'px',
              '--parentx': this.getRootXY(node)[0] + 'px', // fading goes always from/to the point of the root node
              '--parenty': this.getRootXY(node)[1] + 'px', // because the clicked node is centered first
            }}
            onClick={onClick}>
            <div // title div
              className={'flex pb-1 pt-1 pl-2 pr-2 rounded-t'}
              style={{
                borderBottom: '1px solid',
                borderColor: 'black',
                color: 'black',
                backgroundColor: 'white',
              }}>
              <div
                className={'w-5/6 text-base overflow-hidden'}
                style={{
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  //textAlign: 'center',
                }}>
                {node.title === '' ? 'No title' : node.title}
              </div>
              <div className={'w-1/6'}>
                <FontAwesomeIcon
                  icon={this.completenessIcon(node)}
                  className={'text-base'}
                />
              </div>
            </div>
            <div // content div
              className={
                'text-base pl-2 pr-2 pt-1 pb-1 overflow-hidden invertColors'
              }
              style={{
                color: node.backgroundColor, // this is inverted by the invertColors-class
                height: '2.6em', // 1.2 times WebkitLineClamp of the paragraph
              }}>
              <p
                style={{
                  WebkitLineClamp: 2,
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                }}>
                {node.content === '' ? 'Description' : node.content}
              </p>
            </div>
            <div // controls div
              className={'absolute pin-b flex rounded-b w-full'}>
              <AddChildButton
                bgcolor={node.backgroundColor}
                node={node}
                onAddNode={onAddNode}
                width={node.height !== 0 ? 'w-1/3' : 'w-1/2'}
              />
              <EditButton
                bgcolor={node.backgroundColor}
                EditNodeComp={EditNodeComp}
                leaf={node.height === 0}
                mode={mode}
                node={node}
                onEditNode={onEditNode}
                onNodeDataChange={onNodeDataChange}
                width={node.height !== 0 ? 'w-1/3' : 'w-1/2'}
              />
              {node.height !== 0 && (
                // At non-child nodes the expand-collapse button should be added
                <ExpandCollapseButton
                  bgcolor={node.backgroundColor}
                  node={node}
                  onNodeVisibleChildrenChange={onNodeVisibleChildrenChange}
                  width={'w-1/3'}
                />
              )}
            </div>
          </div>
        );
    }
  }
}

GMNode.propTypes = {
  connectDragSource: PropTypes.func, //.isRequired,
  connectDropTarget: PropTypes.func, //.isRequired,
  isDragging: PropTypes.bool, //.isRequired,
};

//export default GMNode;

export default flow(
  DragSource(ItemTypes.NODE, nodeSource, dragCollect),
  DropTarget(ItemTypes.NODE, nodeTarget, dropCollect),
)(GMNode);
