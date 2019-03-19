import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import 'event-propagation-path';
import {GMNodeHeight, GMNodeWidth, minZoomScale} from './Constants';

// import { getBoundingBox } from '../utils';

function centerView(props) {
  const {data, width, height} = props;
  const {x, y} = data[0];
  const scale = 1;

  return d3.zoomIdentity
    .translate(width / 2 - x * scale, height / 2 - y * scale)
    .scale(scale);
}

function createZoom(props) {
  const {width, height, maxZoomScale, onZoom} = props;

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
      onZoom();
      this.setState({
        zoomHandler: d3.event.transform || d3.zoomIdentity,
        centered: false,
      });
    });
  /*
    .on('start', () => {
      // While panning or zooming, we don't need smooth transitions
      let links = document.getElementsByClassName('link');
      for (let i = 0; i < links.length; i++) {
        links.item(i).style.transition = 'all 0ms ease 0s';
      }
      let nodes = document.getElementsByClassName('node');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.transition = 'all 0ms ease 0s';
      }
    })
    .on('end', () => {
      // We still want smooth transitions when we click on a node and pan to it
      let links = document.getElementsByClassName('link');
      for (let i = 0; i < links.length; i++) {
        links[i].style.transition = 'all 500ms ease 0s';
      }
      let nodes = document.getElementsByClassName('node');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.transition = 'all 500ms ease 0s';
      }
    });
    */
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
        y: PropTypes.number,
      }),
    ),
    selectedId: PropTypes.oneOf(PropTypes.number, null),
    delay: PropTypes.number,
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
    maxZoomScale: 4.5,
  };

  constructor(props) {
    super(props);

    this.createZoom = createZoom.bind(this);
  }

  state = {
    zoomHandler: d3.zoomIdentity,
    //
    // .translate(
    //   this.props.width,
    //   this.props.height,
    // ),
  };

  zoomToBoundingBox() {
    const nodes = this.props.data;
    let nodesX = [];
    let nodesY = [];
    nodes.forEach(node => {
      nodesX.push(node.x);
      nodesY.push(node.y);
    });
    let minX = Math.min(...nodesX);
    let maxX = Math.max(...nodesX) + GMNodeWidth;
    let minY = Math.min(...nodesY);
    let maxY = Math.max(...nodesY) + GMNodeHeight;

    // The distance from the left of the leftmost node to the right of the rightmost
    let maxWidth = maxX - minX;
    // The distance from the top of the highest node to the bottom of the lowest node
    let maxHeight = maxY - minY;

    let boxWidth = this.props.width;
    let boxHeight = this.props.height;

    let scale = 0.85 / Math.max(maxWidth / boxWidth, maxHeight / boxHeight);

    const newZoomHandler = d3.zoomIdentity.translate(
      boxWidth / 2 - scale * (boxWidth / 2) - boxWidth / 35,
      boxHeight / 2 - scale * (boxHeight / 2) - boxHeight / 25,
    );
    newZoomHandler.k = scale;

    d3.select(this.contDOM)
      .transition()
      .duration(1000)
      .call(this.zoomBehavior.transform, newZoomHandler);
  }

  componentDidMount() {
    const {zoomBehavior} = this.props;
    const {zoomHandler} = this.state;
    this.zoomBehavior = this.createZoom(this.props);

    d3.select(this.contDOM)
      .call(this.zoomBehavior)
      .on('dblclick.zoom', null); // disable zoom on double click

    d3.select(this.contDOM).call(this.zoomBehavior.transform, zoomHandler);

    d3.select('#zoom-to-fit-btn').on('click', () => this.zoomToBoundingBox());
  }

  componentDidUpdate(prevProps, prevState) {
    const {selectedId, data, width, height} = this.props;

    const {selectedId: prevSelectedId} = prevProps;
    const {zoomHandler} = this.state;
    const {zoomHandler: oldZoomHandler} = prevState;

    if (selectedId !== null && prevSelectedId !== selectedId) {
      const selected = data.find(d => d.id === selectedId);
      if (selected !== undefined) {
        const {x, y} = selected;
        const newZoomHandler = d3.zoomIdentity.translate(
          width / 2 - x - GMNodeWidth / 2,
          height / 2 - y - GMNodeHeight / 2,
        );
        d3.select(this.contDOM).call(this.zoomBehavior.transform, newZoomHandler);
        this.setState({centered: true});
      }
    }
  }

  render() {
    const {
      children,
      width,
      height,
      style,
      className,
      data,
      onZoom,
      selectedId,
    } = this.props;

    const {zoomHandler, centered} = this.state;

    const zoomedNodes = data.map(d => {
      const [x, y] = zoomHandler.apply([d.x, d.y]);
      return {...d, x, y};
    });

    return (
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
        }}
        ref={node => (this.contDOM = node)}>
        {children(zoomedNodes, zoomHandler, centered)}
      </div>
    );
  }
}

export default ZoomContainer;
