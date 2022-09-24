import { Fixture, MatchHighlight, MatchParticipant } from '@abc/shared-model';

export type MatchHighlightParam = {
  since: Date;
  screenWidth: number;
  screenHeight: number;
};

export type PaginatedResponse<T> = {
  next: string;
  prev: string;
  results: T[];
  totalCount: number;
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
