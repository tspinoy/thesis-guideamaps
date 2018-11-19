import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import 'event-propagation-path';
import { NodeHeight, NodeWidth, minZoomScale } from './Constants'

// import { getBoundingBox } from '../utils';

function centerView(props) {
  const { data, width, height } = props;
    const { x, y } = data[0];
    const scale = 1;

    return d3.zoomIdentity
      .translate(width / 2 - x * scale, height / 2 - y * scale)
      .scale(scale);

}

function zoomFactory(props) {
  const { width, height, maxZoomScale } = props;

  return d3
    .zoom()
    .duration(-2000)
    .wheelDelta(() => (-d3.event.deltaY * (d3.event.deltaMode ? 50 : 1)) / 500)
    .scaleExtent([minZoomScale, maxZoomScale])
    .extent([[0, 0], [width, height]])
    .filter(() => {
      // Take care: this is Polyfill: propagationPath
      const pathClasses = d3.event.propagationPath().map(d => d.className);

      return (
        d3.event.deltaY !== undefined || !pathClasses.includes('dragSource')
      );
    })
    .on('zoom', () => {
      this.setState({
        zoomHandler: d3.event.transform || d3.zoomIdentity
      });
    });
}

class ZoomContainer extends Component {
  static propTypes = {
    children: PropTypes.func,
    className: PropTypes.oneOf([null, PropTypes.string]),
    style: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
      })
    ),
    selectedId: PropTypes.oneOf(PropTypes.number, null),
    delay: PropTypes.number
  };

  static defaultProps = {
    children: d => d,
    className: null,
    style: {},
    width: 100,
    height: 100,
    center: [50, 50],
    force: false,
    data: [],
    delay: 200,
    selectedId: null,
    maxZoomScale: 4.5
  };

  constructor(props) {
    super(props);

    this.zoomFactory = zoomFactory.bind(this);
  }

  state = {
    zoomHandler: d3.zoomIdentity, x: 0 //
  };

  componentDidMount() {
    this.zoomFactoryCont = this.zoomFactory(this.props);
    d3.select(this.zoomCont).call(this.zoomFactoryCont)
      	.on('dblclick.zoom', null); // disable zoom on double click
		/*
		.on('click', () => {
			this.zoomToNode(this.props.data);

			/*
			console.log(this.zoomFactory);
			let x = window.innerWidth - d3.event.clientX - window.innerWidth / 2;
			let y = window.innerHeight - d3.event.clientY - window.innerHeight / 2;
			let transform = d3.zoomIdentity
				.translate(x, y)
				.scale(1);
			d3.select(this.zoomCont).transition().duration(300).call(this.zoomFactoryCont.transform, transform);
			*/

		//});
     //.duration(0);
    // .on('.zoom', null);

    //const zoomHandler = centerView(this.props);
    //d3.select(this.zoomCont).call(this.zoomFactoryCont.transform, zoomHandler);
  }

  zoomToNode =  (data) => {
  	{/*let node = data[this.state.x];*/}
	let transform = d3.zoomIdentity
	  .translate(window.innerWidth - data.x - window.innerWidth / 2 - NodeWidth / 2, window.innerHeight - data.y - window.innerHeight / 2 - NodeHeight / 2)
	  .scale(1);
	d3.select(this.zoomCont).transition().duration(800).call(this.zoomFactoryCont.transform, transform);
	{/*this.setState({x: (this.state.x+1) % data.length});*/}
  }

  render() {
    const {
      children,
      width,
      height,
      style,
      className,
      data,
      onZoom
    } = this.props;
    const { zoomHandler } = this.state;

    const zoomedNodes = data.map(d => {
		let zoomToNode = this.zoomToNode;
		const [x, y] = zoomHandler.apply([d.x, d.y]);
		d.onclick = function() {zoomToNode(d)};
		return { ...d, x, y };
    });

    return (
		<div>
			<div
				id={'zoom-target'}
				className={'zoom-target'}
				style={{
					position: 'absolute',
					left: 0,
					top: 0,
					width,
					height,
					pointerEvents: 'all',
					...style
				}}
				ref={node => (this.zoomCont = node)}
			>
				{children(zoomedNodes, zoomHandler)}
			</div>
		</div>
    );
  }
}

export const zoomFit = (scale, translate) => {
	let root = document.getElementById('zoom-target');
	//console.trace("zoomFit", translate, scale);
	d3.select(this.zoomCont).scale(scale);
}

export default ZoomContainer;
