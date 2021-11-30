import fs from "fs";
import DirectoryTree from "directory-tree";
let filePaths: string[] = [];
import versions from "../../versions.json";
const baseDirPath = process.cwd();

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

export const getFileExtenstion = async (slug: string) => {
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

export const getDocBySlug = async (filename: string) => {
  const extenstion: string = await getFileExtenstion(filename);

  return fs.readFileSync(
    baseDirPath + "/docs/" + filename + "." + extenstion,
    "utf-8"
  );
};

export const getSidebarJson = async (version: string) => {
  return JSON.parse(
    fs.readFileSync(baseDirPath + `/docs/${version}/sidebar.json`).toString()
  );
};
