"use strict";

//  This class is to create a node for Binary Search tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
// This class is to create Binary search tree structure.
class BinaryTree {
  constructor() {
    this.root = null;
    this.list = [];
  }

  // This method is used to construct Binary search tree
  constructTree(data, rootNode) {
    let node = new Node(data);
    // If the rootNode parameter is undefined then it will be Root node of the Tree
    if (rootNode == undefined) {
      rootNode = this.root;
    }
    // If the tree has no nodes then first data is the root node
    if (this.root == null) {
      this.root = node;
    } else {
      // Then tree has a node then given data is compare with root node if that true then assign root left child points to data
      if (node.data <= rootNode.data) {
        if (rootNode.left == null) {
          rootNode.left = node;
        } else {
          // If the left child of root is not null then make it left of root into root. then call recursively.
          this.constructTree(node.data, rootNode.left);
        }
        // If the data is greater than the Root node data, then assign a data into right child of the root.
      } else {
        if (rootNode.right == null) {
          rootNode.right = node;
          // If the right child of the root is not null then make it right of root into root. then call recursively.
        } else {
          this.constructTree(node.data, rootNode.right);
        }
      }
    }
    // This function returns Root node of the tree.
    return this.root;
  }

  // This method is use to perform a Inorder traversal into a binary search tree.
  inOrder(node) {
    if (node == null) {
      return -1;
    } else {
      this.inOrder(node.left);
      this.list.push(node.data);
      this.inOrder(node.right);
    }
    return this.list;
  }
}

let listOfNumbers = [25, 2, 1, 3, 33, 30, 35, 4, 5, 8, 10, 60];
// Object for the class BinaryTree.
let binarySearchTree = new BinaryTree();
let rootNodeOfBst;

// Iterate over the List of numbers for construct tree.
for (let number of listOfNumbers) {
  rootNodeOfBst = binarySearchTree.constructTree(number);
}
//  Print the numbers into Sorted order by using Inorder traversal.
console.log("Sorted numbers is :", ...binarySearchTree.inOrder(rootNodeOfBst));
