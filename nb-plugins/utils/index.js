const fs = require('fs');
const path = require('path');
const docgen = require('react-docgen-typescript');
const shell = require('shelljs');
const packageJSON = require('../../package.json');

const {
  transformStorybookToDocExample,
} = require('../storybook-example-transformer');
const prettier = require('prettier');

const repoPath = path.resolve(__dirname, '..', '..', 'NativeBase');

const storybookExamplePath = (repoPath) =>
  path.resolve(repoPath, 'example', 'storybook', 'stories');
const componentsRootPath = (repoPath) =>
  path.resolve(repoPath, 'src', 'components');

const getSnackPlayerCodeSnippet = (repoPath, ...examplePath) => {
  // console.log('snippet args received', args);
  const filePath = path.resolve(storybookExamplePath(repoPath), ...examplePath);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
  try {
    let transformedFile = transformStorybookToDocExample(
      fileContent,
      examplePath
    );
    transformedFile = prettier.format(transformedFile, {
      semi: false,
      parser: 'babel',
    });
    return transformedFile;
  } catch (e) {
    console.log(
      'Babel transform error in snackplayer example. Check file ',
      repoPath,
      examplePath,
      e
    );
  }
};

const filter = (obb, val) => {
  const uni = {};
  for (let prop in obb) {
    uni[obb[prop].parent.name] = val;
    fs.writeFileSync(`test-${val.name}.json`, JSON.stringify(uni));
  }

  return uni;
};

const simplifyMeta = (meta) => {
  // let val = meta.split('=');
  // return {
  //   path: val[1].split(' ')[0].split(','),
  //   showStylingProps: val[2],
  // };
  let variables = null;

  variables = meta.split(' ');
  let objectifiedMeta = {};

  variables.map((variable) => {
    if (variable) {
      const temp = variable.split('=');
      let val = temp[1];
      if (temp[1].includes(',')) {
        val = val.split(',');
      }
      objectifiedMeta[temp[0]] = val;
    }
  });
  return { ...objectifiedMeta };
};

// NOTE: meta sample
// path=primitives,Box,index.tsx showStylingProps=true
const getPropDetail = (meta, repoPath) => {
  const { path: subPath, ...objectifiedMeta } = simplifyMeta(meta);
  const filePath = path.resolve(repoPath, 'src', 'components', ...subPath);
  const code = docgen.parse(filePath);

  // NOTE: writing on code for testing
  // fs.writeFileSync('test1.json', JSON.stringify(code));

  return { code, ...objectifiedMeta };
};
// getPropDetail('path=primitives,Box,index.tsx');

const getVersion = (directory) => {
  // console.log('mamamam ', directory);
  if (directory.includes('versioned_docs')) {
    return directory.split('versioned_docs/version-')[1];
  }

  return 'next';
};
const getNativeBaseVersion = () => {
  // console.log('mamamam ', directory);

  // if (directory.includes('versioned_docs')) {
  //   return directory.split('versioned_docs/version-')[1];
  // }

  return packageJSON.dependencies['native-base'];
  // return 'next';
};

function getProjectPath(directory) {
  const rootPath = path.resolve(__dirname, '..', '..', 'versioned_repo');

  return path.resolve(rootPath, getVersion(directory), 'NativeBase');
}

module.exports = {
  getSnackPlayerCodeSnippet,
  getPropDetail,
  getProjectPath,
  getVersion,
  getNativeBaseVersion,
};
// getSnackPlayer('primitives', 'Box', 'basic.tsx');
