import { BaseServiceParam } from '@abc/shared-model';
import { MatchService } from './match-service-types';
import { mockMatchService } from './match-service.mock';

// TODO Implement real service with backend API's
const _matchService: MatchService = mockMatchService;

export const matchService = (
  { mock = false }: BaseServiceParam = { mock: false }
): MatchService => {
  if (mock) {
    return mockMatchService;
  }
  return _matchService;
};
