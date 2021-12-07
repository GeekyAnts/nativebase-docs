const shellJS = require("shelljs");
const config = require("./docs.config.js");
const versions = require("./versions.json");
const URL = config.REPO_LINK + ".git";
const FALLBACK_BRANCH = config.REPO_BRANCH;
const FOLDER = "versioned_repo";
const { versionMap } = config;
shellJS.mkdir(FOLDER);
shellJS.cd(FOLDER);

const cloneRepos = () => {
  versions.push("next");
  for (let i = 0; i < versions.length; i++) {
    const v = versions[i];
    shellJS.mkdir(v);
    shellJS.cd(v);
    shellJS.exec("git clone " + URL);
    shellJS.cd("NativeBase");

    let a = shellJS.exec("git checkout " + "v" + versionMap[v]);

    if (a.code !== 0) {
      shellJS.exec("git checkout " + FALLBACK_BRANCH);
      shellJS.exec("git pull");
    }
    if (process.env.BUILDING === "prod") {
      shellJS.exec("yarn");
    }
    shellJS.cd("..");
    shellJS.cd("..");
  }
};

cloneRepos();
