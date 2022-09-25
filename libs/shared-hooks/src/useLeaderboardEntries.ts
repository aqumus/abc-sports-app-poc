import { matchService } from '@abc/match-service';
import { INITIAL_PAGINATED_RES, ReactQuery } from '@abc/shared-model';
import { useQuery } from '@tanstack/react-query';

export const useLeaderboardEntries = (matchId: string) => {
  return useQuery(
    [ReactQuery.LEADERBOARD_ENTRIES, matchId],
    () => matchService().getLeaderBoardEntries(matchId),
    { initialData: INITIAL_PAGINATED_RES }
  );
  // return { data: INITIAL_PAGINATED_RES, isLoading: false };
};
