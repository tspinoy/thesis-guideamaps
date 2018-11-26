import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import 'event-propagation-path';
import {NodeHeight, NodeWidth, minZoomScale} from './Constants';
import posed from 'react-pose';

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
  const {width, height, maxZoomScale} = props;

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
        zoomHandler: d3.event.transform || d3.zoomIdentity,
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

  componentDidMount() {
    const {zoomBehavior} = this.props;
    const {zoomHandler} = this.state;
    this.zoomBehavior = this.createZoom(this.props);

    d3.select(this.contDOM)
      .call(this.zoomBehavior)
      .on('dblclick.zoom', null); // disable zoom on double click

    d3.select(this.contDOM).call(this.zoomBehavior.transform, zoomHandler);
  }

  componentDidUpdate(prevProps, prevState) {
    const {selectedId, data, width, height} = this.props;

    const {selectedId: prevSelectedId} = prevProps;
    const {zoomHandler} = this.state;
    const {zoomHandler: oldZoomHandler} = prevState;

    if (
      zoomHandler.x !== oldZoomHandler.x ||
      zoomHandler.y !== oldZoomHandler.y ||
      zoomHandler.k !== oldZoomHandler.k
    ) {
      d3.select(this.contDOM).call(this.zoomBehavior.transform, zoomHandler);
    }

    if (prevSelectedId !== selectedId) {
      const selected = data.find(d => d.id === selectedId);
      const {x, y} = selected;

      const newZoomHandler = d3.zoomIdentity.translate(
        width / 2 - x - NodeWidth / 2,
        height / 2 - y - NodeHeight / 2,
      );

      this.setState({
        zoomHandler: newZoomHandler,
      });
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
    } = this.props;

    const {zoomHandler} = this.state;

    const zoomedNodes = data.map(d => {
      let zoomToCenterNode = this.zoomToCenterNode;
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
        {children(zoomedNodes, zoomHandler)}
      </div>
    );
  }
}

export default ZoomContainer;
