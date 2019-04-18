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
    this.props.onNodeUpdate(
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
    setTimeout(() => this.updateOpenState(), this.state.isOpen ? 550 : 0);
  }

  render() {
    const {
      mode,
      node,
      EditModalComp,
      bgcolor,
      locked,
      onDeleteNode,
    } = this.props;
    return (
      <div className={'tooltip ' + this.props.width}>
        <button
          id={'editbtn' + this.props.node.data.id}
          className={
            'block ' +
            (this.props.leaf ? '' : this.props.border ? 'border-r ' : '') +
            (!locked ? 'cursor-pointer ' : 'cursor-default ') +
            'items-center invertColors ' +
            'text-grey-darkest font-bold ' +
            'py-1 px-1'
          }
          style={{
            width: '100%',
            borderTop: this.props.border ? '1px solid' : '',
            borderColor: bgcolor, // inverted by invertColors
            color: bgcolor, // inverted by invertColors
            outline: 'none',
          }}
          onClick={!locked ? this.toggleModal : undefined}>
          <FontAwesomeIcon icon={'search'} size={this.props.iconSize} />
        </button>
        {this.props.tooltiptext !== false && (
          <span className={!locked ? 'tooltiptext' : ''}>
            {!locked && 'Open & edit'}
          </span>
        )}
        {this.state.isOpen &&
          ReactDOM.createPortal(
            <EditModalComp
              onDeleteNode={onDeleteNode}
              mode={mode}
              node={node}
              nodeTitle={node.title}
              nodeContent={node.content}
              nodeBackground={bgcolor}
              show={this.state.isOpen}
              updateNode={this.updateNode}
              onClose={this.toggleModal}
            />,
            document.getElementById('modalSpace'),
          )}
      </div>
    );
  }
}

export default EditButton;
