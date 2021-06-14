const shellJS = require('shelljs');
const versions = require('./versions.json');

const URL = 'https://github.com/GeekyAnts/NativeBase.git';

const FALLBACK_BRANCH = 'v3-pre-beta';
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

    const a = shellJS.exec('git checkout ' + 'v' + v);
    if (a.code !== 0) {
      shellJS.exec('git checkout ' + FALLBACK_BRANCH);
    }
    if (process.env.BUILDING === 'prod') {
      shellJS.exec('yarn');
    }
    shellJS.cd('..');
    shellJS.cd('..');
  }
};

cloneRepos();
