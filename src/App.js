import React, { Component } from 'react';
import './css/App.css';
import './css/tailwind.css'
import Cluster from './Cluster';
import * as d3 from "d3";

// Font Awesome for SVG icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faPlusCircle, faEllipsisH, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faPlusCircle, faPlus, faEllipsisH, faExpand, faCompress);

/*
const nodesData = d3.range(10).map(function (i) {
    return {
        index: i,
        id: i,
        showChildren: true
    };
});


const nodesDataJson = [
    {
        index: 0,
        id: 0,
        show: true,
        showChildren: true
    },

    {
        index: 1,
        id: 1,
        show: true,
        showChildren: true
    },

    {
        index: 2,
        id: 2,
        show: true,
        showChildren: false
    },

    {
        index: 3,
        id: 3,
        show: true,
        showChildren: false
    },

    {
        index: 4,
        id: 4,
        show: true,
        showChildren: false
    },

    {
        index: 5,
        id: 5,
        show: false,
        showChildren: false
    },

    {
        index: 6,
        id: 6,
        show: false,
        showChildren: true
    },

    {
        index: 7,
        id: 7,
        show: false,
        showChildren: false
    },

    {
        index: 8,
        id: 8,
        show: false,
        showChildren: false
    },

    {
        index: 9,
        id: 9,
        show: false,
        showChildren: false
    }
];

let hierarchyData = {
    "name": "Eve",
    "children": [
        {
            "name": "Cain"
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
            "name": "Abel"
        },
        {
            "name": "Awan",
            "children": [
                {
                    "name": "Enoch",
                    "children": [
                        {
                            "name": "Thijs"
                        }
                    ]
                }

            ]
        },
        {
            "name": "Azura"
        }
    ]
};
*/

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
console.log(root);
/*
const tree = d3.tree().size([800, 800]).separation(function separation(a, b) {
    return a.parent === b.parent ? 1 : 2;
});

const treeNodes = tree(hierarchyData);
*/

var width = (root.height + 1) * 360;
console.log(root.height);
var height = (root.height + 1) * 360;
// A size of [360, radius] corresponds to a breadth of 360° and a depth of radius.
var cluster = d3.cluster()
    .size([360, (root.height + 2) * 130])
    .separation(function(a, b) { return (a.parent === b.parent ? 50 : 50); });
const clusterRoot = cluster(root);
const clusterNodes = clusterRoot.descendants();
const clusterLinks = clusterRoot.links();

for(var i = 0; i < clusterNodes.length; i++){
    clusterNodes[i].id = i;
    clusterNodes[i].show = true;
    if(!(clusterNodes[i].parent === null)){
        clusterNodes[i].showChildren = clusterNodes[i].parent.showChildren;
    } else {
        clusterNodes[i].showChildren = true;
    }
    clusterNodes[i].content = 'The content is not completely shown, great!';
    clusterNodes[i].editing = false;
    clusterNodes[i].backgroundColor = '#ffffff';
}

console.log(clusterNodes);

/*
const linksData = d3.range(nodesDataJson.length - 1).map(function (i) {
    const source = Math.floor(Math.sqrt(i));
    const target = i + 1;
    return {
        source,
        id: `${source}-${target}`,
        target
    };
});
*/

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<GuideaMap width={800} height={800} nodes={nodesDataJson} links={linksData}/>
                {/*<Tree width={800} height={800} nodes={treeNodes} links={linksData}/>*/}
                <Cluster width={width} height={height} nodes={clusterNodes} links={clusterLinks}/>
            </div>
        );
    }
}

export default App;
