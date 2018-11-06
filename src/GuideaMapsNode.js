import React from "react";
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';

import './css/App.css';
import { NodeWidth, NodeHeight } from './Constants';
import AddChildButton from './AddChildButton';
import EditButton from './EditButton';
import ExpandCollapseButton from './ExpandCollapseButton';

const nodeSource = {
    beginDrag(props, monitor, component) {
		console.log(monitor.getItem());
		return {
			nodeId: props.id
		};
	},
	endDrag(props, monitor, component) {
    	console.log(props);
    	console.log(monitor);
    	console.log(component);
    	let newPositions = monitor.getClientOffset();
    	console.log(newPositions);
	}
};

const nodeTarget = {
	drop(props, monitor) {
		console.log(props);
		console.log(monitor);
	}
}

function dragCollect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
    }
}

function dropCollect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver()
	}
}

class GuideaMapsNode extends React.Component {

	constructor(props) {
		super(props);
		this.state = { editing: false };

		// This binding is necessary to make `this` work in the callback
		this.startStopEditing = this.startStopEditing.bind(this);
	}

	startStopEditing() {
		console.log(this.state);
		const newState = this.state;
		newState.editing = !newState.editing;
		this.setState(newState);
	}

	/**
	 * To render a node, a div element is created.
	 * Inside this div we have another div to display the title of the node + a second div showing the content of it.
	 * The last div is responsible for the interactions:
	 * - Adding a child node
	 * - Edit the current node
	 * - Expand or collapse the current node to show or hide the child nodes (only visible if the node does have children)
	 * */
    render() {
		const {
			node, updateShowChildren, updatePosition, updateEditing, updateData, updateBackgroundColor, // passed by the renderNodes-function in Cluster.js
			connectDragSource, connectDropTarget, isDragging // injected by react dnd
		} = this.props;
        return connectDragSource(connectDropTarget(
            <div
                key={node.data.name}
                className={
                    'absolute ' +
                    'border border-solid border-black rounded ' +
					(this.state.editing ? 'z-50 ' : 'z-0 ') +
                    'p-2 '}
                style={{
                    width: NodeWidth, height: NodeHeight,
                    transform: `translate(${node.x}px, ${node.y}px)`,
                    display: node.show ? 'block' : 'none',
					backgroundColor: node.backgroundColor,
                    cursor: 'move',
                    opacity: isDragging ? 0.5 : 1}}>

                <div className={'font-sans text-lg mb-2'}>
                    {node.data.name}
                </div>
                <div className={'font-sans text-base mb-2 ' +
								'overflow-hidden'}
                     style={{height: '1.2em', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                    {node.content}
                </div>
				{node.height === 0 ?
					/* Is this a leaf node? Only show the add- and edit-button */
					<div className={'flex'}>
						<AddChildButton />
						<EditButton node={node}
									leaf={true}
									startStopEditing={this.startStopEditing}
									updateData={updateData}
									updateBackgroundColor={updateBackgroundColor}/>
					</div> :
					/* If it is not a leaf node, the expand-collapse-button is also shown */
					<div className={'flex'}>
						<AddChildButton />
						<EditButton node={node}
									leaf={false}
									startStopEditing={this.startStopEditing}
									updateData={updateData}
									updateBackgroundColor={updateBackgroundColor}/>
						<ExpandCollapseButton node={node}
											  update={updateShowChildren}/>
					</div>
				}
				<div>{node.editing}</div>
            </div>))
    }
}

GuideaMapsNode.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};


export default flow(
	DragSource(ItemTypes.NODE, nodeSource, dragCollect),
	DropTarget(ItemTypes.NODE, nodeTarget, dropCollect)
)(GuideaMapsNode);
