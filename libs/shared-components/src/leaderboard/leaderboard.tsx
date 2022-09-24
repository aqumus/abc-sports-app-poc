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
    <li>
      <span>#{position}</span>
      <div>
        <Image
          src={driverImageUrl}
          width={75}
          height={75}
          alt={`${driverName} image`}
        ></Image>
        <span>{driverName}</span>
      </div>
      <div>
        <span>{team}</span>
        <Image src={brandIconUrl} alt={manufacturer} title={manufacturer} />
      </div>
    </li>
  );
}

export function Leaderboard({ participants }: LeaderboardProps) {
  return (
    <div className="">
      {participants.map((participant) => (
        <LeaderBoardItem {...participant} />
      ))}
    </div>
  );
}
