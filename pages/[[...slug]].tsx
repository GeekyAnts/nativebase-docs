import Layout from "../layouts";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import {
  getDocBySlug,
  getFilePaths,
  getSidebarJson,
  getTOCArray,
  getPages,
} from "../lib/docs";
import DirectoryTree from "directory-tree";
import versions from "../versions.json";
import config from "../docs.config";
import React from "react";

export default function Doc({
  meta,
  mdxSource,
  currentVersion,
  sidebar,
  ...props
}: any) {
  return (
    <Layout
      version={currentVersion}
      sidebar={sidebar}
      versionList={versions}
      meta={meta}
      {...props}
    >
      {mdxSource}
    </Layout>
  );
}

// Checks if the requested route is of next version or not.
function isNextVersion(slug: string) {
  if (!versions.includes(slug)) {
    return true;
  }
  return false;
}
function isLatestVersion(slug: string) {
  // if slug has no version or next version in params. eg: localhost/box or localhost/migration/button
  if (!versions.includes(slug) && slug !== "next") {
    return true;
  }
  return false;
}
function isValidVersion(version: string) {
  // if slug has no version or next version in params. eg: localhost/box or localhost/migration/button
  if (versions.includes(version) || version === "next") {
    return true;
  }
  return false;
}
export async function getStaticProps({ params }: any) {
  // const baseDirPath = process.cwd();
  // check if nested path
  // parse version and id
  // search for the file with the id and retrieve the data. OR add path of the file when the version is created to the json object.

  //check if route is for index slug.
  let isIndexSlug = false;
  let indexSlugVersion = "";
  // if route is versioned index slug like: docs.nativebase.io/3.2.1 or docs.nativebase.io/next

  if (
    params &&
    params.slug &&
    params.slug.length === 1 &&
    isValidVersion(params.slug[0])
  ) {
    isIndexSlug = true;
    indexSlugVersion = params.slug[0];
  }
  // if route is index slug i.e. docs.nativebase.io/
  if (Object.keys(params).length === 0) {
    isIndexSlug = true;
    indexSlugVersion = versions[0];
  }

  let filename = isIndexSlug
    ? `${indexSlugVersion}/${config.indexSlugFileName}` //
    : isLatestVersion(params.slug[0])
    ? `${versions[0]}/` + path.join(...params.slug)
    : path.join(...params.slug);
  // console.log('filename', filename);

  if (filename.includes(".md")) {
    filename = filename.split(".md")[0];
  }
  let componentName = filename.split("/").pop();
  let youtubeEmbedd = config.componentOfTheWeek[componentName ?? ""] ?? "";

  const currentVersion = isIndexSlug
    ? indexSlugVersion
    : isLatestVersion(params.slug[0])
    ? versions[0]
    : params.slug[0];
  // console.log("currentVersion", currentVersion);
  let sidebar = await getSidebarJson(currentVersion);
  // console.log("sidebar", sidebar.sidebar);
  const markdownWithMeta = await getDocBySlug(filename, currentVersion);

  const { data: frontMatter, content } = matter(markdownWithMeta);
  // console.log("frontmatter", frontMatter);
  const filenameWithOutVersionArray = filename.split("/");
  filenameWithOutVersionArray.splice(0, 1); // removed the version

  const { showToc, ...pages } = getPages(
    sidebar,
    path.join(...filenameWithOutVersionArray)
  );

  const mdxSource = await serialize(content);
  const toc = getTOCArray(markdownWithMeta);

  return {
    props: {
      frontMatter,
      mdxSource,
      currentVersion,
      sidebar: sidebar.sidebar,
      tocArray: toc,
      pages,
      showToc,
      youtubeEmbedd,
    },
  };
}

export async function getStaticPaths() {
  // create paths using id present in version json

  const baseDirPath = process.cwd();
  const tree = DirectoryTree(baseDirPath + "/" + config.docsEntryPoint);
  // console.log("tree", tree);
  const filePaths = getFilePaths(tree);
  // add versiond index page slug paths
  versions.map((version) => {
    filePaths?.push(version);
  });
  filePaths?.push("next");
  // console.log("filepaths", ...filePaths);
  let paths: any = [];
  filePaths?.map((filename) => {
    let slug = filename.split(".md")[0].split("/");
    // console.log(slug.split("/"));
    // console.log(slugWithFileExt);

    paths.push({
      params: {
        slug: slug,
      },
    });
  });

  // console.log('paths', ...paths);

  return {
    paths,
    fallback: false,
  };
}
