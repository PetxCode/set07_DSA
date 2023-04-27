import path from "path";

let newPath = "C:Users/CodeLab/Documents/class/dsa/ignore/text.txt";
// console.log(path.basename(newPath));
// console.log(path.dirname(newPath));
// console.log(path.extname(newPath));

// console.log(path.join(__dirname, "index.ts"));

import fs from "fs";
import fsPromise from "fs/promises";

// fs.readFile(
//   path.join(__dirname, "ignore", "text.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log("Reading from Async", data);
//     }
//   },
// );

try {
  const data = fs.readFileSync(path.join(__dirname, "ignore", "text.txt"), {
    encoding: "utf-8",
  });
  console.log("Reading from Sync", data);
} catch (error) {
  console.log(error);
}

const readFile = async () => {
  try {
    const data = await fsPromise.readFile(
      path.join(__dirname, "ignore", "text.txt"),
      { encoding: "utf-8" },
    );

    console.log(data);
  } catch (error) {
    throw error;
  }
};

readFile();
