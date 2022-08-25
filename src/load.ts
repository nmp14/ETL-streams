const { promisify } = require("util");
import fs from "fs";
const writeFilePromised = promisify(fs.writeFile);

function bulkLoadPlanetsToFile(planets: any, outputFilePath: any) {
  if (!outputFilePath) {
    throw new Error("Filepath required as second argument");
  }
  return writeFilePromised(outputFilePath, JSON.stringify(planets, null, 2));
}

export { bulkLoadPlanetsToFile };