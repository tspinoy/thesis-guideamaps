import React from 'react';
import * as ReactDOM from 'react-dom';
import EditModal from './EditModal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            'block text-grey-darkest font-bold ' +
            (this.props.leaf ? '' : 'border-r ') +
            'py-1 px-1 ' +
            'items-center invertColors'
          }
          style={{
            width: '100%',
            borderTop: '1px solid',
            borderColor: node.backgroundColor, // inverted by invertColors
            color: node.backgroundColor, // inverted by invertColors
          }}
          onClick={this.toggleModal}>
          <FontAwesomeIcon icon={'edit'} />
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
