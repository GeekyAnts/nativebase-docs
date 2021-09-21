const shellJS = require('shelljs');
const { REPO_BRANCH, REPO_LINK } = require('./constants');
const versions = require('./versions.json');

const URL = REPO_LINK + '.git';

const FALLBACK_BRANCH = REPO_BRANCH;
const FOLDER = 'versioned_repo';
shellJS.mkdir(FOLDER);
shellJS.cd(FOLDER);

const cloneRepos = () => {
  versions.push('next');
  for (let i = 0; i < versions.length; i++) {
    const v = versions[i];
    shellJS.mkdir(v);
    shellJS.cd(v);
    shellJS.exec('git clone ' + URL);
    shellJS.cd('NativeBase');

    let a = shellJS.exec('git checkout ' + 'v' + v);

    //TODO: 3.2.0-hack
    if (v === '3.2.0') {
      a = shellJS.exec('git checkout ' + 'master');
    }
    if (a.code !== 0) {
      shellJS.exec('git checkout ' + FALLBACK_BRANCH);
      shellJS.exec('git pull');
    }
    if (process.env.BUILDING === 'prod') {
      shellJS.exec('yarn');
    }
    shellJS.cd('..');
    shellJS.cd('..');
  }
};

cloneRepos();
