import { csvTransform } from "./utils/index.js";

function square(number) {
  console.log(Math.pow(number, 2));
}

(async () => {
  let result;
  // Inner path
  result = await csvTransform({
    path: "./demo.csv",
    onRead: square,
    beforeRead: ({ path }) => console.log(`before reading ${path}`),
    afterRead: () => console.log("After reading"),
  });

  console.log("csv", result);

  // From url
  result = await csvTransform({
    path: "https://raw.githubusercontent.com/alan-serrano/csv_demo/master/demo.csv",
    onRead: square,
    beforeRead: ({ path }) => console.log(`before reading ${path}`),
    afterRead: () => console.log("After reading"),
  });

  console.log("csv", result);
})();
