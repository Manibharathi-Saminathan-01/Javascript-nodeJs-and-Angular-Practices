"use strict";

const fs = require("fs");
const { DefaultSerializer } = require("v8");
const { deflateSync } = require("zlib");

//  This class is use for create a new node
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// This class is to create Binary tree structure.
class BinaryTree {
  constructor() {
    this.root = null;
    this.list = [];
    this.listForPrint = [];
    this.listForSwapping = [];
  }

  // This method is used to create a node from the input value.
  createDataNode(input) {
    // Extract data from array and assign parent ,leftchild and rightchild.
    let parent = +input.at(0).trim() ? input.at(0).trim() : input;
    let children = input.at(1).trim() ? input.at(1).trim() : input;
    let childParts = children.split(",");
    let leftChild = childParts.at(0) ? +childParts.at(0) : null;
    let rightChild = childParts.at(1) ? +childParts.at(1) : null;
    let nodeParent = new Node(parent);
    let nodeLeft = new Node(leftChild);
    let nodeRight = new Node(rightChild);

    // If the tree has no nodes then first data is the root node
    if (this.root == null) {
      this.root = nodeParent;
      this.root.left = nodeLeft;
      this.root.right = nodeRight;

      //  Tree has node then call add method
    } else {
      this.addNodeIntoBinaryTree(this.root, nodeParent, nodeLeft, nodeRight);
    }
    return this.root;
  }

  // This method is to add a new node into a binary tree.
  addNodeIntoBinaryTree(node, parentValue, leftData, rightData) {
    // Termination condition for callback function.If the node left and node right has a null then return.
    if (node.left == null && node.right == null) {
      return -1;
    }
    // If the given parent data is equals to root left data then connect between root and new node
    if (node.left.data == parentValue.data) {
      node.left.left = leftData;
      node.left.right = rightData;
      return -1;

      // If the given data is equals to root right data then connect between root and new node.
    } else if (node.right.data == parentValue.data) {
      node.right.left = leftData;
      node.right.right = rightData;
      return -1;
    }
    // If the both conditions doesn't match then call again with root.left and root.right.
    this.addNodeIntoBinaryTree(node.left, parentValue, leftData, rightData);
    this.addNodeIntoBinaryTree(node.right, parentValue, leftData, rightData);
  }

  // This method is use to perform a Inorder traversal into a binary search tree.
  inorderTraversal(node) {
    if (node == null) {
      return -1;
    } else {
      this.inorderTraversal(node.left);
      this.list.push(node.data);
      this.inorderTraversal(node.right);
    }
    return this.list;
  }

  // This method is use to printTheBinaryTree the tree structure before swapping
  printTheBinaryTree(root) {
    if (root.left == null && root.right == null) {
      return -1;
    }
    this.listForPrint.push(
      `${root.data} is the Parent, left child is ${root.left.data},  right child is  ${root.right.data}\n `
    );
    this.printTheBinaryTree(root.left);
    this.printTheBinaryTree(root.right);
    return this.listForPrint;
  }

  // this method is use to swap the node data from left to right.
  transformBinaryTreeChildren(root) {
    if (root.left == null && root.right == null) {
      return -1;
    }
    let temporaryNode = root.left;
    root.left = root.right;
    root.right = temporaryNode;
    this.listForSwapping.push(
      `${root.data} is the Parent, left child is ${root.left.data},  right child is  ${root.right.data}\n`
    );
    this.transformBinaryTreeChildren(root.left);
    this.transformBinaryTreeChildren(root.right);
    return this.listForSwapping;
  }
}

// Object for the class BinaryTree.
let bTree = new BinaryTree();
fs.readFile("input.txt", "utf-8", (error, data) => {
  if (error) throw error;
  const inputdata = data.split("\n");
  let result;
  //  This loop is to for iterate over the input file and call the method constuctTree()
  for (let element of inputdata) {
    let inputValues = element.split("|");
    result = bTree.createDataNode(inputValues);
  }
  console.log("Before swapping :\n ", ...bTree.printTheBinaryTree(result));
  console.log(
    "After swapping :\n",
    ...bTree.transformBinaryTreeChildren(result)
  );
});

let visisted = [];
console.log(vertices[0].parent, "ver");
visisted.push(vertices[0].parent);
for (let i = 0; i < vertices.length; i++) {
  if (!visisted.includes(vertices[i].children[0])) {
    vertices[i].children[0] ? console.log(vertices[i].children[0]) : 0;
    visisted.push(vertices[i].children[0]);
  }
}
for (let i = 0; i < vertices.length; i++) {
  if (!visisted.includes(vertices[i].children[1])) {
    vertices[i].children[1] ? console.log(vertices[i].children[1]) : 0;
    visisted.push(vertices[i].children[1]);
  }
}
console.log(visisted, "ans");
