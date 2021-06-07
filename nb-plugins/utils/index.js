const fs = require('fs');
const path = require('path');
const docgen = require('react-docgen-typescript');
const {
  transformStorybookToDocExample,
} = require('../storybook-example-transformer');
const prettier = require('prettier');

const storybookExamplePath = path.resolve(
  __dirname,
  '..',
  '..',
  'NativeBase',
  'example',
  'storybook',
  'stories',
  'components'
);
const componentsRootPath = path.resolve(
  __dirname,
  '..',
  '..',
  'NativeBase',
  'src',
  'components'
);

const getSnackPlayerCodeSnippet = (...args) => {
  console.log('snippet args received', args);
  const filePath = path.resolve(storybookExamplePath, ...args);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
  let transformedFile = transformStorybookToDocExample(fileContent);
  transformedFile = prettier.format(transformedFile, {
    semi: false,
    parser: 'babel',
  });

  return transformedFile;
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
const getPropDetail = (meta) => {
  const { path: subPath, ...objectifiedMeta } = simplifyMeta(meta);
  const filePath = path.resolve(componentsRootPath, ...subPath);
  console.log('filepath: ', filePath);
  const code = docgen.parse(filePath);

  // NOTE: writing on code for testing
  // fs.writeFileSync('test1.json', JSON.stringify(code));
  // console.log('written on test1: ', Object.keys(code[0].props).length);

  return { code, ...objectifiedMeta };
};

module.exports = { getSnackPlayerCodeSnippet, getPropDetail, simplifyMeta };
// getSnackPlayer('primitives', 'Box', 'basic.tsx');
