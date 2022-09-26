import { MatchHighlight } from '@abc/shared-model';
import { MatchHighlightComponent } from './match-highlights-component';

/* eslint-disable-next-line */
export interface MatchHighlightsProps {
  highlights: MatchHighlight[];
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
