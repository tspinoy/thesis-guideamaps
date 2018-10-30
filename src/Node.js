import React from "react";
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';
import './css/App.css';

import './NodeEditPopup';
import { NodeWidth, NodeHeight, project } from './Constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popup from "reactjs-popup";


class AddChildButton extends React.Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    // This syntax ensures `this` is bound within handleClick.
    handleClick() {

    };

    render() {
        return (
            <button className={
                        'bg-grey-light hover:bg-grey ' +
                        'text-grey-darkest font-bold ' +
                        'py-1 px-1 ' +
                        'rounded-l items-center'}
                    style={{display: 'block', width: 100}}
                    onClick={this.handleClick}>
                <FontAwesomeIcon icon={'plus'}/>
            </button>
    );
    }
}

class EditButton extends React.Component {
    constructor(props) {
        super(props);
        const {node, leaf, update} = this.props;
		this.state = { node, leaf };

        // This binding is necessary to make `this` work in the callback
        this.handleOpenCloseEditPopup = this.handleOpenCloseEditPopup.bind(this);
    }

	/**
	 * When the popup is opened, we want to make sure the popup is on top of all other elements.
	 * We call the update function to temporarily update the 'editing'-field of the node.
	 * This field is checked to know which z-index to apply.
	 * Check out {@link Cluster.render#updateNodeEdit}
	 */
    handleOpenCloseEditPopup() {
    	this.props.update(this.state.node.id);
    };

    render() {
		const editButton =
			<button className={
					'bg-grey-light hover:bg-grey ' +
					'text-grey-darkest font-bold ' +
					(this.state.leaf ? 'rounded-r ' : 'border-r ') +
					'border-l border-grey border-solid ' +
					'py-1 px-1 ' +
					'items-center'}
						style={{display: 'block', width: 100}}>
				Edit
			</button>;

		/**
		 * The button we return triggers a popup showing the details of the node.
		 * Created with reactjs-popup.
		 */
		return (
			<Popup
				trigger={editButton}
				contentStyle={{width: '500px'}}
				onOpen={this.handleOpenCloseEditPopup}
				onClose={this.handleOpenCloseEditPopup}
				closeOnDocumentClick={true}
			>
				{close => (
					<div className="w-full">
						<form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
							<div className="mb-4">
								<label className="block text-grey-darker text-sm font-bold mb-2">
									Node title
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
									type={'text'} placeholder={'Node title'} defaultValue={this.state.node.data.name}>
								</input>
							</div>
							<div className="mb-6">
								<label className="block text-grey-darker text-sm font-bold mb-2">
									Content
								</label>
								<textarea
									className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
									placeholder={'Node content'} defaultValue={this.state.node.content}>
							</textarea>
							</div>
							<div className="flex items-center justify-between">
								<button onClick={() => close()}>
									Close
								</button>
								<button
									className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="submit">
									Save
								</button>
							</div>
						</form>
					</div>
				)}
			</Popup>
		)
    }
}

class ExpandCollapseButton extends React.Component {
    constructor(props) {
        super(props);
        const {node, update} = this.props;
        this.state={node, update};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    // This syntax ensures `this` is bound within handleClick.
    handleClick() {
        this.props.update(this.state.node.id);
    };

    render() {
        return (
            <button className={
                        'bg-grey-light hover:bg-grey ' +
                        'text-grey-darkest font-bold ' +
                        'py-1 px-1 ' +
                        'rounded-r items-center'}
                    style={{display: 'block', width: 100}}
                    onClick={this.handleClick}>
                <FontAwesomeIcon icon={this.state.node.showChildren ? 'compress' : 'expand'}/>
            </button>
        );
    }
}


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
    	var newPositions = monitor.getClientOffset();
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

class Node extends React.Component {

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
          node, updateShowChildren, updatePosition, updateEditing, // passed by the renderNodes-function in Cluster.js
          connectDragSource, connectDropTarget, isDragging // injected by react dnd
        } = this.props;
        return connectDragSource(connectDropTarget(
            <div
                key={node.data.name}
                className={
                    'absolute bg-white ' +
                    'border border-solid border-black rounded ' +
					(node.editing ? 'z-50 ' : 'z-0 ') +
                    'p-2 '}
                style={{
                    width: NodeWidth, height: NodeHeight,
                    transform: `translate(${project(node.x, node.y)[0]}px, ${project(node.x, node.y)[1]}px)`,
                    display: node.show ? 'block' : 'none',
                    cursor: 'move',
                    opacity: isDragging ? 0.5 : 1}}>

                <div className={'font-sans text-lg mb-2'}>
                    {node.data.name}
                </div>
                <div className={'font-sans text-base mb-2'}
                     style={{height: '1.2em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                    {node.content}
                </div>
				{node.height === 0 ?
					/* Is this a leaf node? Only show the add- and edit-button */
					<div className={'flex'}>
						<AddChildButton />
						<EditButton node={node}
									leaf={true}
									update={updateEditing}/>
					</div> :
					/* If it is not a leaf node, the expand-collapse-button is also shown */
					<div className={'flex'}>
						<AddChildButton />
						<EditButton node={node}
									leaf={false}
									update={updateEditing}/>
						<ExpandCollapseButton node={node}
											  update={updateShowChildren}/>
					</div>
				}
				<div>{node.editing}</div>
            </div>))
    }
}

Node.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};


export default flow(
	DragSource(ItemTypes.NODE, nodeSource, dragCollect),
	DropTarget(ItemTypes.NODE, nodeTarget, dropCollect)
)(Node);
