import { Leaderboard, Loader } from '@abc/shared-components';
import { useLeaderboardEntries } from '@abc/shared-hooks';

/* eslint-disable-next-line */
export interface LeaderboardWidgetProps {}

export function LeaderboardWidget(props: LeaderboardWidgetProps) {
  const { data, isLoading } = useLeaderboardEntries('1');
  return (
    <>
      <h2 id="leaderboard-widget" className="font-bold text-lg mb-4">
        <a href="#leaderboard-widget" className="cursor-pointer">
          Leaderboard
        </a>
      </h2>
      {isLoading ? <Loader /> : <Leaderboard participants={data.results} />}
    </>
  );
}

export default LeaderboardWidget;
