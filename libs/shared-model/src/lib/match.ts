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
  title: string;
  trackName: string;
  trackType: string;
  trackLength: number;
  location: string;
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
