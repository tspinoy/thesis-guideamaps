import React from "react";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Node from './Node';
import { NodeWidth, NodeHeight, project } from './Constants';
import './css/App.css';

const RenderNodes = (props) => {
    return <div>
        {
            props.nodes.map(n =>
                <Node key={n.id}
                      node={n}
                      updateShowChildren={props.updateShowChildren}
                      updatePosition={props.updatePosition}
                      updateEditing={props.updateEditing}/>
            )
        }
        </div>
};

class Cluster extends React.Component {

    state = {...this.props};

    render() {

        const {width, height, nodes, links}=this.state;

        /**
         * Expand or collapse a particular node with id = nodeId.
         * @param nodeId: The id of the node of which we want to show or hide the descendant nodes.
         */
        const updateNodeShowChildren = nodeId => {
            // Start from the current state
            const newState = this.state.nodes;
            // Invert the showChildren value: collapse => expand and expand => collapse
            newState[nodeId].showChildren = !this.state.nodes[nodeId].showChildren;
            // Take all the child nodes on all levels starting from this node (the node itself is included!)
            const childNodes = this.state.nodes[nodeId].descendants();
            // Invert the show property of all descending nodes, start from 1 to not hide the node itself!
            for(let x = 1; x < childNodes.length; x++) {
                const child = childNodes[x];
                child.show = newState[nodeId].showChildren;
                child.showChildren = newState[nodeId].showChildren;
            }
            // Save the new state
            this.setState(newState);
        };

		/**
		 * Update the position of the node after a drag and drop event.
		 * @param nodeId: The id of the node of which the coordinates have to change.
		 * @param newX: The new x-coordinate of the node.
		 * @param newY: The new y-coordinate of the node.
		 */
		const updateNodePosition = (nodeId, newX, newY) => {
        	// Start from the current state
            const newState = this.state.nodes;
            // Update the x and y coordinates of the node
            newState[nodeId].x = newX;
            newState[nodeId].y = newY;
            // Save the new state
            this.setState(newState);
        }

		/**
		 * When the popup to edit a node is opened or closed,
		 * a state change is required to know the value of the z-index for that node.
		 * @param nodeId: The id of the node of which we have to invert the editing-field.
		 */
		const updateNodeEdit = nodeId => {
			// Start from the current state
		    const newState = this.state.nodes;
		    // Invert the editing-field of the node: true => false, false => true
		    newState[nodeId].editing = !this.state.nodes[nodeId].editing;
		    // Save the new state
		    this.setState(newState);
        }

        /**
         * Draw all the links between the nodes that are currently shown.
         *
         * To know a link should be shown, we look at the target node of the link.
         * If this target node is shown, the link should be visible as well.
         * */
        const returnAllLinks = () => {
            return links.map((link, index) =>
                <svg key={index}>
                    <defs>
                        <marker
                            id="arrow"
                            markerUnits="strokeWidth"
                            markerWidth="12"
                            markerHeight="12"
                            viewBox="0 0 12 12"
                            refX="6"
                            refY="6"
                            orient="auto">
                            <path d="M2,2 L10,6 L2,10 L6,6 L2,2" style={{fill: 'black'}}/>
                        </marker>
                    </defs>
                    <path d={
                            'M ' + project(link.source.x, link.source.y) +
                            ' L ' + (project(link.source.x, link.source.y)[0] + project(link.target.x, link.target.y)[0])/2 + ',' + (project(link.source.x, link.source.y)[1] + project(link.target.x, link.target.y)[1])/2 +
                            ' L ' + project(link.target.x, link.target.y)}
                          stroke={'black'}
                          markerMid={'url(#arrow)'}
                          style={{
                              transform: `translate(${(width / 2) + (NodeWidth / 2)}px, ${(height / 2) + (NodeHeight / 2)}px)`,
                              display: link.target.show ? 'block' : 'none'}}/>
                </svg>)
        };

        return (
            <div style={{width: width, height: height}}>
                <svg className={'absolute pin-t pin-l'}
					 style={{width: width, height: height}}>
                    {returnAllLinks()}
                </svg>
                <div className={'absolute pin-t pin-l'}
					 style={{width: width, height: height, transform: `translate(${width/2}px, ${height/2}px`}}>
                    <RenderNodes nodes={nodes}
                                 updateShowChildren={updateNodeShowChildren}
                                 updatePosition={updateNodePosition}
                                 updateEditing={updateNodeEdit}/>
                </div>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Cluster);
