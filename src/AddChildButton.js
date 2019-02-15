import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class AddChildButton extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // This syntax ensures `this` is bound within handleClick.
  handleClick() {
    //this.props.onAddNode(this.props.node);
  }

  render() {
    return (
      <button
        className={
          'block text-grey-darkest font-bold ' +
          'py-1 px-1 ' +
          'rounded-bl items-center invertColors ' +
          this.props.width
        }
        style={{
          borderTop: '1px solid',
          borderRight: '1px solid',
          borderColor: this.props.node.backgroundColor,
          color: this.props.node.backgroundColor,
        }}
        onClick={this.handleClick}>
        <FontAwesomeIcon icon={'plus'} />
      </button>
    );
  }
}

export default AddChildButton;
