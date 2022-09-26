import { dehydrate, QueryClient } from '@tanstack/react-query';
import { FixturesWidget } from '@abc/fixtures-widget';
import { LeaderboardWidget } from '@abc/leaderboard-widget';
import { MatchHighlightsWidget } from '@abc/match-highlights-widget';
import {
  INITIAL_MATCH_HIGHLIGHT_PARAM,
  matchService,
} from '@abc/match-service';
import { Fixture, PaginatedResponse, ReactQuery } from '@abc/shared-model';

async function prefetchIndexSportsAppData(queryClient: QueryClient) {
  const matchServiceInstance = matchService();

  await queryClient.prefetchQuery(
    [ReactQuery.FIXTURES],
    matchServiceInstance.getFixtures
  );
  await queryClient.prefetchQuery([ReactQuery.MATCH_HIGHLIGHTS], () =>
    matchServiceInstance.getMatchHighlights(INITIAL_MATCH_HIGHLIGHT_PARAM)
  );

  const data = queryClient.getQueryData<PaginatedResponse<Fixture>>([
    ReactQuery.FIXTURES,
  ]);
  const firstMatchId = data?.results[0].matchId;
  if (firstMatchId) {
    await queryClient.prefetchQuery(
      [ReactQuery.LEADERBOARD_ENTRIES, firstMatchId],
      () => matchServiceInstance.getLeaderBoardEntries(firstMatchId)
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
    <div className="flex flex-col md:flex-row-reverse px-8">
      <div className="md:basis-2/5 md:ml-8">
        <LeaderboardWidget />
      </div>
      <div className="flex flex-col grow md:w-9/12">
        <FixturesWidget />
        <MatchHighlightsWidget />
      </div>
    </div>
  );
}

export default Index;
