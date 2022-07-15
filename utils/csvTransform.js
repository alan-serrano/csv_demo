import { parse } from "csv";
import fs from "fs";

/**@type {import('./csvTransform.types').csvTransform} */
export function csvTransform({
  path,
  onRead,
  beforeRead = () => {},
  afterRead = () => {},
}) {
  return new Promise((resolve, reject) => {
    let result = [];
    beforeRead({ path });
    console.time(`csvTransform`);
    let counter = 0;

    const csvReader = fs
      .createReadStream(path)
      .pipe(parse({ delimiter: ",", from_line: 1 }));

    csvReader.on("data", (row) => {
      counter++;
      result.push(row);
      if (counter === 1) {
        return;
      }
      for (const item of row) {
        onRead(item);
      }
    });

    csvReader.on("end", () => {
      resolve(result);
      console.timeEnd(`csvTransform`);
      afterRead(result);
    });

    csvReader.on("error", function (error) {
      reject(error);
    });
  });
}
