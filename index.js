import { csvTransform } from "./utils/index.js";

function square(number) {
  console.log(Math.pow(number, 2));
}

csvTransform({
  path: "./demo.csv",
  onRead: square,
  beforeRead: () => console.log("Start reading"),
  afterRead: () => console.log("After reading"),
});
