const fs = require('fs');
const path = require('path');
const docgen = require('react-docgen-typescript');
const shell = require('shelljs');

const {
  transformStorybookToDocExample,
} = require('../storybook-example-transformer');
const prettier = require('prettier');

const repoPath = path.resolve(__dirname, '..', '..', 'NativeBase');

const storybookExamplePath = (repoPath) =>
  path.resolve(repoPath, 'example', 'storybook', 'stories', 'components');
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
  let val = meta.split('=');
  return {
    path: val[1].split(' ')[0].split(','),
    showStylingProps: val[2],
  };
};

// Meta: example
// path=primitives,Box,index.tsx showStylingProps=true
const getPropDetail = (repoPath, meta) => {
  const { path: subPath, showStylingProps } = simplifyMeta(meta);
  const filePath = path.resolve(componentsRootPath(repoPath), ...subPath);
  // console.log('filepath: ', filePath);
  const fileData = docgen.parse(filePath);

  // NOTE: writing on code for testing

  // fs.writeFileSync('test1.json', JSON.stringify(fileData));
  // console.log('written on test1: ', Object.keys(fileData[0].props).length);

  // filter(fileData[0].props, {
  //   doc: '',
  //   name: 'TextProp',
  //   link: `https://reactnative.dev/docs/text`,
  // });
  // filter(fileData[1].props, {
  //   doc: '',
  //   name: 'ExtraProps',
  //   link: `style-props#extra-props`,
  // });
  // filter(fileData[2].props, {
  //   doc: '',
  //   name: 'OutlineProps',
  //   link: `style-props#outline`,
  // });
  // filter(fileData[3].props, {
  //   doc: '',
  //   name: 'ShadowProps',
  //   link: `style-props#shadow`,
  // });
  // filter(fileData[4].props, {
  //   doc: '',
  //   name: 'BackgroundProps',
  //   link: `style-props#background`,
  // });
  // filter(fileData[5].props, {
  //   doc: '',
  //   name: 'SafeAreaProps',
  //   link: `style-props#safearea`,
  // });

  return [fileData, showStylingProps];
};
// getPropDetail('primitives', 'Box', 'types.ts');
// getPropDetail('primitives', 'Box', 'index.tsx');
// getPropDetail('path=primitives,Box,index.tsx');

const getVersion = (directory) => {
  // console.log('mamamam ', directory);
  if (directory.includes('versioned_docs')) {
    return directory.split('versioned_docs/version-')[1];
  }

  return 'next';
};

function gitCheckoutForVersion(v) {
  const a = shell.cd(repoPath);
  const b = shell.exec('git checkout ' + v);
  if (a.code !== 0 || b.code !== 0) {
    throw new Error('git command failed');
  }
}

function getProjectPath(directory) {
  const rootPath = path.resolve(__dirname, '..', '..', 'versioned_repo');

  return path.resolve(rootPath, getVersion(directory), 'NativeBase');
}

module.exports = {
  getSnackPlayerCodeSnippet,
  getPropDetail,
  getProjectPath,
  getVersion,
};
// getSnackPlayer('primitives', 'Box', 'basic.tsx');
