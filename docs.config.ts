interface configType {
  indexSlugFileName: string;
  docsEntryPoint: string;
  REPO_BRANCH: string;
  REPO_LINK: string;
}

export const config: configType = {
  indexSlugFileName: "getting-started", // please remember this file should be present in all you versions
  docsEntryPoint: "docs",
  REPO_BRANCH: "master",
  REPO_LINK: "https://github.com/GeekyAnts/NativeBase",
};
