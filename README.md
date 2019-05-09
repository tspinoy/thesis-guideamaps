# Table of Contents

- [Folder structure](#folder-structure)
- [Launch the application](#launch-the-application)
- [Code structure](#code-structure)
    - [ZoomableTree](#cluster)
    - [Node](#node)
        - [AddChildButton](#addchildbutton)
        - [EditButton](#editbutton)
        - [ExpandCollapseButton](#expandcollapsebutton)
- [Remarks](#remarks)


# Folder Structure

```
thesis-guideamaps/
    build/
    node_modules/
    public/
        favicon.ico
        index.html
        manifest.json
    src/
        css/
            App.css
            index.css
            tailwind.css
        report/
        AddChildButton.js
        App.js
        App.test.js
        Constants.js
        EditButton.js
        ExpandCollapseButton.js
        GMData.js
        GMEditModal.js
        GMLink.js
        GMNode.js
        index.js
        logo.svg
        PDDData.js
        PDDEditModal.js
        PDDLink.js
        PDDNode.js
        registerServiceWorker.js
        TemplateData.js
        Zoom.js
        ZoomableTree.js
    package.json
    package.lock.json
    README.md
    tailwind.js
    yarn.lock
```

# Launch the application

To start the application, go to the project directory and run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Code structure

## ZoomableTree

The layout of the nodes in the tree is adapted in such a way to have a radial layout.
The cluster renders all nodes and links needed by the structure.<br>
Most important to know is that the **global state** of the application is maintained here. Whenever a user wants to change
something (data, content, background color, ...) about a particular node, a function in ZoomableTree will be called to update
the state. In this way, we try to have a consistent state, because all traffic about updates passes at the same point.
We never update the state at another place in the application.

## Node

As already said, the ZoomableTree class renders all nodes. Each rendered node is an instance of the Node class. ZoomableTree passes
important information to the node:

- node data (title, content, background-color, child nodes, ...)

- updateBackgroundColor: in the form in the popup, a color picker is added. Whenever the user selects another color, this
is immediately changed in the state of the application. This means the new background color is immediately visible.

- updateData: a function that is called when the user filled in the form in the popup. The changes he made are updated
in the state of the application.

- updateEditing: a function that can be called from Node to store whether is node is currently being edited or not.
We need this information because the z-index of this node is temporarily adapted (made higher). The problem was that 
neighbouring nodes were able to appear on top of the popup of the node we want to edit. To avoid that the popup was not 
on top, we make the z-index of a "currently edited node" higher than the z-index of the other nodes.

- updateShowChildren: a function that can be called from Node when the user wants to collapse or expand a node in order 
to see all its children or hide them.

A node consists of at most three buttons: a button to add a new child node, a button to open the popup and edit the content
of the node and eventually a button to collapse or expand the node in order to show or hide its children. The latter is
only visible on nodes that have children, not on leaf nodes.

### AddChildButton

This button is currently not yet configured.

### EditButton

First try:
The editButton is a little bit special because when we click the button, it triggers a popup to be opened. This popup
consists of a form where the user has the chance to adapt the title and the content of the node. Further, a color picker
is present to change the background color of the node and its children.

Optimized:
Instead of the popup, we use a modal now, based on this [link](https://daveceddia.com/open-modal-in-react/).

### ExpandCollapseButton

Non-leave nodes have the possibility to collapse or expand. This action can be executed by the user by clicking the button.
A simple onClick-event triggers the updateShowChildren-function in [Node](#Node).

# Remarks

This way of structuring the code means implies that if we have n possible state modifications, we would have to pass
n functions from [ZoomableTree](#ZoomableTree) to [Node](#node).

The popup representation of the first try to edit nodes was used from the [Reactjs-Popup](https://react-popup.elazizi.com)-plugin.

The color picker comes from [React Color](http://casesandberg.github.io/react-color/).
