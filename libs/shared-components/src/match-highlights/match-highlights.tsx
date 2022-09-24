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
  thumbnailImageUrl,
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
        <video src={videoUrl}></video>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Image
          src={thumbnailImageUrl}
          width={150}
          height={150}
          alt={`${title} Video thumbnail`}
        />
        <div>
          <h2>{title}</h2>
          <span>{description}</span>
        </div>
      </div>
      <button onClick={toggleVideo}>Watch Highlights</button>
    </div>
  );
}

export function MatchHighlights({ highlights }: MatchHighlightsProps) {
  return (
    <div className="">
      {highlights.map((highlight) => (
        <MatchHighlightComponent {...highlight} />
      ))}
    </div>
  );
}

export default MatchHighlights;
