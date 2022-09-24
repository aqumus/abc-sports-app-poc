import { dehydrate, QueryClient } from '@tanstack/react-query';
import { FixturesWidget } from '@abc/fixtures-widget';
import { LeaderboardWidget } from '@abc/leaderboard-widget';
import { MatchHighlightsWidget } from '@abc/match-highlights-widget';
import { matchService, PaginatedResponse } from '@abc/match-service';
import { Fixture } from '@abc/shared-model';

const matchServiceInstance = matchService();

async function prefetchIndexSportsAppData(queryClient: QueryClient) {
  await queryClient.prefetchQuery(
    ['fixtures'],
    matchServiceInstance.getFixtures
  );
  await queryClient.prefetchQuery(['matchHighlights'], () =>
    matchServiceInstance.getMatchHighlights({
      screenWidth: 1366,
      screenHeight: 768,
    })
  );

  const data = queryClient.getQueryData<PaginatedResponse<Fixture>>([
    'fixtures',
  ]);
  const firstMatchId = data?.results[0].matchId;
  if (firstMatchId) {
    await queryClient.prefetchQuery(['leaderboardEntries', firstMatchId], () =>
      matchServiceInstance.getLeaderBoardEntries(firstMatchId)
    );
  }
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await prefetchIndexSportsAppData(queryClient);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export function Index() {
  return (
    <div className="bg-yellow-500 dark:bg-red-500">
      <FixturesWidget />
      <LeaderboardWidget />
      <MatchHighlightsWidget />
    </div>
  );
}

export default Index;
