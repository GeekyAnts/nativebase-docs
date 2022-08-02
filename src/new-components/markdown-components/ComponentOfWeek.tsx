import { Box } from "native-base";

export function ComponentOfTheWeek({
  youtubeEmbedd,
}: {
  youtubeEmbedd?: string;
}) {
  return youtubeEmbedd ? (
    <Box shadow={6} rounded="8" overflow="hidden">
      <iframe
        width="100%"
        height="315"
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
