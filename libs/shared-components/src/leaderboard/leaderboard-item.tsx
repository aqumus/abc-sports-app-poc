import { MatchParticipant } from '@abc/shared-model';
import Image from 'next/image';

export function LeaderBoardItem({
  driverImageUrl,
  driverName,
  team,
  position,
  brandIconUrl,
  manufacturer,
}: MatchParticipant) {
  return (
    <li className="flex relative items-center border-b-2 last:border-b-0 border-slate-300 dark:border-slate-600 px-4 py-2 md:py-4">
      <span className="top-0 left-0 text-4xl mr-6">#{position}</span>
      <Image
        className="rounded-full"
        src={driverImageUrl}
        width={60}
        height={55}
        layout="fixed"
        alt={`${driverName} image`}
      ></Image>
      <div className="grow ml-4">
        <h3 className="grow md:text-lg">{driverName}</h3>
        <span className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
          {team}
        </span>
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
