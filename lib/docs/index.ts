import fs from 'fs';
import DirectoryTree from 'directory-tree';
let filePaths: string[] = [''];
import versions from '../../versions.json';
const baseDirPath = process.cwd();
import path from 'path';
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const prettier = require('prettier');
const docgen = require('react-docgen-typescript');
const { internalPropsMap, rnPropsMap, StylingPropsMap } = require('./propsMap');
import { useColorModeValue, useColorMode, ColorMode } from 'native-base';
const babel = require('@babel/core');
const babelPlugin = require('@babel/plugin-transform-typescript');

const getHeadingLevel = (line: string) => {
  return {
    level: line.split('#').filter((val) => val === '').length - 1,
    id: line
      .split('#')
      .filter((val) => val !== '')[0]
      .trim()
      .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
      .replace(/ /g, '-')
      .toLowerCase(),
    title: line
      .split('#')
      .filter((val) => val !== '')[0]
      .trim(),
  };
};

const removeCommentsFromMarkdownFile = (file: string) => {
  return file.replace(/<!--[\s\S]*?-->/g, '');
};

const checkHeading = (headingLevelMap: any) => {
  let headingIndexMap = [];
  let headingMap = [];
  let result = [];
  for (let i = 0; i < headingLevelMap.length; i++) {
    let headingMapIndex = headingMap.findIndex(
      (id) => id === headingLevelMap[i].id
    );
    if (headingMapIndex !== -1) {
      headingIndexMap[headingMapIndex] += 1;
      result.push({
        level: headingLevelMap[i].level,
        title: headingLevelMap[i].title,
        id: `${headingLevelMap[i].id}-${headingIndexMap[headingMapIndex]}`,
      });
    } else {
      headingMap.push(headingLevelMap[i].id);
      headingIndexMap.push(0);
      result.push({
        level: headingLevelMap[i].level,
        title: headingLevelMap[i].title,
        id: 'h' + (headingLevelMap[i].level + 1) + '-' + headingLevelMap[i].id,
      });
    }
  }
  return result;
};

export const getTOCArray = (file: string) => {
  file = removeCommentsFromMarkdownFile(file);
  const fileLines = file
    .split('\n')
    .filter((line: string) => (line.substring(0, 1) === '#' ? true : false))
    .map((line: any) => line.split(' id')[0].trim());

  let toc = {};
  const headingLevelMap = fileLines.map((line: string) => {
    return getHeadingLevel(line);
  });
  return checkHeading(headingLevelMap);
};

export const getFilePaths = (
  tree: DirectoryTree.DirectoryTree
  // index: number = 0,
): string[] | undefined => {
  if (!tree.children) {
    let path = tree.path.split('/docs/')[1];
    let slugPath = '';
    if (path.split('/')[0] === versions[0]) {
      slugPath = path.split(`${versions[0]}/`)[1];
    }
    if (path.match(/\.mdx?$/)) {
      filePaths = [...filePaths, path];
      if (slugPath != '') {
        filePaths = [...filePaths, slugPath];
      }
    }
  }
  if (tree.children) {
    for (let i = 0; i < tree.children.length; i++) {
      getFilePaths(tree.children[i]);
    }
  }
  return filePaths;
};

export const getFileExtension = async (slug: string) => {
  const slugPathArray = slug.split('/');
  let filename = slugPathArray[slugPathArray.length - 1];
  let slugPath = '';
  for (let i = 0; i < slugPathArray.length - 1; i++) {
    slugPath = slugPath + slugPathArray[i] + '/';
  }
  const files = fs.readdirSync(baseDirPath + '/docs/' + slugPath);
  // console.log("files", files);
  // console.log("filename", filename);
  for (let i = 0; i < files.length; i++) {
    if (files[i].split('.')[0] === filename) {
      return files[i].split('.')[1];
    }
  }
  return 'file_not_found';
};

const getAdmonitionTag = (str: string) => {
  let status = str.split('\n')[0].substring(0, str.indexOf(' '));
  let title = str.split('\n')[0].substring(str.indexOf(' ') + 1);
  let children = str.split(':::')[0].substring(str.indexOf('\n') + 1);
  return `<admonition status="${status}" title="${title}">\n${children}</admonition>${str
    .split(':::')
    .slice(1)
    .join('')}`;
};

export const parseAdmonitions = (fileData: any, version: string) => {
  let tempArray = fileData.split(/(\:::)(?!\n| )/g);
  let result = [];
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i] === ':::') {
      result.push(getAdmonitionTag(tempArray[i + 1]));
      i = i + 1;
    } else {
      result.push(tempArray[i]);
    }
  }
  return result.join('');
};
export const parseHeadings = (fileData: any, version: string) => {
  const headings = fileData
    .split('\n')
    .filter((line: string) => line.substring(0, 1) === '#');

  let result: any = [];
  let key = -1;
  let headingIndexMap = [];
  let headingMap = [];
  for (let i = 0; i < headings.length; i++) {
    const headingId = headings[i]
      .split('#')
      .filter((val: any) => val !== '')[0]
      .trim()
      .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
      .replace(/ /g, '-')
      .toLowerCase();
    let headingMapIndex = headingMap.findIndex((id) => id === headingId);
    if (headingMapIndex !== -1) {
      headingIndexMap[headingMapIndex] += 1;
      result.push(`${headingId}-${headingIndexMap[headingMapIndex]}`);
    } else {
      headingMap.push(headingId);
      headingIndexMap.push(0);
      result.push(headingId);
    }
  }

  const fileLines = fileData.split('\n').map((line: string) => {
    if (line.substring(0, 1) === '#') {
      key++;
      return line + ' id=' + result[key];
    } else {
      return line;
    }
  });

  return fileLines.join('\n');
};

export const parseCodeBlock = (fileData: any, version: string) => {
  const tempArray = fileData.split('```ComponentSnackPlayer ');
  // console.log(tempArray);

  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i].substring(0, 4) == 'path') {
      let code = getCodeFromStorybook(
        tempArray[i].split('\n')[0].slice(5).split(','),
        version
      );
      // console.log(tempArray[i]);
      let temp1 = tempArray[i].split('```');
      // console.log(temp1);
      temp1[0] = code;
      tempArray[i] = temp1.join('```');
    }
  }
  return tempArray.join('');
};
export const parsePropTable = (fileData: any, version: string) => {
  const tempArray = fileData.split('```ComponentPropTable ');
  // console.log(tempArray);

  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i].substring(0, 4) == 'path') {
      let code = getPropTableFile(
        tempArray[i]
          .split('\n')[0]
          .slice(5)
          .split(' showStylingProps')[0]
          .trim()
          .split(','),
        version
      );

      let position = tempArray[i].search('```');
      let res = code + tempArray[i].substring(position + 3);
      tempArray[i] = res;
    }
  }

  return tempArray.join('');
};

const propTable = (typesArray: any, showStylingProps: boolean) => {
  // console.log(typesArray, "typess");
  return typesArray.map((component: any) => {
    return ` ${implementSection(
      component,
      showStylingProps
    )} ${templateGenerator(component)}`;
  });
};

const implementsTemplateGenerator = (set: any) => {
  let temp = '';
  const arr = [...set];
  [...arr].map((item, i) => {
    temp = temp + item + (i === arr.length - 1 ? '' : ', ');
  });
  return temp;
};
const implementSection = (componentDetails: any, showStylingProps: any) => {
  const { displayName, props } = componentDetails;
  let implementsArray = new Set();
  for (let prop in props) {
    const { name, description, type, parent, defaultValue } = props[prop];
    let propName = name;
    if (parent) {
      propName = parent.name;
    }
    const MapValue = showStylingProps
      ? internalPropsMap[propName] ||
        rnPropsMap[propName] ||
        StylingPropsMap[propName]
      : internalPropsMap[propName];

    if (MapValue && propName !== `I${displayName}Props`) {
      implementsArray.add(
        MapValue.link.startsWith('http')
          ? `<a href="${MapValue.link}"><inlineCode>${MapValue.name}</inlineCode></a>`
          : `<a href="${MapValue.link}">${MapValue.name}</a>`
      );
    }
  }

  const implementsTemplate = implementsTemplateGenerator(implementsArray);
  if (implementsTemplate) {
    return `<p>${componentDetails.displayName} implements ${implementsTemplate}</p>`;
  }

  return ``;
};

const templateGenerator = (componentDetails: any) => {
  const { displayName, props } = componentDetails;
  let propExists = false;

  const template = (propsObject: any) => {
    let temp = '';
    for (let prop in propsObject) {
      const { name, description, type, parent, defaultValue } =
        propsObject[prop];
      let markupWithTypeLinks;
      if (type.name.includes('ILinearGradientProps')) {
        markupWithTypeLinks = `${
          `ResponsiveValue&lt;` +
          `<a href="${StylingPropsMap['backgroundColor'].link}">ColorProps </a>` +
          `\|` +
          `<a href="${internalPropsMap['ILinearGradientProps'].link}"> ILinearGradientProps</a>` +
          `>`
        }`;
      } else {
        markupWithTypeLinks = type.name
          .split('|')
          .map((e: any) => {
            return e.trim();
          })
          .map((element: any) => {
            const MapValue =
              internalPropsMap[element] ||
              rnPropsMap[element] ||
              StylingPropsMap[element];

            const htmlSanatizedElem = element
              .replace(/\</g, '&lt;') //for <
              .replace(/\>/g, '&gt;'); //for >
            return `${
              MapValue
                ? `<a href="${MapValue.link}">${element}</a>`
                : htmlSanatizedElem
            }`;
          })
          .join(' | ');
      }
      // console.log(displayName, 'in code');
      if (
        parent &&
        (parent.name === `Interface${displayName}Props` ||
          parent.name === `I${displayName}Props`)
      ) {
        propExists = true;
        temp =
          temp +
          `<tr>
          <td>
            ${name}
          </td>
          <td>
              ${markupWithTypeLinks
                .replace(/[{]/g, '&#123;')
                .replace(/[}]/g, '&#125;')}
          </td>
          <td>
            ${description || '-'}
          </td>
          <td>
            ${defaultValue ? defaultValue.value : '-'}
          </td>
        </tr>`;
      }
    }

    return temp;
  };

  const templateString = template(props);

  return propExists
    ? `
  <table border="1" style={{color:"gray"}} isPropTable="true">
    <tr>
      <th>
        Name
      </th>
      <th>
        Type
      </th>
      <th>
        Description
      </th>
      <th>
        Default
      </th>
    </tr>
    ${templateString}
  </table>
  `
    : '';
};

const getPropTableFile = (pathArray: string[], version: string) => {
  const showStylingProps = true;
  const filePath =
    baseDirPath +
    path.resolve(
      '/versioned_repo/',
      version,
      'NativeBase',
      'src',
      'components',
      ...pathArray
    );
  // console.log(filePath, "filepath");
  const code = docgen.parse(filePath);
  return propTable(code, showStylingProps);

  // console.log(propTable(code, showStylingProps), "****hello******");
  // console.log(version);

  // const code = fs.readFileSync(
  //   baseDirPath +
  //     "/versioned_repo/" +
  //     version +
  //     "/NativeBase/example/storybook/stories/" +
  //     path.join(...pathArray),
  //   "utf-8"
  // );
  // const ast = parse(code, {
  //   sourceType: "module",
  //   plugins: ["jsx", "typescript"],
  // });
  // traverse(ast, {
  //   enter(path: any) {
  //     if (path.node.type === "ImportDeclaration") {
  //       path.remove();
  //     }
  //     if (path.node?.type === "ExportNamedDeclaration") {
  //       // console.log(path.node.declaration.declarations);
  //       const childDec = path.node.declaration;
  //       path.replaceWith(childDec);
  //       // console.log(path.node);
  //     }
  //     // if(path.node?.type ==="FunctionDeclaration"){
  //     //   console.log(path.node);
  //     // }
  //     // console.log(path.node);
  //   },
  // });
  // const output = generate(ast);

  // const result = prettier.format(code, {
  //   semi: false,
  //   parser: "babel",
  // });

  // return "```jsx isLive=true \n" + result + "\n```";

  // return "ye pagal h";
};

const getCodeFromStorybook = (pathArray: string[], version: string) => {
  // console.log(version);

  let code: string = fs.readFileSync(
    baseDirPath +
      '/versioned_repo/' +
      version +
      '/NativeBase/example/storybook/stories/' +
      (['3.1.x', '3.0.x'].includes(version) ? 'components/' : '') +
      path.join(...pathArray),
    'utf-8'
  );
  // const ast = parse(code, {
  //   sourceType: "module",
  //   plugins: ["jsx", "typescript"],
  // });
  // traverse(ast, {
  //   enter(path: any) {
  //     if (path.node.type === "ImportDeclaration") {
  //       path.remove();
  //     }
  //     if (path.node?.type === "ExportNamedDeclaration") {
  //       // console.log(path.node.declaration.declarations);
  //       const childDec = path.node.declaration;
  //       path.replaceWith(childDec);
  //       // console.log(path.node);
  //     }
  //     // if(path.node?.type ==="FunctionDeclaration"){
  //     //   console.log(path.node);
  //     // }
  //     // console.log(path.node);
  //   },
  // });
  // const output = generate(ast);
  // console.log(code);
  code = code.replace(/\?\./g, '.');
  let finalCode = babel.transformSync(code, {
    configFile: false,
    plugins: [[babelPlugin, { isTSX: true }]],
  }).code;

  const result = prettier.format(finalCode, {
    semi: false,
    parser: 'babel',
  });

  return '```jsx isLive=true \n' + result + '\n```';
};

export const getDocBySlug = async (filename: string, version: string) => {
  const ext: string = await getFileExtension(filename);

  let fileData = fs.readFileSync(
    baseDirPath + '/docs/' + filename + '.' + ext,
    'utf-8'
  );

  fileData = parseCodeBlock(fileData, version);
  fileData = parsePropTable(fileData, version);
  fileData = parseAdmonitions(fileData, version);
  fileData = parseHeadings(fileData, version);
  return fileData;
};

export const getSidebarJson = async (version: string) => {
  return JSON.parse(
    fs.readFileSync(baseDirPath + `/docs/${version}/sidebar.json`).toString()
  );
};
const iterateSidebar = (item: any, pages: any[]) => {
  if (item === undefined) {
    return -1;
  }
  if (item.id) {
    pages.push(item);
  } else if (item.pages) {
    for (let i = 0; i < item.pages.length; i++) {
      iterateSidebar(item.pages[i], pages);
    }
  }
  return 1;
};
export const getPages = (sidebar: any, filename: string) => {
  let pages: any[] = [];
  for (let i = 0; i < sidebar.sidebar.length; i++) {
    iterateSidebar(sidebar.sidebar[i], pages);
  }
  const fileIndex = pages.findIndex((item) => item.id === filename);
  let nextPage = fileIndex !== pages.length - 1 ? pages[fileIndex + 1] : null;
  let previousPage = fileIndex !== 0 ? pages[fileIndex - 1] : null;
  let nextPageIndex = fileIndex + 1;
  let previousPageIndex = fileIndex - 1;

  while (nextPage?.notVisibleInSidebar) {
    nextPage = nextPage !== null ? pages[nextPageIndex] : null;
    nextPageIndex++;
  }

  while (previousPage?.notVisibleInSidebar) {
    previousPage = previousPage !== null ? pages[previousPageIndex] : null;
    previousPageIndex--;
  }

  return {
    showToc: pages[fileIndex].showToc === false ? false : true,
    currentPage: pages[fileIndex],
    nextPage,
    previousPage,
  };
};
