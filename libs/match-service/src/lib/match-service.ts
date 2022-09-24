import { MatchService } from './match-service-types';
import { mockMatchService } from './match-service.mock';

export function matchService(): MatchService {
  // TODO Implement real service with backend API's
  return mockMatchService();
}
