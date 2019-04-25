import React from 'react';

export const ItemTypes = {
  NODE: 'node',
};

/**
 * Different node types
 * @type {{CHOICE: string, DEFAULT: string}}
 */
export const GMNodeTypes = {
  DEFAULT: 'Default',
  CHOICE: 'Choice',
};

export const ModalID = 'modalSpace';

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

  node.choiceLowerLimit =
    oldNode !== null && oldNode.choiceLowerLimit !== undefined
      ? oldNode.choiceLowerLimit
      : node.data.choiceLowerLimit === undefined
      ? 0
      : node.data.choiceLowerLimit;

  node.choiceUpperLimit =
    oldNode !== null && oldNode.choiceUpperLimit !== undefined
      ? oldNode.choiceUpperLimit
      : node.data.choiceUpperLimit === undefined
      ? 1
      : node.data.choiceUpperLimit;

  // Choices property (choice nodes only)
  node.choices =
    oldNode !== null && oldNode.choices !== undefined
      ? oldNode.choices
      : node.data.choices === undefined
      ? {}
      : node.data.choices;

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
      : node.data.name === undefined
      ? ''
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
  //link.optional = link.target.data.optional;
  return link;
};
