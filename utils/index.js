const fs = require('fs');
const path = require('path');

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

module.exports = { getSnackPlayerCodeSnippet };
// getSnackPlayer('primitives', 'Box', 'basic.tsx');
