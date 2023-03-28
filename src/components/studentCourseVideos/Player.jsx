import React from "react";
import validateUrl from "../../utils/validateUrl";

export default function Player({ url }) {
  const validUrl = validateUrl(url);
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
