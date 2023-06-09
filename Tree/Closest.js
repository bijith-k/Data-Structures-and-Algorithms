function findClosestValue(root, target) {
  let closest = Infinity; // Initialize closest to infinity

  // Helper function for tree traversal
  function traverse(node) {
    if (node) {
      // Update closest if the current node's value is closer to the target
      if (Math.abs(node.value - target) < Math.abs(closest - target)) {
        closest = node.value;
      }

      if (target < node.value) {
        traverse(node.left); // Move to the left child
      } else if (target > node.value) {
        traverse(node.right); // Move to the right child
      }
    }
  }

  traverse(root); // Start traversal from the root
  return closest;
}

// Define the tree nodes
const root = {
  value: 8,
  left: {
    value: 3,
    left: { value: 1, left: null, right: null },
    right: {
      value: 6,
      left: { value: 4, left: null, right: null },
      right: { value: 7, left: null, right: null },
    },
  },
  right: {
    value: 10,
    left: null,
    right: {
      value: 14,
      left: { value: 13, left: null, right: null },
      right: null,
    },
  },
};

// Call the findClosestValue function
const closestValue = findClosestValue(root, 5);

console.log(closestValue); // Output: 4
