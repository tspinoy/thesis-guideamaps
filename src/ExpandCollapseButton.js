import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ExpandCollapseButton extends React.Component {
	constructor (props) {
		super(props);
		const { node, update } = this.props;
		this.state = { node, update };

		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	// This syntax ensures `this` is bound within handleClick.
	handleClick () {
		this.props.update(this.state.node.id);
	};

	render () {
		return (
			<button className={
				'bg-grey-light hover:bg-grey ' +
				'text-grey-darkest font-bold ' +
				'py-1 px-1 ' +
				'rounded-r items-center'}
					style={{ display: 'block', width: 100 }}
					onClick={this.handleClick}>
				<FontAwesomeIcon icon={this.state.node.showChildren ? 'compress' : 'expand'}/>
			</button>
		);
	}
}

export default ExpandCollapseButton;
