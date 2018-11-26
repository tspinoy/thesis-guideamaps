import React, {Component} from 'react';
import './css/App.css';
import './css/tailwind.css';
import Cluster from './Cluster';
import * as d3 from 'd3';

import GuideMapsNode from './GuideaMapsNode';
import {initializeLink, initializeNode, NodeTypes} from './Constants';

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

let hierarchyData = {
  name: 'Eve',
  type: NodeTypes.DEFAULT,
  children: [
    {
      name: 'Cain',
      type: NodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: NodeTypes.DEFAULT,
        },
        {
          name: 'Noam',
          type: NodeTypes.DEFAULT,
        },
      ],
    },
    {
      name: 'Seth',
      type: NodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: NodeTypes.CHOICE,
        },
        {
          name: 'Noam',
          type: NodeTypes.CHOICE,
        },
      ],
    },
    {
      name: 'Abel',
      type: NodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: NodeTypes.CHOICE,
        },
        {
          name: 'Noam',
          type: NodeTypes.CHOICE,
        },
      ],
    },
    {
      name: 'Awan',
      type: NodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: NodeTypes.DEFAULT,
        },
        {
          name: 'Noam',
          type: NodeTypes.DEFAULT,
        },
      ],
    },
    {
      name: 'Azura',
      type: NodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: NodeTypes.DEFAULT,
        },
        {
          name: 'Noam',
          type: NodeTypes.DEFAULT,
        },
      ],
    },
    {
      name: 'Thijs',
      type: NodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: NodeTypes.DEFAULT,
        },
        {
          name: 'Noam',
          type: NodeTypes.DEFAULT,
        },
      ],
    },
    {
      name: 'Node',
      type: NodeTypes.DEFAULT,
      children: [
        {
          name: 'Enos',
          type: NodeTypes.DEFAULT,
        },
        {
          name: 'Noam',
          type: NodeTypes.DEFAULT,
          children: [
            {
              name: 'Enos',
              type: NodeTypes.CHOICE,
            },
            {
              name: 'Noam',
              type: NodeTypes.CHOICE,
            },
          ],
        },
      ],
    },
  ],
};

const [width, height] = [1200, 700];

const root = d3.hierarchy(hierarchyData, function(d) {
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

class App extends Component {
  render() {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Cluster
          width={width}
          height={height}
          NodeType={GuideMapsNode}
          nodes={clusterNodes}
          links={clusterLinks}
        />
      </div>
    );
  }
}

export default App;
