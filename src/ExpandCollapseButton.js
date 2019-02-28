import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class ExpandCollapseButton extends React.Component {
  constructor(props) {
    super(props);
    const {node} = this.props;
    this.state = {
      nodeId: node.id,
      visibleChildren: node.visibleChildren,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // This syntax ensures `this` is bound within handleClick.
  handleClick() {
    // Update the local state
    this.setState({visibleChildren: !this.state.visibleChildren});

    // Update the global state. The local state is only to know which icon to represent.
    // The global state makes sure to collapse all child nodes of this node on all deeper levels.
    this.props.onNodeVisibleChildrenChange(this.state.nodeId);
  }

  render() {
    return (
      <div className={'tooltip ' + this.props.width}>
        <button
          className={
            'text-grey-darkest font-bold ' +
            'py-1 px-1 ' +
            'rounded-br items-center ' +
            'block invertColors w-full'
          }
          style={{
            borderTop: '1px solid',
            borderColor: this.props.node.backgroundColor, // inverted by invertColors
            color: this.props.node.backgroundColor, // inverted by invertColors
          }}
          onClick={this.handleClick}>
          <FontAwesomeIcon
            icon={this.state.visibleChildren ? 'compress' : 'expand'}
          />
        </button>
        <span className="tooltiptext">{this.state.visibleChildren ? 'Collapse' : 'Expand'}</span>
      </div>
    );
  }
}

export default ExpandCollapseButton;
