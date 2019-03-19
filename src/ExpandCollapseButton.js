import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class ExpandCollapseButton extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // This syntax ensures `this` is bound within handleClick.
  handleClick() {
    // Update the global state. The local state is only to know which icon to represent.
    // The global state makes sure to collapse all child nodes of this node on all deeper levels.
    this.props.onNodeVisibleChildrenChange(this.props.node.data.id);
  }

  render() {
    const {node} = this.props;
    return (
      <div className={'tooltip ' + this.props.width}>
        <button
          id={'ec-btn-node' + this.props.node.data.id}
          className={
            'block expand-collapse-btn font-bold invertColors items-center ' +
            'px-1 py-1 rounded-br text-grey-darkest w-full'
          }
          style={{
            borderTop: '1px solid',
            borderColor: node.backgroundColor, // inverted by invertColors
            color: node.backgroundColor, // inverted by invertColors
          }}
          onClick={this.handleClick}>
          <FontAwesomeIcon
            icon={this.props.node.visibleChildren ? 'compress' : 'expand'}
          />
        </button>
        <span className="tooltiptext">
          {node.visibleChildren ? 'Collapse' : 'Expand'}
        </span>
      </div>
    );
  }
}

export default ExpandCollapseButton;
