const shellJS = require("shelljs");
const config = require("../../docs.config.js");
let versions = require("../../versions.json");
const { versionMap } = config;
const prettier = require("prettier");
const fs = require("fs");

const createVersion = () => {
  shellJS.cp("-r", "docs/next", "docs/" + process.argv[2]);
  config.versionMap = { ...versionMap, [process.argv[2]]: process.argv[3] };
  versions = [process.argv[2], ...versions];

  const configFileData = `
  module.exports = ${JSON.stringify(config)}
  `;

  fs.writeFile(
    `versions.json`,
    prettier.format(JSON.stringify(versions), { semi: false, parser: "json" }),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  fs.writeFile(
    `docs.config.js`,
    prettier.format(configFileData, { semi: false, parser: "babel" }),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

createVersion();
