"use strict";
const fs = require("fs");

class Node {
  constructor(parentNodeData, children) {
    this.parentNodeData = parentNodeData;
    this.children = children;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
    this.size = 0;
    this.currentNode = 0;
  }

  constructTree(input) {
    let parent = input.at(0).trim();
    let children = input.at(1).trim();
    let childParts = children.split(",");

    if (this.root == null) {
      let node = new Node(parent, childParts);
      this.root = node;
      console.log(this.root);
      this.currentNode = node;
    } else {
      for (let index = 0; index < this.currentNode.children.length; index++) {
        if (this.currentNode.children[index] == parent) {
          let node = new Node(parent, childParts);
          console.log(node);
          this.currentNode.children[index] = node;
          //   this.currentNode = node;
          console.log(this.currentNode.children, "child");
        }
      }
    }
    for (let i = 0; i < this.root.children; i++) {
      console.log(this.root.parentNodeData, "parents");
      console.log(this.root.children[i], "children");
    }

    this.size++;

    return this.root;
  }

  inorder(root) {
    if (root == null) {
      return -1;
    } else {
      console.log(root.parentNodeData, "par");
      console.log(root.children, children);
    }
  }
}

let bTree = new BinaryTree();

fs.readFile("inputfiles.txt", "utf-8", (error, data) => {
  if (error) throw error;
  const inputdata = data.split("\n");
  console.log(inputdata);
  let result;

  for (let element of inputdata) {
    let inputValues = element.split("|");
    result = bTree.constructTree(inputValues);
  }
  bTree.inorder(result);
});
