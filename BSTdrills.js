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