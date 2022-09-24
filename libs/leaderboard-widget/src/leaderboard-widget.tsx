import { Leaderboard, Loader } from '@abc/shared-components';
import { useLeaderboardEntries } from '@abc/shared-hooks';

/* eslint-disable-next-line */
export interface LeaderboardWidgetProps {}

export function LeaderboardWidget(props: LeaderboardWidgetProps) {
  const { data, isLoading } = useLeaderboardEntries('1');
  return (
    <div
      id="leaderboard-widget"
      className="bg-orange-500 p-2 font-mono dark:bg-black"
    >
      {isLoading ? <Loader /> : <Leaderboard participants={data.results} />}
      <h1>Welcome to LeaderboardWidget!</h1>
    </div>
  );
}

export default LeaderboardWidget;
