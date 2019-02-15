import React from 'react';
import {GMNodeHeight, GMNodeWidth} from './Constants';
import * as d3 from 'd3';

class GuideaMapsLink extends React.Component {
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
          'link ' + (link.target.show ? 'visibleNode ' : 'hiddenNode ')
        }
        d={line([
          zHandler.apply([link.source.x, link.source.y]), // starting point
          zHandler.apply([
            (link.source.x + link.target.x) / 2, // + 20,
            (link.source.y + link.target.y) / 2, // + 20,
          ]), // mid point, necessary to put the marker on
          zHandler.apply([link.target.x, link.target.y]), // end point
        ])}
        fill="none"
        stroke={'black'}
        strokeDasharray={link.optional ? 3 : 0} // default lines are solid, others are dashed
        markerMid={'url(#arrow)'}
        style={{
          transform: `translate(${GMNodeWidth / 2}px, ${GMNodeHeight / 2}px)`,
          //display: links.target.show ? 'block' : 'none',
          transition: centered && 'all 1s ease 0s',
        }}
      />
    );
  }
}

export default GuideaMapsLink;
