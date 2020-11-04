import { animation } from "./animation.js";

const blocks = [];
const pane = document.getElementById("pane");

const render = () => {
  create(30);
};

const block = (blockNumber) => {
  const blockContainer = document.createElement("div");
  blockContainer.setAttribute("id", "block-container");
  for (let i = 0; i < blockNumber; i++) {
    blocks[i] = document.createElement("div");
    blocks[i].setAttribute("class", "block");
    blockContainer.appendChild(blocks[i]);
  }
  return blockContainer;
};

const create = (blockNumber) => {
  pane.appendChild(navigator());
  pane.appendChild(block(blockNumber));
  pane.appendChild(ball());
};

const navigator = () => {
  const navigator = document.createElement("div");
  navigator.setAttribute("id", "navigator");
  return navigator;
};

const ball = () => {
  const ball = document.createElement("div");
  ball.setAttribute("id", "ball");
  return ball;
};
render();
animation()

