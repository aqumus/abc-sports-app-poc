import { useQuery } from '@tanstack/react-query';
import { matchService } from '@abc/match-service';
import { INITIAL_PAGINATED_RES, ReactQuery } from '@abc/shared-model';

export const useFixtures = () => {
  return useQuery([ReactQuery.FIXTURES], matchService().getFixtures, {
    initialData: INITIAL_PAGINATED_RES,
  });
  // return { data: INITIAL_PAGINATED_RES, isLoading: false };
};
