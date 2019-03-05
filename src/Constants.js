export const ItemTypes = {
  NODE: 'node',
};

export const GMNodeTypes = {
  DEFAULT: 'default',
  CHOICE: 'choice',
};

export const GMNodeWidth = 130;
export const GMNodeHeight = 100;
export const PDDNodeWidth = 140;
export const PDDNodeHeight = 100;

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

export const initializeGMNode = (node, id, width, height) => {
  node.visible = true;
  if (!(node.parent === null)) {
    node.visibleChildren = node.parent.visibleChildren;
  } else {
    node.visibleChildren = true;
  }
  node.title = node.data.name;
  node.content = 'The content is not completely shown, great!';
  node.backgroundColor = '#ffffff';

  const projectedPositions = project(node.x, node.y);
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
