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
  

  //9. Are they the same BSTs?