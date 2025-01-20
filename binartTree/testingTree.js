"use strict";
const fs = require("fs");

class Node {
  constructor(parentNodeData, leftChild, rightChild) {
    this.parentNodeData = parentNodeData;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}
// This class is to create Btree structure and insert the
class BinaryTree {
  constructor() {
    this.root = null;
    this.currentNode = 0;
    this.previousNode = 0;
    this.size = 0;
  }
  constructTree(input) {
    console.log(input, "in");
    let parent = +input.at(0).trim();
    let children = input.at(1).trim();
    let childParts = children.split(",");
    let leftChild = childParts.at(0) ? +childParts.at(0) : null;
    console.log(parent, "parent");
    console.log(leftChild, "left");
    let rightChild = childParts.at(1) ? +childParts.at(1) : null;
    console.log(rightChild, "right");
    let runningnode;
    //  If the tree is empty then make us first node is root
    while (this.root) {
      let node = new Node(parent, leftChild, rightChild);
      if (this.root == null) {
        this.root = node;
        console.log(this.root, "rppt");
        this.currentNode = node;
      } else {
        if (this.currentNode.leftChild == parent) {
          this.currentNode.leftChild = node;
          console.log(this.currentNode, "cur left");
        } else if (this.currentNode.rightChild == parent) {
          this.currentNode.rightChild = node;
          console.log(this.currentNode, "cur right");
          this.previousNode = this.currentNode;
          this.currentNode = this.previousNode;
        } else {
          this.currentNode = this.currentNode.rightChild;
        }
      }
    }
    console.log(this.root, "rooyt");
    this.size++;
    console.log(this.size, "size");
    return this.currentNode;
  }
}
let bTree = new BinaryTree();

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
  const inputdata = data.split("\n");
  console.log(inputdata);

  for (let elem of inputdata) {
    let ip = elem.split("|");
    console.log(bTree.constructTree(ip), "final OUT");
    console.log(ip, "input");
  }
});

this.constructTree(
  [`${nodeParent.data} `, ` ${nodeLeft.data},${nodeRight.data}`],
  rootNode.right.right
);
