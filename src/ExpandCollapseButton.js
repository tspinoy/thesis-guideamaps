import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class ExpandCollapseButton extends React.Component {
  constructor(props) {
    super(props);
    const {node, update} = this.props;
    //this.state = { node, update };
    this.state = {nodeId: node.id, showChildren: node.showChildren, update};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // This syntax ensures `this` is bound within handleClick.
  handleClick() {
    // Update the local state
    this.setState({showChildren: !this.state.showChildren});

    // Update the global state. The local state is only to know which icon to represent.
    // The global state makes sure to collapse all child nodes of this node on all deeper levels.
    this.props.update(this.state.nodeId);
  }

  render() {
    return (
      <button
        className={
          'bg-grey-light hover:bg-grey ' +
          'text-grey-darkest font-bold ' +
          'py-1 px-1 ' +
          'rounded-r items-center ' +
          'block'
        }
        style={{width: 100}}
        onClick={this.handleClick}>
        <FontAwesomeIcon
          icon={this.state.showChildren ? 'compress' : 'expand'}
        />
      </button>
    );
  }
}

export default ExpandCollapseButton;
