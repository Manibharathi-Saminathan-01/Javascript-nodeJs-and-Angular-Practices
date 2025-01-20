"use strict";

class Node {
  constructor(parentNodeData, leftChild, rightChild) {
    this.parentNodeData = parentNodeData;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
    this.currentNode = 0;
    this.size = 0;
  }
  construcTree(parentNodeData, leftChild, rightChild) {
    let runningnode;
    let previousNode;
    let variation;

    if (this.root == null) {
      let node = new Node(parentNodeData, leftChild, rightChild);
      this.root = node;
      this.currentNode = this.root;
    }
    runningnode = this.currentNode;

    if (this.size == 3) {
      this.currentNode = this.currentNode.leftChild;
    }

    if (parentNodeData == this.currentNode.leftChild) {
      if (leftChild == undefined && rightChild == undefined) {
        let node = new Node(parentNodeData, null, null);
        this.currentNode.leftChild = node;
        runningnode = node;
      } else if (rightChild == undefined) {
        let node = new Node(parentNodeData, leftChild, null);
        this.currentNode.leftChild = node;
        runningnode = node;
      } else {
        let node = new Node(parentNodeData, leftChild, rightChild);
        this.currentNode.leftChild = node;
        runningnode = node;
      }
    } else if (parentNodeData == this.currentNode.rightChild) {
      if (leftChild == undefined && rightChild == undefined) {
        let node = new Node(parentNodeData, null, null);
        this.currentNode.rightChild = node;
        runningnode = node;

        console.log();
      } else if (rightChild == undefined) {
        let node = new Node(parentNodeData, leftChild, null);
        this.currentNode.rightChild = node;
        runningnode = node;
      } else {
        let node = new Node(parentNodeData, leftChild, rightChild);
        this.currentNode.rightChild = node;
        runningnode = node;
      }
    }

    console.log(this.currentNode, "current node");
    let listDatas = [];
    listDatas.push(runningnode);
    variation++;
    this.size++;
    console.log(...listDatas, "output");
    console.log(this.size, "size");
    // console.log(this.root.leftChild.leftChild, "venum");
    return listDatas;
  }
}
let test = new BinaryTree();
console.table(test.construcTree(5, 28, 7));
console.table(test.construcTree(28, 71));
console.table(test.construcTree(7, 14));
console.log(test.construcTree(71, 10, 20));
