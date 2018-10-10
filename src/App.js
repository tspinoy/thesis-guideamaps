import React, { Component } from 'react';
import './css/App.css';
import './css/tailwind.css'
import GuideaMap from './GuideaMap';
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
      console.log(nodesDataJson);
    return (
      <div className="App">
          <GuideaMap width={800} height={800} nodes={nodesDataJson} links={linksData}/>
      </div>
    );
  }
}

export default App;
