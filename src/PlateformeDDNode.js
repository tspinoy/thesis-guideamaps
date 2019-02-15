import React from 'react';

import './css/App.css';

class PlateformeDDNode extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {node, onClick, centered} = this.props;
    return (
      <div
        key={node.id}
        className={
          'node relative ' +
          'border border-solid border-black rounded ' +
          'hover:border-red m-2 ' +
          (node.visible ? 'visibleNode ' : 'hiddenNode ')
        }
        style={{
          minWidth: '20%',
          height: 'auto',
          //transform: `translate(${node.x}px, ${node.y}px)`,
          color: '#000000',
          transition: centered && 'all 1s ease 0s',
        }}
        onClick={onClick}>
        <div // title div
          className={'relative pb-1 pt-1 pl-2 pr-2 rounded-t'}
          style={{
            borderBottom: '1px solid',
            borderColor: '#000000',
            color: '#000000',
            backgroundColor: 'white',
          }}>
          <p
            className={'font-sans text-lg overflow-hidden'}
            style={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              //textAlign: 'center',
            }}>
            {node.data.title === '' ? 'No title' : node.data.title}
          </p>
        </div>
        {node.data.media !== '' && (
          <img
            className={'relative'}
            src={node.data.media}
            alt={'Smiley face'}
          />
        )}
        <div // content div
          className={
            'relative font-sans text-base pl-2 pr-2 pt-1 pb-1 overflow-hidden'
          }
          id={'ftellipsis'}
          style={{
            color: '#000000', // this is inverted by the invertColors-class
            height: '6em', // 1.2 times WebkitLineClamp of the paragraph
          }}>
          <p
            style={{
              WebkitLineClamp: 5,
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
            }}>
            {node.data.text === '' ? 'No content' : node.data.text}
          </p>
        </div>
      </div>
    );
  }
}

export default PlateformeDDNode;
