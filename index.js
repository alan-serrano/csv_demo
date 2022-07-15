import { csvTransform } from "./utils/index.js";

function square(number) {
  console.log(Math.pow(number, 2));
}

// Inner path
csvTransform({
  path: "./demo.csv",
  onRead: square,
  beforeRead: () => console.log("Start reading"),
  afterRead: () => console.log("After reading"),
});

// From url
csvTransform({
  path: "https://raw.githubusercontent.com/alan-serrano/csv_demo/master/demo.csv",
  onRead: square,
  beforeRead: () => console.log("Start reading"),
  afterRead: () => console.log("After reading"),
});
