export default function Robots() {
  return null;
}

export const getServerSideProps = async ({ res }: any) => {
  const stagingFileContent = `User-agent: *
  Disallow: /
`;
  const prodFileContent = `User-agent: *
  Allow: /
`;

  const robots =
    process.env.environment === "production"
      ? prodFileContent
      : stagingFileContent;

  res.setHeader("Content-Type", "text/plain");
  res.write(robots);
  res.end();

  return {
    props: {},
  };
};
