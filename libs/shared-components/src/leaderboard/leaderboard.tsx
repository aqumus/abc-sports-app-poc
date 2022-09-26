import { MatchParticipant } from '@abc/shared-model';
import { LeaderBoardItem } from './leaderboard-item';

/* eslint-disable-next-line */
export interface LeaderboardProps {
  participants: MatchParticipant[];
}

export function Leaderboard({ participants }: LeaderboardProps) {
  return (
    <ul className="bg-slate-100 dark:bg-slate-800 mb-8">
      {participants.map(({ matchId, position, driverName, ...otherProps }) => (
        <LeaderBoardItem
          key={matchId + position + driverName}
          matchId={matchId}
          position={position}
          driverName={driverName}
          {...otherProps}
        />
      ))}
    </ul>
  );
}
