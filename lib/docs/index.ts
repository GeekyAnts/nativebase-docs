import fs from "fs";
import DirectoryTree from "directory-tree";
let filePaths: string[] = [];
import versions from "../../versions.json";
const baseDirPath = process.cwd();
import path from "path";
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const prettier = require("prettier");
const docgen = require("react-docgen-typescript");
const { internalPropsMap, rnPropsMap, StylingPropsMap } = require("./propsMap");
import { useColorModeValue, useColorMode, ColorMode } from "native-base";

const getHeadingLevel = (line: string) => {
  return {
    level: line.split("#").filter((val) => val === "").length - 1,
    id: line
      .split("#")
      .filter((val) => val !== "")[0]
      .trim()
      .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
      .replace(/ /g, "-")
      .toLowerCase(),
    title: line
      .split("#")
      .filter((val) => val !== "")[0]
      .trim(),
  };
};

export const getTOCArray = (file: string) => {
  const fileLines = file
    .split("\n")
    .filter((line: string) => (line.substring(0, 1) === "#" ? true : false));
  let toc = {};
  const headingLevelMap = fileLines.map((line: string) =>
    getHeadingLevel(line)
  );
  // console.log(headingLevelMap);
  return headingLevelMap;
};

export const getFilePaths = (
  tree: DirectoryTree.DirectoryTree
  // index: number = 0,
): string[] | undefined => {
  if (!tree.children) {
    let path = tree.path.split("/docs/")[1];
    let slugPath = "";
    if (path.split("/")[0] === versions[0]) {
      slugPath = path.split(`${versions[0]}/`)[1];
    }
    if (path.match(/\.mdx?$/)) {
      filePaths = [...filePaths, path, slugPath];
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
  const slugPathArray = slug.split("/");
  let filename = slugPathArray[slugPathArray.length - 1];
  let slugPath = "";
  for (let i = 0; i < slugPathArray.length - 1; i++) {
    slugPath = slugPath + slugPathArray[i] + "/";
  }
  const files = fs.readdirSync(baseDirPath + "/docs/" + slugPath);
  // console.log("files", files);
  // console.log("filename", filename);
  for (let i = 0; i < files.length; i++) {
    if (files[i].split(".")[0] === filename) {
      return files[i].split(".")[1];
    }
  }
  return "file_not_found";
};

export const parseCodeBlock = (fileData: any, version: string) => {
  const tempArray = fileData.split("```ComponentSnackPlayer ");
  // console.log(tempArray);

  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i].substring(0, 4) == "path") {
      let code = getCodeFromStorybook(
        tempArray[i].split("\n")[0].slice(5).split(","),
        version
      );
      // console.log(tempArray[i]);
      let temp1 = tempArray[i].split("```");
      // console.log(temp1);
      temp1[0] = code;
      tempArray[i] = temp1.join("```");
    }
  }
  return tempArray.join("");
};
export const parsePropTable = (fileData: any, version: string) => {
  const tempArray = fileData.split("```ComponentPropTable ");
  // console.log(tempArray);

  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i].substring(0, 4) == "path") {
      let code = getPropTableFile(
        tempArray[i]
          .split("\n")[0]
          .slice(5)
          .split(" showStylingProps")[0]
          .trim()
          .split(","),
        version
      );
      // console.log(tempArray[i]);
      let position = tempArray[i].search("```");
      let res = code + tempArray[i].substring(position + 3);
      tempArray[i] = res;
    }
  }
  return tempArray.join("");
};

const propTable = (typesArray: any, showStylingProps: boolean) => {
  // console.log(typesArray, "typess");
  return typesArray.map((component: any) => {
    return `${templateGenerator(component)} ${implementSection(
      component,
      showStylingProps
    )}`;
  });
};

const implementsTemplateGenerator = (set: any) => {
  let temp = "";
  const arr = [...set];
  [...arr].map((item, i) => {
    temp = temp + item + (i === arr.length - 1 ? "" : ", ");
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
        MapValue.link.startsWith("http")
          ? `<a href="${MapValue.link}"><code>${MapValue.name}</code></a>`
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
    let temp = "";
    for (let prop in propsObject) {
      const { name, description, type, parent, defaultValue } =
        propsObject[prop];
      let markupWithTypeLinks;
      if (type.name.includes("ILinearGradientProps")) {
        markupWithTypeLinks = `${
          `ResponsiveValue&lt;` +
          `<a href="${StylingPropsMap["backgroundColor"].link}">ColorProps </a>` +
          `\|` +
          `<a href="${internalPropsMap["ILinearGradientProps"].link}"> ILinearGradientProps</a>` +
          `>`
        }`;
      } else {
        markupWithTypeLinks = type.name
          .split("|")
          .map((e: any) => {
            return e.trim();
          })
          .map((element: any) => {
            const MapValue =
              internalPropsMap[element] ||
              rnPropsMap[element] ||
              StylingPropsMap[element];

            const htmlSanatizedElem = element
              .replace(/\</g, "&lt;") //for <
              .replace(/\>/g, "&gt;"); //for >
            return `${
              MapValue
                ? `<a href="${MapValue.link}">${element}</a>`
                : htmlSanatizedElem
            }`;
          })
          .join(" | ");
      }
      if (parent && parent.name === `I${displayName}Props`) {
        propExists = true;
        temp =
          temp +
          `<tr>
          <td>
            ${name}
          </td>
          <td>
              ${markupWithTypeLinks}
          </td>
          <td>
            ${description || "-"}
          </td>
          <td>
            ${defaultValue ? defaultValue.value : "-"}
          </td>
        </tr>`;
      }
    }

    return temp;
  };

  const templateString = template(props);
  return propExists
    ? `
  <table border="1" style={{color:"gray"}}>
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
    : "";
};

const getPropTableFile = (pathArray: string[], version: string) => {
  const showStylingProps = true;
  const filePath =
    baseDirPath +
    path.resolve(
      "/versioned_repo/",
      version,
      "NativeBase",
      "src",
      "components",
      ...pathArray
    );
  // console.log(filePath, "filepath");
  const code = docgen.parse(filePath);
  // console.log(code, "in code");
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

  const code = fs.readFileSync(
    baseDirPath +
      "/versioned_repo/" +
      version +
      "/NativeBase/example/storybook/stories/" +
      (["3.1.x", "3.0.x"].includes(version) ? "components/" : "") +
      path.join(...pathArray),
    "utf-8"
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

  const result = prettier.format(code, {
    semi: false,
    parser: "babel",
  });

  return "```jsx isLive=true \n" + result + "\n```";
};

export const getDocBySlug = async (filename: string, version: string) => {
  const ext: string = await getFileExtension(filename);

  let fileData = fs.readFileSync(
    baseDirPath + "/docs/" + filename + "." + ext,
    "utf-8"
  );

  fileData = parseCodeBlock(fileData, version);
  fileData = parsePropTable(fileData, version);
  // console.log(fileData);

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
  return {
    currentPage: pages[fileIndex],
    nextPage: fileIndex !== pages.length - 1 ? pages[fileIndex + 1] : null,
    previousPage: fileIndex !== 0 ? pages[fileIndex - 1] : null,
  };
};
