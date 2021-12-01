import versions from "../../versions.json";
export function isLatestVersionSlug(version: string) {
  // if slug has no version or next version in params. eg: localhost/box or localhost/migration/button
  if (!versions?.includes(version) && version !== "next") {
    return true;
  }
  return false;
}

export function isLatestVersion(version: string) {
  // if slug has no version or next version in params. eg: localhost/box or localhost/migration/button
  if (versions[0] === version) {
    return true;
  }
  return false;
}
