export function isLatestVersionSlug(version: string, versionList: string[]) {
  // if slug has no version or next version in params. eg: localhost/box or localhost/migration/button
  if (!versionList?.includes(version) && version !== "next") {
    return true;
  }
  return false;
}

export function isLatestVersion(version: string, versionList: string[]) {
  // if slug has no version or next version in params. eg: localhost/box or localhost/migration/button
  if (versionList[0] === version) {
    return true;
  }
  return false;
}
