const fs = require('fs');
const path = require('path');
const docgen = require('react-docgen-typescript');

const storybookExamplePath = path.resolve(
  __dirname,
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
  'NativeBase',
  'src',
  'components'
);

const getSnackPlayerCodeSnippet = (...args) => {
  console.log('snippet args received', args);
  const filePath = path.resolve(storybookExamplePath, ...args);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

  return fileContent;
};

const filter = (obb, val) => {
  const uni = {};
  for (let prop in obb) {
    uni[obb[prop].parent.name] = val;
    fs.writeFileSync(`test-${val.name}.json`, JSON.stringify(uni));
  }

  return uni;
};

const getPropDetail = (...args) => {
  const filePath = path.resolve(componentsRootPath, ...args);
  console.log('filepath: ', filePath);
  const fileData = docgen.parse(filePath);

  // NOTE: writing on code for testing

  fs.writeFileSync('test1.json', JSON.stringify(fileData));
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

  return fileData;
};
// getPropDetail('primitives', 'Box', 'types.ts');

module.exports = { getSnackPlayerCodeSnippet, getPropDetail };
// getSnackPlayer('primitives', 'Box', 'basic.tsx');
