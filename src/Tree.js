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

export default class Tree extends React.Component {

    render() {

        const {nodes, links}=this.props;

        console.log(nodes);

        console.log(nodes.descendants());

        const renderAllNodes = () => {
            const allNodes = nodes.descendants();
            return allNodes.map(n =>
                <div
                    key={n.data.name}
                    className={'absolute bg-white ' +
                               'border border-solid border-black rounded ' +
                               'p-2 w-32'}
                    style={{left: n.x, top: n.y, transform: `translate(${-50}%, ${-50}%)`}}>
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

        console.log(nodes.links());

        const returnAllLinks = () => {
            const allLinks = nodes.links();
            return allLinks.map((node) =>
                <svg>
                    <defs>
                        <marker id={'arrow'}
                                viewBox={'0 -5 10 10'} /* viewBox={min-x min-y width height} */
                                refX={'75'} refY={'0'}
                                markerWidth={'13'} markerHeight={'13'}
                                orient={'auto'}>
                            <path d="M0,-5L10,0L0,5" className={'arrow-head'} />
                        </marker>
                    </defs>
                    <line className={'link'}
                          x1={node.source.x}
                          y1={node.source.y}
                          x2={node.target.x}
                          y2={node.target.y}
                          stroke={'black'}
                          markerEnd='url(#arrow)'>
                    </line>
                </svg>)
        };

        return (
            <div>
                <svg className={'absolute pin-t pin-l'} style={{width: 1400, height: 800, transform: `translate(${50}px, ${100}px`}}>
                    {returnAllLinks()}
                </svg>
                <div style={{transform: `translate(${50}px, ${100}px`}}>
                    {renderAllNodes()}
                </div>
            </div>
        );
    }
}