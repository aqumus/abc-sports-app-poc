import { Fixture } from '@abc/shared-model';

export function FixtureComponent({
  championship,
  season,
  match: { title, totalLaps, trackLength, trackName, location },
}: Fixture) {
  return (
    <div className=" bg-slate-100 dark:bg-slate-800 flex flex-col p-6 grow min-w-fit justify-between">
      <div className="flex flex-col">
        <h3 className="text-xl">{championship || title}</h3>
        <span className="text-lg">{season}</span>
        <span>{trackName}</span>
      </div>
      <div>
        <div className="text-slate-600 dark:text-slate-400 mt-8">
          {totalLaps} laps / {trackLength} miles
        </div>
        <div className=" text-slate-600 dark:text-slate-400 mt-2">
          {location}
        </div>
      </div>
    </div>
  );
}
