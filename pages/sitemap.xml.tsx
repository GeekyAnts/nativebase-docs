import directoryTree from "directory-tree";
import docsConfig from "../docs.config";
import { getFilePaths } from "../lib/docs";

export default function Sitemap() {
  return null;
}

export const getServerSideProps = async ({ res }: any) => {
  const baseDirPath = process.cwd();

  const tree = directoryTree(baseDirPath + "/" + docsConfig.docsEntryPoint);
  const allFilePaths = getFilePaths(tree);
  const versions = Object.keys(docsConfig.versionMap);
  // To remove canonical urls, removing the urls with the version number
  const filePaths = allFilePaths?.filter((filePath) => {
    let flag = true;
    [...versions, "next"].map((version) => {
      if (filePath.includes(version)) {
        flag = false;
      }
    });
    return flag;
  });
  // console.log({ ...filePaths });
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
       ${
         filePaths &&
         filePaths
           .map((url) => {
             return `
             <url>
               <loc>${docsConfig.DOCS_URL}/${url.split(".md")[0]}</loc>
               <lastmod>${new Date().toISOString()}</lastmod>
               <changefreq>weekly</changefreq>
               <priority>1.0</priority>
             </url>
           `;
           })
           .join("")
       }
     </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
