import React, { Component } from 'react';
import './css/App.css';
import './css/tailwind.css'
import Cluster from './Cluster';
import * as d3 from "d3";

// Font Awesome for SVG icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faPlusCircle, faEllipsisH, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';

import GuideMapsNode from './GuideaMapsNode';
import { project, NodeWidth, NodeHeight } from './Constants';

library.add(faPlus, faPlusCircle, faPlus, faEllipsisH, faExpand, faCompress);

let hierarchyData = {
	"name": "Eve",
	"children": [
		{
			"name": "Cain",
			"children": [
				{
					"name": "Enos"
				},
				{
					"name": "Noam"
				}
			]
		},
		{
			"name": "Seth",
			"children": [
				{
					"name": "Enos"
				},
				{
					"name": "Noam"
				}
			]
		},
        {
            "name": "Abel",
			"children": [
				{
					"name": "Enos"
				},
				{
					"name": "Noam"
				}
            ]
        },
        {
            "name": "Awan",
			"children": [
				{
					"name": "Enos"
				},
				{
					"name": "Noam"
				}
            ]
        },
        {
            "name": "Azura",
			"children": [
				{
					"name": "Enos"
				},
				{
					"name": "Noam"
				}
            ]
        },
        {
            "name": "Thijs",
			"children": [
				{
					"name": "Enos"
				},
				{
					"name": "Noam"
				}
			]
        },
        {
            "name": "Node",
			"children": [
				{
					"name": "Enos"
				},
				{
					"name": "Noam",
					"children": [
						{
							"name": "Enos"
						},
						{
							"name": "Noam"
						}
					]
				}
			]
        }
    ]
};

const root = d3.hierarchy(hierarchyData, function(d) { return d.children; });

// A size of [360, radius] corresponds to a breadth of 360° and a depth of radius.
const cluster = d3.cluster()
    .size([360, (root.height + 2) * 130])
    .separation(function(a, b) { return (a.parent === b.parent ? 50 : 50); });
const clusterRoot = cluster(root);
const clusterNodes = clusterRoot.descendants();
const clusterLinks = clusterRoot.links();

for(let i = 0; i < clusterNodes.length; i++){
    clusterNodes[i].id = i;
    clusterNodes[i].show = true;
    if(!(clusterNodes[i].parent === null)){
        clusterNodes[i].showChildren = clusterNodes[i].parent.showChildren;
    } else {
        clusterNodes[i].showChildren = true;
    }
    clusterNodes[i].content = 'The content is not completely shown, great!';
    clusterNodes[i].backgroundColor = '#ffffff';

    const projectedPositions = project(clusterNodes[i].x, clusterNodes[i].y);
    // Center the content
    clusterNodes[i].x = projectedPositions[0] + (window.innerWidth / 2) - (NodeWidth / 2);
    clusterNodes[i].y = projectedPositions[1] + (window.innerHeight / 2) - (NodeHeight / 2);
}

class App extends Component {

    render() {
        return (
            <div className={'App'}>
				<Cluster nodeType={GuideMapsNode} nodes={clusterNodes} links={clusterLinks}/>
            </div>
        );
    }
}

export default App;
