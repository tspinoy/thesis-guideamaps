export const ItemTypes = {
  NODE: 'node',
};

export const NodeTypes = {
  DEFAULT: 'default',
  CHOICE: 'choice',
};

export const NodeWidth = 130;
export const NodeHeight = 100;

export const maxZoomScale = 3;
export const minZoomScale = 0.5;

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

export const initializeNode = (node, id) => {
  node.id = id;
  node.show = true;
  if (!(node.parent === null)) {
    node.showChildren = node.parent.showChildren;
  } else {
    node.showChildren = true;
  }
  node.title = node.data.name;
  node.content = 'The content is not completely shown, great!';
  node.backgroundColor = '#ffffff';

  const projectedPositions = project(node.x, node.y);
  // Center the content
  node.x = projectedPositions[0] + window.innerWidth / 2 - NodeWidth / 2;
  node.y = projectedPositions[1] + window.innerHeight / 2 - NodeHeight / 2;

  return node;
};

export const initializeLink = link => {
  // Mark all edges to non-default nodes as optional
  link.optional = link.target.data.type !== NodeTypes.DEFAULT;
  return link;
};
