import React from "react";
import validYoutubeUrl from "../../utils/validYoutubeUrl";

export default function Player({ url }) {
  const validUrl = validYoutubeUrl(url);
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={validUrl ? url : null}
      title="Things I wish I knew as a Junior Web Developer - Sumit Saha - BASIS SoftExpo 2023"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
