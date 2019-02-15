import React from 'react';

import './css/App.css';
import {GMNodeWidth, GMNodeHeight} from './Constants';

class PlateformeDDNode extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {node, onClick, centered} = this.props;
    return (
      <div
        key={node.title}
        className={
          'node relative ' +
          'border border-solid border-black rounded ' +
          'hover:border-red ' +
          (node.show ? 'visibleNode ' : 'hiddenNode ')
        }
        style={{
          minWidth: GMNodeWidth,
          height: GMNodeHeight,
          //transform: `translate(${node.x}px, ${node.y}px)`,
          color: '#000000',
          transition: centered && 'all 1s ease 0s',
        }}
        onClick={onClick}>
        Test
      </div>
    );
  }
}

export default PlateformeDDNode;
