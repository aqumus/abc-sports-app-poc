import { Fixture } from '@abc/shared-model';

/* eslint-disable-next-line */
export interface FixturesProps {
  fixtures: Fixture[];
}

function FixtureComponent({
  season,
  championship,
  match: { totalLaps, trackLength, trackName, location },
}: Fixture) {
  return (
    <div>
      <span>Season: {season}</span>
      <span>Championship: {championship}</span>
      <hr></hr>
      <div>{trackName}</div>
      <div>
        {location} - {totalLaps}/{trackLength}
      </div>
    </div>
  );
}

export function Fixtures({ fixtures }: FixturesProps) {
  return (
    <div className="">
      {fixtures.map((fixture) => (
        <FixtureComponent key={fixture.id} {...fixture} />
      ))}
    </div>
  );
}
