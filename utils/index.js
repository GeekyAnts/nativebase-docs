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

const getSnackPlayerCodeSnippet = (...args) => {
  console.log('snippet args received', args);
  const filePath = path.resolve(storybookExamplePath, ...args);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

  return fileContent;
};
const getPropDetail = (...args) => {
  const filePath = path.resolve('./myNB/src/components/', ...args);
  const fileData = docgen.parse(filePath);
  return fileData;
};

module.exports = { getSnackPlayerCodeSnippet, getPropDetail };
// getSnackPlayer('primitives', 'Box', 'basic.tsx');
