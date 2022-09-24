import { MatchHighlightParam, MatchService } from './match-service-types';
import { mockFixtures, mockMatches, mockMatchHighlights } from './mocks';

async function getMatchHighlights(highlightParam: MatchHighlightParam) {
  return {
    next: '',
    prev: '',
    results: mockMatchHighlights,
    totalCount: mockMatchHighlights.length,
  };
}

async function getFixtures() {
  return {
    next: '',
    prev: '',
    results: mockFixtures,
    totalCount: mockFixtures.length,
  };
}

async function getLeaderBoardEntries(matchId: string) {
  const match = mockMatches.find(({ id }) => id === matchId);
  if (!match) {
    return Promise.reject(`No Match found for matchId=${matchId}`);
  }
  return {
    next: '',
    prev: '',
    results: match.participants,
    totalCount: match.participants.length,
  };
}

export function mockMatchService(): MatchService {
  return {
    getMatchHighlights,
    getFixtures,
    getLeaderBoardEntries,
  };
}
