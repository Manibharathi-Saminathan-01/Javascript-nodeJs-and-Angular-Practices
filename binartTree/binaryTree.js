"use strict";
const fs = require("fs");

//  This class is to create a node
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
    this.listForInorder = "";
    this.listForPreorder = "";
    this.listForPostorder = "";
    this.listForTree = "";
  }
  // This is used to construct a Tree nodes
  constructTree(input) {
    let parent = +input.at(0).trim();
    let children = input.at(1).trim();
    let childParts = children.split(",");
    let leftChild = childParts.at(0) ? +childParts.at(0) : null;
    let rightChild = childParts.at(1) ? +childParts.at(1) : null;

    //  If the tree is empty then make the node is root.
    if (this.root == null) {
      let node = new Node(
        parent,
        new Node(leftChild, null, null),
        new Node(rightChild, null, null)
      );
      this.root = node;
      this.currentNode = node;
      console.log(this.currentNode);
      this.previousNode = this.currentNode;
      //  If the Root node is already exist then add into next level.
    } else {
      //  If the given parent value is equals to leftchild of parent value then add node into that parent
      if (parent == this.currentNode.leftChild.parentNodeData) {
        this.previousNode = this.currentNode;
        this.currentNode = this.currentNode.leftChild;
        let nodeLeft = new Node(leftChild, null, null);
        let nodeRight = new Node(rightChild, null, null);
        this.currentNode.leftChild = nodeLeft;
        this.currentNode.rightChild = nodeRight;
        this.currentNode = this.previousNode;
        //  If the given parent value is equals to rightchild of parent value then add node into that parent
      } else if (parent == this.currentNode.rightChild.parentNodeData) {
        this.previousNode = this.currentNode;
        this.currentNode = this.currentNode.rightChild;
        let nodeLeft = new Node(leftChild, null, null);
        let nodeRight = new Node(rightChild, null, null);
        this.currentNode.leftChild = nodeLeft;
        this.currentNode.rightChild = nodeRight;
        this.currentNode = this.previousNode.leftChild;
      }
    }
    // If the new node is added then size will increase.
    this.size++;
    // Finally it will return the Root of the tree.
    return this.root;
  }

  //  This method is to perform Inorder operation on the tree.
  inOrder(root) {
    if (root == null) {
      return -1;
    } else {
      this.inOrder(root.leftChild);
      this.listForInorder += `${root.parentNodeData}, `;
      this.inOrder(root.rightChild);
      return this.listForInorder;
    }
  }

  //  This method is to perform Preorder operation on the tree.
  preOrder(root) {
    if (root == null) {
      return -1;
    } else {
      this.listForPreorder += `${root.parentNodeData}, `;
      this.preOrder(root.leftChild);
      this.preOrder(root.rightChild);
      return this.listForPreorder;
    }
  }

  // This function is to perform Postorder operation on the tree.
  postOrder(root) {
    if (root == null) {
      return -1;
    } else {
      this.postOrder(root.leftChild);
      this.postOrder(root.rightChild);
      this.listForPostorder += `${root.parentNodeData}, `;
      return this.listForPostorder;
    }
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
    result = bTree.constructTree(inputValues);
  }
  //  This is for find Inorder,Preorder and Postorder.
  console.log("Inorder :", bTree.inOrder(result));
  console.log("Preorder : ", bTree.preOrder(result));
  console.log("Postorder : ", bTree.postOrder(result));
});
