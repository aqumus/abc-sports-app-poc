import { MatchParticipant } from '@abc/shared-model';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface LeaderboardProps {
  participants: MatchParticipant[];
}

function LeaderBoardItem({
  driverImageUrl,
  driverName,
  team,
  position,
  brandIconUrl,
  manufacturer,
}: MatchParticipant) {
  return (
    <li className="flex relative items-center border-b-2 last:border-b-0 dark:border-slate-500 px-4 md:pr-8 py-4">
      <span className="top-0 left-0 text-4xl mr-6">#{position}</span>
      <Image
        className="rounded-full"
        src={driverImageUrl}
        width={70}
        height={70}
        layout="fixed"
        alt={`${driverName} image`}
      ></Image>
      <div className="grow ml-4">
        <h3 className="grow text-lg">{driverName}</h3>
        <span className="dark:text-slate-400">{team}</span>
      </div>
      <Image
        src={brandIconUrl}
        alt={manufacturer}
        title={manufacturer}
        width={50}
        height={50}
        layout="fixed"
      />
    </li>
  );
}

export function Leaderboard({ participants }: LeaderboardProps) {
  return (
    <ul className="bg-slate-800 mb-8">
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
