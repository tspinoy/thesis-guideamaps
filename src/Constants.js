export const ItemTypes = {
  NODE: 'node'
};

export const NodeWidth  = 130;
export const NodeHeight = 100;

/**
 * Function to position the nodes in a way to get a radial layout.
 * @param x: x-coordinate in a non-radial cluster-layout.
 * @param y: y-coordinate in a non-radial cluster-layout.
 * */
export const project = (x, y) => {
  var angle = (x - 90) / 180 * Math.PI, radius = y;
  return [radius * Math.cos(angle), radius * Math.sin(angle)];
};
