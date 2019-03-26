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
    this.props.onAddNode(this.props.node);
  }

  render() {
    return (
      <div className={'tooltip ' + this.props.width}>
        <button
          className={
            'block text-grey-darkest font-bold ' +
            'py-1 px-1 ' +
            'rounded-bl items-center invertColors w-full'
          }
          style={{
            borderTop: '1px solid',
            borderRight: '1px solid',
            borderColor: this.props.node.backgroundColor,
            color: this.props.node.backgroundColor,
            outline: 'none',
          }}
          onClick={this.handleClick}>
          <FontAwesomeIcon icon={'plus'} />
        </button>
        <span className="tooltiptext">Add child node</span>
      </div>
    );
  }
}

export default AddChildButton;
