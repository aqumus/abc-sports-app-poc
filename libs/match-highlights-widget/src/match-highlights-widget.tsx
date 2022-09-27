import { INITIAL_MATCH_HIGHLIGHT_PARAM } from '@abc/match-service';
import { Loader, MatchHighlights } from '@abc/shared-components';
import { useMatchHighlights } from '@abc/shared-hooks';

/* eslint-disable-next-line */
export interface MatchHighlightsWidgetProps {}

export function MatchHighlightsWidget(props: MatchHighlightsWidgetProps) {
  const { data, isLoading } = useMatchHighlights(
    typeof window !== 'undefined'
      ? { screenHeight: window.innerHeight, screenWidth: window.innerWidth }
      : INITIAL_MATCH_HIGHLIGHT_PARAM
  );
  return (
    <>
      <h2 id="match-highlight-widget" className="font-bold text-lg mb-4 mt-12">
        <a href="#match-highlight-widget" className="cursor-pointer">
          Match Highlights
        </a>
      </h2>
      {isLoading ? <Loader /> : <MatchHighlights highlights={data.results} />}
    </>
  );
}

export default MatchHighlightsWidget;
