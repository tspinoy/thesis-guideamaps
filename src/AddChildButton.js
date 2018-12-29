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
    //this.props.addChildNode(this.props.node);
  }

  render() {
    return (
      <button
        className={
          'bg-grey-light hover:bg-grey ' +
          'text-grey-darkest font-bold ' +
          'py-1 px-1 invertColors' +
          'rounded-l items-center rounded-l ' +
          this.props.width
        }
        style={{display: 'block', borderColor: this.props.bgcolor}}
        onClick={this.handleClick}>
        <FontAwesomeIcon icon={'plus'} />
      </button>
    );
  }
}

export default AddChildButton;
