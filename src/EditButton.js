import React from 'react';
import * as ReactDOM from 'react-dom';
import EditModal from './EditModal';

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

  updateNode(newTitle, newContent, newBackground, includeChildren) {
    this.props.updateData(this.props.node.id, newTitle, newContent);
    this.props.updateBackgroundColor(
      this.props.node.id,
      newBackground,
      includeChildren,
    );
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const {node} = this.props;
    return (
      <div className={this.props.width}>
        <button
          className={
            'bg-grey-light hover:bg-grey ' +
            'text-grey-darkest font-bold ' +
            (this.props.leaf ? 'rounded-r ' : 'border-r ') +
            'border-l border-grey border-solid ' +
            'py-1 px-1 ' +
            'items-center '
          }
          style={{width: '100%'}}
          onClick={this.toggleModal}>
          Edit
        </button>
        {this.state.isOpen &&
          ReactDOM.createPortal(
            <EditModal
              nodeTitle={node.title}
              nodeContent={node.content}
              nodeBackground={node.backgroundColor}
              show={this.state.isOpen}
              updateNode={this.updateNode}
              onClose={this.toggleModal}
            />,
            document.getElementById('editField'),
          )}
      </div>
    );
  }
}

export default EditButton;
