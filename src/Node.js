import React from "react";
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

import { NodeWidth, NodeHeight, project } from './Constants'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class AddChildButton extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick() {

  };

  render() {
    return (
      <button
        className={'bg-grey-light hover:bg-grey ' +
        'text-grey-darkest font-bold ' +
        'py-1 px-1 ' +
        'rounded-l items-center'}
        style={{display: 'block', width: 100}}
        onClick={this.handleClick}>
        <FontAwesomeIcon icon={'plus'}/>
      </button>
    );
  }
}

class EditButton extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // This syntax ensures `this` is bound within handleClick.
  handleClick() {

  };

  render() {
    return (
      <button
        className={'bg-grey-light hover:bg-grey ' +
        'text-grey-darkest font-bold ' +
        'border-l border-r border-grey border-solid ' +
        'py-1 px-1 ' +
        'items-center'}
        style={{display: 'block', width: 100}}
        onClick={this.handleClick}>
        Edit
      </button>
    );
  }
}

class ExpandCollapseButton extends React.Component {
  constructor(props) {
    super(props);
    const {node, update} = this.props;
    this.state={node, update};


    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick() {
    this.props.update(this.state.node.id);
  };

  render() {
    return (
      <button
        className={'bg-grey-light hover:bg-grey ' +
        'text-grey-darkest font-bold ' +
        'py-1 px-1 ' +
        'rounded-r items-center'}
        style={{display: 'block', width: 100}}
        onClick={this.handleClick}>
        <FontAwesomeIcon icon={this.state.node.showChildren ? 'compress' : 'expand'}/>
      </button>
    );
  }
}


const nodeSource = {
  beginDrag(props) {
    return {
      nodeId: props.id
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Node extends React.Component {

    render() {
        const { node, update, connectDragSource, isDragging } = this.props;
        return connectDragSource(
          <div
                  key={node.data.name}
                  className={'absolute bg-white ' +
                  'border border-solid border-black rounded ' +
                  'p-2'}
                  style={{
                    width: NodeWidth, height: NodeHeight,
                    transform: `translate(${project(node.x, node.y)[0]}px, ${project(node.x, node.y)[1]}px)`,
                    display: node.show ? 'block' : 'none',
                    cursor: 'move',
                    opacity: isDragging ? 0.5 : 1}}>
                  <div className={'font-sans text-lg mb-2'}>
                    {node.data.name}
                  </div>
                  <div className={'font-sans text-base mb-2'}
                       style={{height: '1.2em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                    The content is not completely shown, great!
                  </div>
                  <div className={'flex'}>
                    <AddChildButton />
                    <EditButton />
                    <ExpandCollapseButton node={node} update={update}/>
                  </div>
                </div>)
    }
}

Node.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.NODE, nodeSource, collect)(Node);
