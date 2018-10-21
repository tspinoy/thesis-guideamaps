import React from "react";
import * as d3 from "d3";
import tree from "d3-hierarchy/src/tree";

import './css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddChildButton extends React.Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {

    };

    render() {
        return (
            <button
                className={'bg-grey-light hover:enabled:bg-grey ' +
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

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {

    };

    render() {
        return (
            <button
                className={'bg-grey-light hover:enabled:bg-grey ' +
                'text-grey-darkest font-bold ' +
                'border-l border-r border-grey border-solid ' +
                'py-1 px-1 ' +
                'items-center'}
                style={{display: 'block', width: 100}}
                onClick={this.handleClick}>
                Edit
            </button>
        );
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
    // Warning: this is *experimental* syntax.
    handleClick = () => {
        this.props.update(this.state.node.id);
    };

    render() {
        return (
            <button
                className={'bg-grey-light hover:enabled:bg-grey ' +
                'text-grey-darkest font-bold ' +
                'py-1 px-1 ' +
                'rounded-r items-center'}
                style={{display: 'block', width: 100}}
                onClick={this.handleClick}
                disabled={true}>
                <FontAwesomeIcon icon={this.state.node.showChildren ? 'compress' : 'expand'}/>
            </button>
        );
    }
}

export default class Cluster extends React.Component {

    render() {

        const {width, height, nodes, links}=this.props;

        const nodeWidth = 130;
        const nodeHeight = 100;

        console.log(nodes);

        console.log(nodes.descendants());

        const project = (x, y) => {
            var angle = (x - 90) / 180 * Math.PI, radius = y;
            return [radius * Math.cos(angle), radius * Math.sin(angle)];
        };

        const renderAllNodes = () => {
            const allNodes = nodes.descendants();
            return allNodes.map(n =>
                <div
                    key={n.data.name}
                    className={'absolute bg-white ' +
                    'border border-solid border-black rounded ' +
                    'p-2'}
                    style={{width: nodeWidth, height: nodeHeight, transform: `translate(${project(n.x, n.y)[0]}px, ${project(n.x, n.y)[1]}px)`}}>
                    <div className={'font-sans text-lg mb-2'}>
                        {n.data.name}
                    </div>
                    <div className={'font-sans text-base mb-2'}
                         style={{height: '1.2em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                        The content is not completely shown, great!
                    </div>
                    <div className={'flex'}>
                        <AddChildButton />
                        <EditButton />
                        <ExpandCollapseButton node={n}/>
                    </div>
                </div>
            )
        };

        const returnAllLinks = () => {
            console.log(links);
            return links.map((link) =>
                <svg>
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
                          style={{transform: `translate(${(width / 2) + (nodeWidth / 2)}px, ${(height / 2) + (nodeHeight / 2)}px`}}/>
                </svg>)
        };

        return (
            <div style={{width: width, height: height}}>
                <svg className={'absolute pin-t pin-l'} style={{width: width, height: height}}>
                    {returnAllLinks()}
                </svg>
                <div className={'absolute pin-t pin-l'} style={{width: width, height: height, transform: `translate(${width/2}px, ${height/2}px`}}>
                    {renderAllNodes()}
                </div>
            </div>
        );
    }
}