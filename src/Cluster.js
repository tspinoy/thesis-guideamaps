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
                    'p-2 w-32'}
                    style={{left: n.x, transform: `translate(${project(n.x, n.y)[0]}px, ${project(n.x, n.y)[1]}px)`}}>
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
            const allNodes = nodes.descendants().slice(1);
            return allNodes.map(node =>
                    <path
                        d={"M " + project(node.x, node.y) + " L " + project(node.parent.x, node.parent.y)}
                        stroke={"black"}
                    />)
        };

        return (
            <div style={{width: width, height: height, transform: `translate(${width/2}px, ${height/2+20}px`}}>
                <svg className={'absolute pin-t pin-l'}>
                    {returnAllLinks()}
                </svg>
                <div>
                    {renderAllNodes()}
                </div>
            </div>
        );
    }
}