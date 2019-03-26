import React from 'react';
import * as ReactDOM from 'react-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class EditButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    /* This binding is necessary to make `this` work in the callback.
     * For instance to be able to use "this.props..." and "this.state...".
     */
    this.updateNode = this.updateNode.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  updateNode(
    nodeId,
    newDescription,
    newTitle,
    newContent,
    newBackground,
    includeChildren,
  ) {
    this.props.onNodeDataChange(
      nodeId,
      newDescription,
      newTitle,
      newContent,
      newBackground,
      includeChildren,
    );
  }

  updateOpenState() {
    this.setState({isOpen: !this.state.isOpen});
  }

  toggleModal() {
    this.props.onEditNode();
    // Depending on the animation, you have to wait before the state is changed.
    // The content of #editField is deleted when the this.state.isOpen = false.
    // Hence, we have to wait to delete it until the animation is finished.
    setTimeout(() => this.updateOpenState(), this.state.isOpen ? 1000 : 600);
  }

  render() {
    const {
      node,
      deleteNode,
      EditNodeComp,
      bgcolor,
      onClick,
      onNodeLockUnlock,
    } = this.props;
    return (
      <div className={'tooltip ' + this.props.width}>
        <button
          id={'editbtn' + this.props.node.data.id}
          className={
            'block text-grey-darkest font-bold ' +
            (this.props.leaf ? '' : this.props.border ? 'border-r ' : '') +
            'py-1 px-1 ' +
            'items-center invertColors'
          }
          style={{
            width: '100%',
            borderTop: this.props.border ? '1px solid' : '',
            borderColor: bgcolor, // inverted by invertColors
            color: bgcolor, // inverted by invertColors
            outline: 'none',
          }}
          onClick={() => this.toggleModal()}>
          <FontAwesomeIcon icon={'search'} size={this.props.iconSize} />
        </button>
        {this.props.tooltiptext !== false && (
          <span className={'tooltiptext'}>Open & edit</span>
        )}
        {this.state.isOpen &&
          ReactDOM.createPortal(
            <EditNodeComp
              deleteNode={deleteNode}
              node={node}
              mode={this.props.mode}
              nodeTitle={node.title}
              nodeContent={node.content}
              nodeBackground={bgcolor}
              show={this.state.isOpen}
              updateNode={this.updateNode}
              onClose={this.toggleModal}
              onNodeLockUnlock={onNodeLockUnlock}
            />,
            document.getElementById('modalSpace'),
          )}
      </div>
    );
  }
}

export default EditButton;
