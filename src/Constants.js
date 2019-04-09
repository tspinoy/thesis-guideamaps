import React from 'react';

export const ItemTypes = {
  NODE: 'node',
};

/**
 * Different node types
 * @type {{OPTIONAL: string, CHOICE: string, DEFAULT: string}}
 */
export const GMNodeTypes = {
  DEFAULT: 'default',
  CHOICE: 'choice',
  OPTIONAL: 'optional',
};

/**
 * Via a CHOICE node, an end user can choose which type the child node should be.
 * Depending on the booleans in this object, types are (dis)allowed.
 * @type {{OPTIONAL: boolean, CHOICE: boolean, DEFAULT: boolean}}
 */
export const ChoiceNodeAllowedTypes = {
  DEFAULT: true,
  CHOICE: true,
  OPTIONAL: true,
};

/**
 * There are two types of users for the application: end users and map creators.
 * @type {{MAP_CREATOR: string, END_USER: string}}
 */
export const Modes = {
  END_USER: 'END_USER',
  MAP_CREATOR: 'MAP_CREATOR',
};

/**
 * Some variables.
 * @type {number}
 */
export const GMNodeWidth = 130;
export const GMNodeHeight = 100;
export const PDDNodeWidth = 140;
export const PDDNodeHeight = 140;

export const maxZoomScale = 3;
export const minZoomScale = 0.38;

/**
 * Function to position the nodes in a way to get a radial layout.
 * @param x: x-coordinate in a non-radial cluster-layout.
 * @param y: y-coordinate in a non-radial cluster-layout.
 * @return number[] x and y positions in radial cluster-layout.
 * */
export const project = (x, y) => {
  let angle = ((x - 90) / 180) * Math.PI,
    radius = y;
  return [radius * Math.cos(angle), radius * Math.sin(angle)];
};

/**
 * Initialize a (new) node taking the previous data (if this exists) of this node
 * into account. If a node is added, all nodes need to be initialized again.
 * Therefore, {@param oldNode} is passed in order to not lose information
 * when a new node is created.
 * @param node: the current node
 * @param oldNode: the node with the data the current node had before or {Null} if no such node exists ({@param node} is a newly created node)
 * @param width: the width of the visualization
 * @param height: the height of the visualization
 * @param firstTimeOrAdditionalNode: a boolean
 * @return {*}: the node with all information
 */
export const initializeGMNode = (
  node,
  oldNode,
  width,
  height,
  firstTimeOrAdditionalNode,
) => {
  // Background property
  if (oldNode !== null && oldNode.backgroundColor !== undefined) {
    node.backgroundColor = oldNode.backgroundColor;
  } else if (node.parent !== null) {
    node.backgroundColor = node.parent.backgroundColor;
  } else {
    node.backgroundColor = '#ffb018';
  }

  // Content property
  node.content =
    oldNode !== null && oldNode.content !== undefined
      ? oldNode.content
      : node.content === undefined
      ? ''
      : node.content;

  // Description property
  node.description =
    oldNode !== null && oldNode.description !== undefined
      ? oldNode.description
      : node.data.description === undefined
      ? ''
      : node.data.description;

  // Locked property
  node.locked =
    oldNode !== null && oldNode.locked !== undefined ? oldNode.locked : false;

  // Positions property
  const projectedPositions =
    oldNode !== null && oldNode.x !== undefined
      ? firstTimeOrAdditionalNode
      ? project(oldNode.x, oldNode.y)
      : project(node.x, node.y)
      : project(node.x, node.y);
  node.x = projectedPositions[0] + width / 2 - GMNodeWidth / 2; // Center the node
  node.y = projectedPositions[1] + height / 2 - GMNodeHeight / 2; // Center the node

  // Title property
  node.title =
    oldNode !== null && oldNode.title !== undefined
      ? oldNode.title
      : node.data.name;

  // Visible property
  node.visible =
    oldNode !== null && oldNode.visible !== undefined ? oldNode.visible : true;

  // Visible children property
  node.visibleChildren =
    oldNode !== null &&
    oldNode.parent !== null &&
    oldNode.parent.visibleChildren !== undefined
      ? oldNode.parent.visibleChildren
      : true;

  return node;
};

/**
 * Initialize a link.
 * @param link: a link from node A to node B
 * @return {*}: the link with all information
 */
export const initializeGMLink = link => {
  // Mark all edges to OPTIONAL nodes as optional.
  link.optional = link.target.data.type === GMNodeTypes.OPTIONAL;
  return link;
};

/**
 * The map creator can indicate which node types an end user can add from a choice node.
 * @param allowedTypes: an array containing the node types that are allowed
 */
export const updateAllowedChoiceNodeType = allowedTypes => {
  // Start by disallowing all node types
  Object.keys(ChoiceNodeAllowedTypes).forEach(function(type) {
    ChoiceNodeAllowedTypes[type] = false;
  });

  // Loop over the allowed types indicated by the map creator.
  // These are of the form '{label: Something, value: SomethingElse}'.
  allowedTypes.forEach(function(allowedType) {
    // Loop over the GMNodeTypes as well.
    Object.keys(GMNodeTypes).forEach(function(type) {
      // If the type indicated by the map creator corresponds to the type we encounter while looping ...
      if (GMNodeTypes[type] === allowedType['value']) {
        // ... then set this type as allowed.
        ChoiceNodeAllowedTypes[type] = true;
      }
    });
  });
};
