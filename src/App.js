import React, { Component } from 'react';
import './css/App.css';
import './css/tailwind.css'
import GuideaMap from './GuideaMap';
import Tree from './Tree';
import Cluster from './Cluster';
import * as d3 from "d3";

// Font Awesome for SVG icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faPlusCircle, faEllipsisH, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import stratify from "d3-hierarchy/src/stratify";

library.add(faPlus, faPlusCircle, faPlus, faEllipsisH, faExpand, faCompress);

/*
const nodesData = d3.range(10).map(function (i) {
    return {
        index: i,
        id: i,
        showChildren: true
    };
});
*/

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
/*
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
            "name": "Cain"
        },
        {
            "name": "Seth"
        },
        {
            "name": "Abel"
        },
        {
            "name": "Awan"
        },
        {
            "name": "Azura"
        },
        {
            "name": "Thijs"
        },
        {
            "name": "Node"
        }
    ]
};

hierarchyData = d3.hierarchy(hierarchyData, function(d) { return d.children; });
/*
const tree = d3.tree().size([800, 800]).separation(function separation(a, b) {
    return a.parent === b.parent ? 1 : 2;
});

const treeNodes = tree(hierarchyData);
*/

var width = 960;
var height = 900;
var cluster = d3.cluster()
    .size([360, width / 2 - 120])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2); });
const clusterNodes = cluster(hierarchyData);


const linksData = d3.range(nodesDataJson.length - 1).map(function (i) {
    const source = Math.floor(Math.sqrt(i));
    const target = i + 1;
    return {
        source,
        id: `${source}-${target}`,
        target
    };
});

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<GuideaMap width={800} height={800} nodes={nodesDataJson} links={linksData}/>*/}
          {/*<Tree width={800} height={800} nodes={treeNodes} links={linksData}/>*/}
          <Cluster width={width} height={height} nodes={clusterNodes} links={clusterNodes.links()}/>
      </div>
    );
  }
}

export default App;
