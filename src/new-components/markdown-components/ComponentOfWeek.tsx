import { Box } from "native-base";

export function ComponentOfTheWeek({
  youtubeEmbedd,
}: {
  youtubeEmbedd?: string;
}) {
  return youtubeEmbedd ? (
    <Box
      shadow={6}
      rounded="8"
      overflow="hidden"
      width="100%"
      height={["200", "325"]}
    >
      <iframe
        width="100%"
        height="100%"
        // @ts-ignore
        src={youtubeEmbedd}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Box>
  ) : null;
}
