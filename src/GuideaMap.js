import React from 'react';
import * as d3 from 'd3';
import PropTypes from 'prop-types';

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
                className={'bg-grey-light hover:bg-grey ' +
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
                className={'bg-grey-light hover:bg-grey ' +
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
                className={'bg-grey-light hover:bg-grey ' +
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

const VisNodes = (props) => {

    return <div>
        {
            props.nodes.map(n =>
                <div
                    key={n.id}
                    className={'absolute bg-white ' +
                    '                border border-solid border-black rounded ' +
                    '                p-2 w-32'}
                    style={{left: n.x, top: n.y, opacity: n.show ? 1 : 0, transform: `translate(${-50}%, ${-50}%)`}}>
                    <div className={'font-sans text-lg mb-2'}>
                        Title
                    </div>
                    <div className={'font-sans text-base mb-2'}
                         style={{height: '1.2em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                        The content is not completely shown, great!
                    </div>
                    <div className={'flex'}>
                        <AddChildButton/>
                        <EditButton/>
                        <ExpandCollapseButton node={n} update={props.update}/>
                    </div>
                </div>)
        }
    </div>
};

export default class GuideaMap extends React.Component {

    componentDidMount () {
        const {nodes, links}=this.state;
        const {width, height}=this.props;


        const simulation = d3.forceSimulation(nodes)
            .force("charge", d3.forceManyBody())
            .force("link", d3.forceLink(links).distance(20).strength(1))
            // center content
            .force('center', d3.forceCenter(width / 2, height / 2))
            // prevent overlapping of elements
            .force('collision', d3.forceCollide().radius(100))
            //.force("x", d3.forceX())
            //.force("y", d3.forceY())
            .on("tick", () => {
                const tempnodes = simulation.nodes();
                const templinks = simulation.force("link").links();
                this.setState({nodes: tempnodes, links: templinks});
            });
    }

    static propTypes = {nodes: PropTypes.array, links: PropTypes.array};
    static defaultProps = {nodes: [], links: [], width: 100, height: 100};

    state = {...this.props};


    render () {
        const {nodes, links}=this.state;
        const {width, height}=this.props;

        const updateNodeShowChildren = nodeId => {
            const newState = this.state.nodes;
            newState[nodeId].showChildren = !this.state.nodes[nodeId].showChildren;
            this.setState(newState);
            console.log(this.state.links);
            var x;
            for(x = 0; x < this.state.links.length; x++) {
                const link = this.state.links[x];
                if(nodeId === link.source.id) {
                    updateShowNode(link.target.id);
                }
            }
        };

        const updateShowNode = nodeId => {
            const newState = this.state.nodes;
            newState[nodeId].show = !this.state.nodes[nodeId].show;
            this.setState(newState);
        };

        const renderedLinks =
            links.map(({source, id, target}) =>
                <svg key={id}>
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
                          key={id}
                          x1={source.x}
                          y1={source.y}
                          x2={target.x}
                          y2={target.y}
                          stroke={'black'}
                          markerEnd='url(#arrow)'
                          style={{opacity: source.showChildren ? 1 : 0}}>
                    </line>
                </svg>);

        return  <div>
                    <svg className={'absolute pin-t pin-l'} style={{width, height}}>
                        {renderedLinks}
                    </svg>
                    <div className={'absolute pin-t pin-l'} style={{width, height}}>
                        <VisNodes nodes={nodes} update={updateNodeShowChildren}/>
                    </div>
                </div>
    }
}