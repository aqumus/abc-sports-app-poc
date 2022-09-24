import {
  Fixture,
  MatchHighlight,
  MatchParticipant,
  PaginatedResponse,
} from '@abc/shared-model';

export type MatchHighlightParam = {
  screenWidth: number;
  screenHeight: number;
};

export const INITIAL_MATCH_HIGHLIGHT_PARAM: MatchHighlightParam = {
  screenHeight: 1366,
  screenWidth: 768,
};

export type MatchService = {
  getMatchHighlights(
    highlightParam: MatchHighlightParam
  ): Promise<PaginatedResponse<MatchHighlight>>;
  getFixtures(): Promise<PaginatedResponse<Fixture>>;
  getLeaderBoardEntries(
    matchId: string
  ): Promise<PaginatedResponse<MatchParticipant>>;
};
