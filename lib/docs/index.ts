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

export const getTOC = (file: string) => {
  const fileLines = file.split("\n");
  for (let i = 0; i < fileLines.length; i++) {
    if (fileLines[i]) {
      console.log("helo");
    }
  }
  console.log(fileLines);
  return { toc: "asb" };
};

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

  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i].substring(0, 4) == "path") {
      let code = getCodeFromStorybook(
        tempArray[i].split("\n")[0].slice(5).split(","),
        version
      );
      let temp1 = tempArray[i].split("```");
      temp1[0] = code;
      tempArray[i] = temp1.join("");
    }
  }
  return tempArray.join("");
};

const getCodeFromStorybook = (pathArray: string[], version: string) => {
  // console.log(version);

  const code = fs.readFileSync(
    baseDirPath +
      "/versioned_repo/" +
      version +
      "/NativeBase/example/storybook/stories/" +
      path.join(...pathArray),
    "utf-8"
  );
  const ast = parse(code, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });
  traverse(ast, {
    enter(path: any) {
      if (path.node.type === "ImportDeclaration") {
        path.remove();
      }
      if (path.node?.type === "ExportNamedDeclaration") {
        // console.log(path.node.declaration.declarations);
        const childDec = path.node.declaration;
        path.replaceWith(childDec);
        // console.log(path.node);
      }
      // if(path.node?.type ==="FunctionDeclaration"){
      //   console.log(path.node);
      // }
      // console.log(path.node);
    },
  });
  const output = generate(ast);

  console.log("AST", output.code);
  const result = prettier.format(output.code, {
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
