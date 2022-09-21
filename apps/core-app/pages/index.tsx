import { FixturesWidget } from '@abc/fixtures-widget';
import { LeaderboardWidget } from '@abc/leaderboard-widget';
import { MatchHighlightsWidget } from '@abc/match-highlights-widget';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="bg-yellow-500 dark:bg-red-500">
      <FixturesWidget />
      <LeaderboardWidget />
      <MatchHighlightsWidget />
    </div>
  );
}

export default Index;
