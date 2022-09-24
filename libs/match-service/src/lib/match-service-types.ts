export type MatchHighlight = {
  id: string;
  videoUrl: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnailImageUrl: string;
};

export type MatchLap = {
  time: number;
};

export type MatchParticipant = {
  id: string;
  matchId: string;
  team: string;
  manufacturer: string;
  driverName: string;
  driverImageUrl: string;
  brandIconUrl: string;
  laps: ReadonlyArray<MatchLap>;
  position: number;
};

export type MatchDetails = {
  id: string;
  trackType: string;
  trackLength: number;
  country: string;
  city: string;
  totalLaps: number;
  participants: MatchParticipant[];
  scheduledAt: string;
  finishedAt: string;
};

export type Fixture = {
  id: string;
  matchId: string;
  season: string;
  championship: string;
  match: MatchDetails;
};

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
