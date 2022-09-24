import { INITIAL_MATCH_HIGHLIGHT_PARAM } from '@abc/match-service';
import { Loader, MatchHighlights } from '@abc/shared-components';
import { useMatchHighlights } from '@abc/shared-hooks';

/* eslint-disable-next-line */
export interface MatchHighlightsWidgetProps {}

export function MatchHighlightsWidget(props: MatchHighlightsWidgetProps) {
  const { data, isLoading } = useMatchHighlights(
    window
      ? { screenHeight: window.innerHeight, screenWidth: window.innerWidth }
      : INITIAL_MATCH_HIGHLIGHT_PARAM
  );
  return (
    <div id="match-highlight-widget" className="bg-green-500 p-2 font-mono">
      {isLoading ? <Loader /> : <MatchHighlights highlights={data.results} />}
    </div>
  );
}

export default MatchHighlightsWidget;
