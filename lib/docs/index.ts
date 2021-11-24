import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import DirectoryTree from "directory-tree";
import { useRouter, Router } from "next/router";
let filePaths: string[] = [];
export const getFilePaths = (
  tree: DirectoryTree.DirectoryTree
  // index: number = 0,
): string[] | undefined => {
  if (!tree.children) {
    let path = tree.path.split("pages/docs/")[1];
    if (path.substring(0, 4) === "next") {
      path = path.split("next/")[1];
    }
    if (path.match(/\.mdx?$/)) {
      filePaths = [...filePaths, path];
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
  const files = fs.readdirSync(
    __dirname.slice(0, -18) + "pages/docs/" + slugPath
  );
  console.log("files", files);
  console.log("filename", filename);
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
    __dirname.slice(0, -18) + "pages/docs/" + filename + "." + extenstion,
    "utf-8"
  );
};


