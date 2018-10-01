import GojsDiagram from 'react-gojs';
import * as go from 'gojs';
import * as React from "react";

const model = {
    nodeDataArray: [
        { key: 'Alpha', color: 'lightblue' },
        { key: 'Beta', color: 'orange' },
        { key: 'Gamma', color: 'lightgreen' },
        { key: 'Delta', color: 'pink' },
        { key: 'Omega', color: 'grey' }
    ],
    linkDataArray: [
        { from: 'Alpha', to: 'Beta' },
        { from: 'Alpha', to: 'Gamma' },
        { from: 'Beta', to: 'Delta' },
        { from: 'Gamma', to: 'Omega' }
    ]
};

const createDiagram = diagramId => {
    const $ = go.GraphObject.make;

    const myDiagram = $(go.Diagram, diagramId, {
        initialContentAlignment: go.Spot.LeftCenter
    });

    myDiagram.nodeTemplate = $(
        go.Node,
        'Auto',
        $(go.Shape, 'RoundedRectangle', { strokeWidth: 0 }, new go.Binding('fill', 'color')),
        $(go.TextBlock, { margin: 8 }, new go.Binding('text', 'key'))
    );

    return myDiagram;
};

class NPMJS extends React.Component {

    render() {
        return (
            <GojsDiagram
                diagramId="myDiagramDiv"
                model={this.props.model}
                createDiagram={this.createDiagram}
                className="myDiagram"
                onModelChange={this.modelChangedhandler}
            />
        );
    }
}

export default NPMJS;

