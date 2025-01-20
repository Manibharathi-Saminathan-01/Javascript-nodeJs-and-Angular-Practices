"use strict";
const fs = require("fs");

//  This class is to create a vertex
class Vertex {
  constructor(parent, children) {
    this.parent = parent;
    this.children = children;
  }
}
// This class is defines a graph
class Graph {
  constructor() {
    this.startingVertex = null;
    this.vertices = [];
  }

  // This method is use to construct a graph structure
  constructGraph(input) {
    let vertexValue = input.at(0).trim();
    let childVerticesValues = input.at(1).trim();
    let childParts = childVerticesValues.split(",");

    let newVertex = new Vertex(vertexValue, childParts);
    this.vertices.push(newVertex);

    this.startingVertex = this.vertices[0];
    return this.vertices;
  }
  // This method is to dispaly the graph
  display(vertices) {
    for (let element of vertices) {
      console.log(
        "Vertex data is :",
        element.parent,
        " and",
        "vertex adjacent node is :",
        ...element.children
      );
    }
  }
  // This method is to perform Depth first search traversal
  displayDfsTraversal(vertices) {
    let visisted = [];
    visisted.push(vertices[0].parent);
    for (let i = 0; i < vertices.length; i++) {
      if (!visisted.includes(vertices[i].children[0])) {
        vertices[i].children[0] ? vertices[i].children[0] : 0;
        visisted.push(vertices[i].children[0]);
      }
    }
    for (let i = 0; i < vertices.length; i++) {
      if (!visisted.includes(vertices[i].children[1])) {
        vertices[i].children[1] ? vertices[i].children[1] : 0;
        visisted.push(vertices[i].children[1]);
      }
    }
    console.log("The Depth first search is : ", ...visisted);
  }
  // This method is to perform Breadth first search
  displayBfsTraversal(vertex) {
    let visited = [];
    visited.push(vertex[0].parent);
    for (let element of vertex) {
      for (let child of element.children) {
        if (!visited.includes(child)) {
          visited.push(child);
        }
      }
    }
    console.log("The Breadth first search is :", ...visited);
  }
}

let graphObject = new Graph();

fs.readFile("m_graph.txt", "utf-8", (error, data) => {
  if (error) throw error;
  const inputdata = data.split("\n");
  let result;

  for (let element of inputdata) {
    let inputValues = element.split("|");
    result = graphObject.constructGraph(inputValues);
  }
  graphObject.display(result);
  graphObject.displayDfsTraversal(result);
  graphObject.displayBfsTraversal(result);
});
