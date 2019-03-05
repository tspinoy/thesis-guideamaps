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
        stroke={'black'}
        strokeDasharray={1000} //{link.optional ? 3 : 0} // default lines are solid, others are dashed
        //markerMid={link.target.visible ? 'url(#arrow)' : ''}
        style={{
          transform: `translate(${PDDNodeWidth / 2}px, ${PDDNodeHeight / 2}px)`,
          //display: links.target.visible ? 'block' : 'none',
          transition: centered && 'all 500ms ease 0s',
          '--strokeDashArray': link.optional ? 3 : 0,
        }}
      />
    );
  }
}

export default PDDLink;
