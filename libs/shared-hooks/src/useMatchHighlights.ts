import { MatchHighlightParam, matchService } from '@abc/match-service';
import { INITIAL_PAGINATED_RES, ReactQuery } from '@abc/shared-model';
import { useQuery } from '@tanstack/react-query';

export const useMatchHighlights = ({
  screenHeight,
  screenWidth,
}: MatchHighlightParam) => {
  return useQuery(
    [ReactQuery.MATCH_HIGHLIGHTS, screenHeight, screenWidth],
    () => matchService().getMatchHighlights({ screenHeight, screenWidth }),
    { initialData: INITIAL_PAGINATED_RES }
  );
  // return { data: INITIAL_PAGINATED_RES, isLoading: false };
};
