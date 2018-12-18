import React, {Component} from 'react';
import './css/App.css';
import './css/tailwind.css';
import Cluster from './Cluster';
import * as d3 from 'd3';
import logo from './logo.svg';

import {data} from './NodesData';
import GuideMapsNode from './GuideaMapsNode';
import {initializeLink, initializeNode} from './Constants';

// Font Awesome for SVG icons
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faCircle as faCircleSolid,
  faCompress,
  faEllipsisH,
  faExpand,
  faPlus,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import {faCircle as faCircleRegular} from '@fortawesome/free-regular-svg-icons';
library.add(
  faCircleRegular,
  faCircleSolid,
  faCompress,
  faEllipsisH,
  faExpand,
  faPlus,
  faPlusCircle,
);

const [width, height] = [1200, 700];

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
          className={'w-screen text-center flex h-1 pin-t bg-grey mb-2'}
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
                lineHeight: '35px',
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
        <div className={'w-screen flex justify-center items-center'}>
          <Cluster
            width={width}
            height={height}
            NodeType={GuideMapsNode}
            nodes={clusterNodes}
            nodeOptions={nodeOptions}
            links={clusterLinks}
          />
        </div>
      </div>
    );
  }
}

export default App;
