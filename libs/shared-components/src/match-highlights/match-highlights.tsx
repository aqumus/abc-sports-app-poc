import { MatchHighlight } from '@abc/shared-model';
import Image from 'next/image';
import { useCallback, useState } from 'react';

/* eslint-disable-next-line */
export interface MatchHighlightsProps {
  highlights: MatchHighlight[];
}

function MatchHighlightComponent({
  title,
  description,
  videoUrl,
}: MatchHighlight) {
  const [videoDetails, setVideoDetails] = useState({
    displayed: false,
    paused: false,
    currentVideoTime: null,
  });
  const { displayed } = videoDetails;

  const toggleVideo = useCallback(() => {
    setVideoDetails({ ...videoDetails, displayed: !displayed });
  }, [videoDetails, displayed]);

  if (displayed) {
    return (
      <div>
        <button onClick={toggleVideo}>Close</button>
        <iframe
          width="560"
          height="315"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
      <button onClick={toggleVideo}>Watch Highlights</button>
    </div>
  );
}

export function MatchHighlights({ highlights }: MatchHighlightsProps) {
  return (
    <div className="">
      {highlights.map((highlight) => (
        <MatchHighlightComponent key={highlight.id} {...highlight} />
      ))}
    </div>
  );
}

export default MatchHighlights;
