import React, {Component} from 'react';
import './css/App.css';
import './css/tailwind.css';
import * as d3 from 'd3';
import logo from './logo.svg';

import {initializeLink, initializeNode} from './Constants';
import GuideMapsNode from './GuideaMapsNode';
import LinksSVG from './LinksSVG';
import {data} from './NodesData';
import ZoomableTree from './ZoomableTree';

// Font Awesome for SVG icons
import {library} from '@fortawesome/fontawesome-svg-core';
// Import solid icons
import {
  faAdjust,
  faCircle as faCircleSolid,
  faCompress,
  faEdit,
  faEllipsisH,
  faExpand,
  faPlus,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
// Import regular icons
import {
  faCircle as faCircleRegular,
  faSave,
} from '@fortawesome/free-regular-svg-icons';
library.add(
  faAdjust,
  faCircleRegular,
  faCircleSolid,
  faCompress,
  faEdit,
  faEllipsisH,
  faExpand,
  faPlus,
  faPlusCircle,
  faSave,
);

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const [width, height] = [windowWidth * 0.9, windowHeight * 0.9];

const root = d3.hierarchy(data, function(d) {
  return d.children;
});

// A size of [360, radius] corresponds to a breadth of 360° and a depth of radius.
const cluster = d3
  .cluster()
  .size([360, (root.height + 2) * 130])
  .separation(function(a, b) {
    return a.parent === b.parent ? 50 : 50;
  });
const clusterRoot = cluster(root);

const clusterNodes = clusterRoot
  .descendants()
  .map((node, index) => initializeNode(node, index, width, height));

console.log(clusterNodes);

const clusterLinks = clusterRoot.links().map(link => initializeLink(link));

/* ClusterNodes contains a lot of information about each node.
 * Some parts of this information will be changed while using the app,
 * other parts will/should not.
 * The variable nodeOptions stores the fields that are allowed to be updated.
 * */
const nodeOptions = clusterNodes.map(function(node) {
  return {
    id: node.id,
    show: node.show,
    showChildren: node.showChildren,
    title: node.title,
    content: node.content,
    background: node.background,
  };
});

class App extends Component {
  render() {
    return (
      <div>
        <div
          className={'w-full text-center flex h-1 pin-t bg-grey mb-2'}
          style={{height: '50px'}}>
          <div
            className={'w-1/3 flex'}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <label
              className={
                'rounded border border-black hover:bg-black hover:text-grey'
              }
              style={{
                width: '130px',
                height: '35px',
                cursor: 'pointer',
                // three rules to center the label
                display: 'block',
                textAlign: 'center',
                lineHeight: '35px', // must be equal to height
              }}>
              Enter your file
              <input
                type="file"
                id="file"
                size="60"
                style={{display: 'none'}}
              />
            </label>
          </div>
          <div
            className={'w-1/3 items-center'}
            style={{
              verticalAlign: 'baseline',
              display: 'inline-flex',
              justifyContent: 'center',
            }}>
            <img
              src={logo}
              alt={'logo'}
              style={{width: '50px', height: '50px'}}
            />
            GuideaMaps
          </div>
          <div
            className={'w-1/3 flex'}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <button
              id={'zoom-to-fit-btn'}
              className={
                'rounded border border-black hover:bg-black hover:text-grey'
              }
              style={{width: '110px', height: '35px'}}>
              Zoom to fit
            </button>
          </div>
        </div>
        {/*<div ref={'editField'} id={'editField'} className={'w-full overflow-y-scroll z-50'} style={{maxHeight: '300px', position: 'fixed', top: '50px'}}/>*/}
        <div id={'editField'} />
        <div className={'w-screen flex justify-center items-center'}>
          <ZoomableTree
            width={width}
            height={height}
            NodeComp={GuideMapsNode}
            nodes={clusterNodes}
            nodeOptions={nodeOptions}
            LinkComp={LinksSVG}
            links={clusterLinks}
          />
        </div>
      </div>
    );
  }
}

export default App;
