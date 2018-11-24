import React from 'react';
import {NodeHeight, NodeWidth} from './Constants';
import * as d3 from 'd3';

class LinksSVG extends React.Component {
  render() {
    const {links, width, height, zHandler} = this.props;

    const line = d3.line().curve(d3.curveCatmullRom.alpha(0.5));

    return (
      <svg className={'absolute pin-t pin-l'} style={{width, height}}>
        <defs>
          <marker
            id={'arrow'}
            markerUnits={'strokeWidth'}
            markerWidth={'12'}
            markerHeight={'12'}
            viewBox={'0 0 12 12'}
            refX={'6'}
            refY={'6'}
            orient={'auto'}>
            <path d={'M2,2 L10,6 L2,10 L6,6 L2,2'} style={{fill: 'black'}} />
          </marker>
        </defs>
        {links.map((l, index) => (
          <path
            key={index}
            d={line([
              zHandler.apply([l.source.x, l.source.y]), // starting point
              zHandler.apply([
                (l.source.x + l.target.x) / 2 + 20,
                (l.source.y + l.target.y) / 2 + 20,
              ]), // mid point, necessary to put the marker on
              zHandler.apply([l.target.x, l.target.y]), // end point
            ])}
            fill="none"
            stroke={'black'}
            strokeDasharray={l.optional ? 3 : 0} // default lines are solid, others are dashed
            markerMid={'url(#arrow)'}
            style={{
              transform: `translate(${NodeWidth / 2}px, ${NodeHeight / 2}px)`,
              display: l.target.show ? 'block' : 'none',
            }}
          />
        ))}
      </svg>
    );
  }
}

export default LinksSVG;
