import React from 'react';
import {GMNodeHeight, GMNodeWidth} from './Constants';
import * as d3 from 'd3';

class GMLink extends React.Component {
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
        stroke={'black'}
        strokeDasharray={link.target.visible && link.target.data.optional ? 3 : 2500}
        style={{
          transform: `translate(${GMNodeWidth / 2}px, ${GMNodeHeight / 2}px)`,
          transition: centered && 'all 500ms ease 0s',
        }}
      />
    );
  }
}

export default GMLink;
