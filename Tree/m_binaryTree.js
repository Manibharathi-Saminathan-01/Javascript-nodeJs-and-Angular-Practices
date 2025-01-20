"use strict";
//  This class is help us to create a new node
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
    this.size = 0;
  }
  constructTree(parentNodeData, leftChild, rightChild) {
    let runningnode;
    //  If the tree is empty then make us first node is root
    if (this.root == null) {
      let node = new Node(parentNodeData, leftChild, rightChild);
      this.root = node;
      this.currentNode = this.root;
    }
    runningnode = this.currentNode;
    //  If the root node have leftchild and rightchild then move the currentnode into root's leftchild
    if (this.size >= 3) {
      this.currentNode = runningnode.leftChild;
    }
    // If the passed parameter is equals to current node leftchild then add into leftchild
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
      // If the current passed parameter is equals to right child of the current node then add into rightchild of  root
    } else if (parentNodeData == this.currentNode.rightChild) {
      if (leftChild == undefined && rightChild == undefined) {
        let node = new Node(parentNodeData, null, null);
        this.currentNode.rightChild = node;
        runningnode = node;
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
    // It is use to print the tree structure
    let listDatas = [];
    listDatas.push(runningnode);
    console.log(this.currentNode);
    this.size++;
    return listDatas;
  }
}
let bTree = new BinaryTree();
// Here function call should in order of (rootValue,leftChildValue,RightChildValue)
console.table(bTree.constructTree(5, 28, 7));
console.table(bTree.constructTree(28, 71));
console.table(bTree.constructTree(7, 14));
