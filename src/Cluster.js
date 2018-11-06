import React from "react";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { NodeWidth, NodeHeight, maxZoomScale } from './Constants';
import './css/App.css';
import Zoom from './Zoom.js';

class Cluster extends React.Component {

    state = {...this.props};

    render() {

        const {nodeType, width, height, nodes, links}=this.state;

        // The type of the nodes is dynamic: the props define what kind of nodes should be represented.
		// In the case of GuideaMaps, NodeType = GuideMapsNode.
		const NodeType = nodeType;

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
            const childNodes = newState[nodeId].descendants();
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

        const updateNodeData = (nodeId, nodeTitle, nodeContent) => {
			const newState = this.state.nodes;
			newState[nodeId].data.name = nodeTitle;
			newState[nodeId].content = nodeContent;
			this.setState(newState);
		}

		const updateNodeBackground = (nodeId, hexColor, children) => {
			console.log("color");
			const newState = this.state.nodes;
			if(children) {
				// Take all the child nodes on all levels starting from this node (the node itself is included!)
				const childNodes = newState[nodeId].descendants();
				// Invert the show property of the node and all descending nodes
				for(let x = 0; x < childNodes.length; x++) {
					const child = childNodes[x];
					child.backgroundColor = hexColor;
				}
			} else {
				newState[nodeId].backgroundColor = hexColor;
			}
			this.setState(newState);
		}

        return (
			<div className={'absolute pin-t pin-l'}
				 style={{width: width, height: height}}
			>
				{
					<Zoom data={nodes} width={width} height={height} center={[width/2, height/2]} selectedId={null} maxZoomScale={maxZoomScale}>
						{(zoomedNodes, zHandler) => (
							<div>
								<svg className={'absolute pin-t pin-l'} style={{width: width, height: height}}>
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
									{
										links.map((l, index) =>
											<path
												key={index}
												d={	'M' + zHandler.apply([l.source.x, l.source.y]) +
													'L' + zHandler.apply([(l.source.x + l.target.x)/2, (l.source.y + l.target.y)/2]) +
													'L' + zHandler.apply([l.target.x, l.target.y])}
												stroke={'black'}
												markerMid={'url(#arrow)'}
												style={{
													transform: `translate(${NodeWidth / 2}px, ${NodeHeight / 2}px)`,
													display: l.target.show ? 'block' : 'none'}}
											/>

										)
									}
								</svg>
								{
									zoomedNodes.map(n =>
									<NodeType
										key={n.id}
										node={n}
										updateShowChildren={updateNodeShowChildren}
										updatePosition={updateNodePosition}
										updateEditing={updateNodeEdit}
										updateData={updateNodeData}
										updateBackgroundColor={updateNodeBackground}
									/>
									)
								}
							</div>
						)}
					</Zoom>
				}
			</div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Cluster);
