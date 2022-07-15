import { parse } from "csv";
import fs from "fs";
import got from "got";
import { isValidHttpUrl } from "./isValidHttpUrl.js";

/**@type {import('./csvTransform.types').csvTransform} */
export function csvTransform({
  path,
  onRead,
  beforeRead = () => {},
  afterRead = () => {},
}) {
  const timeStamp = new Date().getTime();
  console.time(`csvTransform ${timeStamp}`);
  return new Promise(async (resolve, reject) => {
    let result = [];
    beforeRead({ path });
    let counter = 0;

    const csvStream = await getFileStream(path);
    const csvReader = csvStream.pipe(parse({ delimiter: ",", from_line: 1 }));

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
      console.timeEnd(`csvTransform ${timeStamp}`);
      afterRead(result);
    });

    csvReader.on("error", function (error) {
      reject(error);
    });
  });
}

async function getFileStream(path) {
  if (isValidHttpUrl(path)) {
    return got.stream(path);
  } else {
    return fs.createReadStream(path);
  }
}
