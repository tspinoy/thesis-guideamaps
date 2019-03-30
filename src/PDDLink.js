import React from 'react';
import {PDDNodeHeight, PDDNodeWidth} from "./Constants";
import * as d3 from 'd3';

class PDDLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      willCenter: false,
      prevId: null,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.prevId = this.props.selectedId;
  }

  render() {
    const {link, zHandler, centered} = this.props;

    const line = d3.line().curve(d3.curveCatmullRom.alpha(0.5));

    return (
      <path
        key={link.target}
        className={
          'link ' + (link.target.visible ? 'visibleLink ' : 'hiddenLink ')
        }
        d={line([
          zHandler.apply([link.source.x, link.source.y]), // starting point
          zHandler.apply([
            (link.source.x + link.target.x) / 2, // + 20,
            (link.source.y + link.target.y) / 2, // + 20,
          ]), // mid point, necessary to put the marker on
          zHandler.apply([link.target.x, link.target.y]), // end point
        ])}
        fill={'none'}
        markerMid={link.target.visible ? 'url(#arrow)' : ''}
        stroke={'#373244'}
        strokeWidth={2}
        strokeDasharray={link.target.visible && link.optional ? 3 : 1000}
        style={{
          transform: `translate(${PDDNodeWidth / 2}px, ${PDDNodeHeight / 2}px)`,
          transition: centered && 'all 500ms ease 0s',
        }}
      />
    );
  }
}

export default PDDLink;
