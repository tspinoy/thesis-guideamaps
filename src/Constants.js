import React from 'react';

export const ItemTypes = {
  NODE: 'node',
};

export const GMNodeTypes = {
  DEFAULT: 'default',
  CHOICE: 'choice',
};

export const Modes = {
  END_USER: 'END_USER',
  MAP_CREATOR: 'MAP_CREATOR',
};

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

export const initializeGMNode = (
  node,
  oldNode,
  width,
  height,
  firstTimeOrAdditionalNode,
) => {
  // fill visible property
  node.visible =
    oldNode !== null && oldNode.visible !== undefined ? oldNode.visible : true;

  node.visibleChildren =
    oldNode !== null &&
    oldNode.parent !== null &&
    oldNode.parent.visibleChildren !== undefined
      ? oldNode.parent.visibleChildren
      : true;

  // fill locked property
  node.locked =
    oldNode !== null && oldNode.locked !== undefined ? oldNode.locked : false;

  // fill node title
  node.title =
    oldNode !== null && oldNode.title !== undefined
      ? oldNode.title
      : node.data.name;

  // fill node content
  node.content =
    oldNode !== null && oldNode.content !== undefined
      ? oldNode.content
      : 'The content is not completely shown, great!';

  // fill node background
  if (oldNode !== null && oldNode.backgroundColor !== undefined) {
    node.backgroundColor = oldNode.backgroundColor;
  } else if (node.parent !== null) {
    node.backgroundColor = node.parent.backgroundColor;
  } else {
    node.backgroundColor = '#726D73';
  }

  // fill node positions
  const projectedPositions =
    oldNode !== null && oldNode.x !== undefined
      ? firstTimeOrAdditionalNode
        ? project(oldNode.x, oldNode.y)
        : project(node.x, node.y)
      : project(node.x, node.y);
  // Center the content
  node.x = projectedPositions[0] + width / 2 - GMNodeWidth / 2;
  node.y = projectedPositions[1] + height / 2 - GMNodeHeight / 2;

  return node;
};

export const initializeGMLink = link => {
  // Mark all edges to non-default nodes as optional
  link.optional = link.target.data.type !== GMNodeTypes.DEFAULT;
  return link;
};

export const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};
