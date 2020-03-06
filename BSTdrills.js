//3. Create a BST class
const BinarySearchTree = require('./BST');

const BST123 = new BinarySearchTree();
const BSTabc = new BinarySearchTree();

BST123.insert(3);
BST123.insert(1);
BST123.insert(4);
BST123.insert(6);
BST123.insert(9);
BST123.insert(2);
BST123.insert(5);
BST123.insert(7);
console.log(BST123);

BSTabc.insert('E');
BSTabc.insert('A');
BSTabc.insert('S');
BSTabc.insert('Y');
BSTabc.insert('Q');
BSTabc.insert('U');
BSTabc.insert('E');
BSTabc.insert('S');
BSTabc.insert('T');
BSTabc.insert('I');
BSTabc.insert('O');
BSTabc.insert('N');
console.log(BSTabc);

//4. What does this program do?
//This function recursively sums all of the values in the BST.
//It goes down to each level of the tree, so it's O(log(n)).

//5. Height of a BST
const treeHeight = function(tree) {
    if (!tree) {
      return 0;
    };
    let leftHeight = treeHeight(tree.left);
    let rightHeight = treeHeight(tree.right);
    return 1 + Math.max(leftHeight, rightHeight);
};
console.log(treeHeight(BST123));
console.log(treeHeight(BSTabc));

//6. Is it a BST?
const isItABST = function(tree) {
    if (tree.left) {
      if (tree.left.key > tree.key) {
        return false;
      };
      if (!isItABST(tree.left)) {
        return false;
      };
    };
    if (tree.right) {
      if (tree.right.key < tree.key) {
        return false;
      };
      if (!isItABST(tree.right)) {
        return false;
      };
    };
    return true;
};
console.log(isItABST(BST123));
console.log(isItABST(BSTabc));
BST123.left.key = 690;
BSTabc.right.right.key = 'A';
console.log(isItABST(BST123));
console.log(isItABST(BSTabc));

//7. 3rd largest node
const thirdLargestNode = function(tree) {
    const height = treeHeight(tree);
    if (!tree.right) {
      if (height > 3) {
        return thirdLargestNode(tree.left);
      };
      if (height === 1) {
        if (tree.parent.left) {
          return tree.parent.left.key;
        } else {
          return tree.parent.parent.key;
        };
      } else if (height === 2) {
        return tree.parent.key;
      } else if (height === 3) {
        if (tree.left.right) {
          return tree.left.key;
        } else {
          return tree.left.left.key;
        };
      };
    } else {
      return thirdLargestNode(tree.right);
    };
  };
  console.log(thirdLargestNode(BST123));
  console.log(thirdLargestNode(BSTabc));

//8. Balanced BST
const newBST = new BinarySearchTree;
newBST.insert(5);
newBST.insert(6);
newBST.insert(4);
newBST.insert(3);
newBST.insert(7);
newBST.insert(4.5);
newBST.insert(5.5);
const balancedBST = function(tree) {
  if (!tree) {
    return true;
  };
  if (Math.abs(treeHeight(tree.left) - treeHeight(tree.right)) > 1) {
    return false;
  } else {
    return balancedBST(tree.left) && balancedBST(tree.right);
  };
};
console.log(balancedBST(BST123));
console.log(balancedBST(BSTabc));
console.log(balancedBST(newBST));

//9. Are they the same BSTs?
const sameBST = function(array1, array2) {
  if (array1.length === 0 && array2.length === 0) {
    return true;
  };
  if (array1.length !== array2.length) {
    return false;
  };
  if (array1[0] !== array2[0]) {
    return false;
  };
  const biggerThanRoot1 = [];
  const smallerThanRoot1 = [];
  const biggerThanRoot2 = [];
  const smallerThanRoot2 = [];
  for (let i = 1; i < array1.length; i++) {
    array1[i] > array1[0] ? biggerThanRoot1.push(array1[i]) : smallerThanRoot1.push(array1[i]);
    array2[i] > array2[0] ? biggerThanRoot2.push(array2[i]) : smallerThanRoot2.push(array2[i]);
  };
  return sameBST(biggerThanRoot1, biggerThanRoot2) && sameBST(smallerThanRoot1, smallerThanRoot2);
};
const array1 = [3, 5, 4, 6, 1, 0, 2];
const array2 = [3, 1, 5, 2, 4, 6, 0];
console.log(sameBST(array1, array2));
const array3 = [3, 1, 6, 2, 4, 5, 0];
console.log(sameBST(array1, array3));