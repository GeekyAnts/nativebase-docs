import Layout from "../layouts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { getDocBySlug, getFilePaths, getFileExtenstion } from "../lib/docs";
import DirectoryTree from "directory-tree";
import versions from "../versions.json";

export default function Doc({ meta, mdxSource, currentVersion }: any) {
  return (
    <Layout version={currentVersion} versionList={versions} meta={meta}>
      {mdxSource}
    </Layout>
  );
}

// Checks if the requested route is of next version or not.
function isNextVersion(slug: string[]) {
  if (!versions.includes(slug[0])) {
    return true;
  }
  return false;
}

export async function getStaticProps({ params }: any) {
  const filename = isNextVersion(params.slug)
    ? "next/" + path.join(...params.slug)
    : path.join(...params.slug);
  // console.log("filename", filename);
  const currentVersion = isNextVersion(params.slug) ? "/" : params.slug[0];

  const markdownWithMeta = await getDocBySlug(filename);
  const { data: frontMatter, content } = matter(markdownWithMeta);
  console.log("frontmatter", frontMatter);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug: params.slug,
      mdxSource,
      currentVersion,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync(__dirname.slice(0, -18) + "pages/docs");
  const tree = DirectoryTree(__dirname.slice(0, -18) + "pages/docs");
  // console.log("tree", tree);
  const filePaths = getFilePaths(tree);
  // console.log("filepaths", ...filePaths);

  const paths = filePaths?.map((filename) => {
    let slug = filename.split(".md")[0].split("/");
    // console.log(slug.split("/"));

    return {
      params: {
        slug: slug,
      },
    };
  });

  // console.log("paths", ...paths);

  return {
    paths,
    fallback: false,
  };
  // const paths = files.map(filename => ({
  //   params: {
  //     slug: filename.replace('.mdx', '')
  //   }
  // }))
  // return {
  //   paths,
  //   fallback: false
  // }
}
