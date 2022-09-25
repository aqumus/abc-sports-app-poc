import { MatchHighlight } from '@abc/shared-model';
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

  return (
    <div className="bg-slate-800 flex flex-col p-6 min-w-40 justify-between relative">
      {displayed ? (
        <div>
          <button
            className="absolute top-2 right-2 cursor-pointer text-slate-100 w-[30px] h-[30px]"
            onClick={toggleVideo}
          >
            &#10006;
          </button>
          <iframe
            className="mt-4"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <>
          <h2 className="text-xl">{title}</h2>
          <span className="text-slate-400 text-sm mt-4">{description}</span>
          <button className="bg-slate-700 m-4 p-2 " onClick={toggleVideo}>
            Watch Highlights
          </button>
        </>
      )}
    </div>
  );
}

export function MatchHighlights({ highlights }: MatchHighlightsProps) {
  return (
    <div className="flex flex-nowrap space-x-4 overflow-x-auto w-full">
      {highlights.map((highlight) => (
        <MatchHighlightComponent key={highlight.id} {...highlight} />
      ))}
    </div>
  );
}

export default MatchHighlights;
