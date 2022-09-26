import { MatchHighlight } from '@abc/shared-model';
import { useCallback, useState } from 'react';

export function MatchHighlightComponent({
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
    <div className="bg-slate-100 dark:bg-slate-800 flex flex-col grow p-6 min-w-fit justify-between relative">
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
          <span className="text-slate-500 dark:text-slate-400 text-sm mt-4 w-60">
            {description}
          </span>
          <button
            className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 hover:dark:bg-slate-600 m-auto mt-8 p-2 w-20"
            onClick={toggleVideo}
          >
            Watch
          </button>
        </>
      )}
    </div>
  );
}
