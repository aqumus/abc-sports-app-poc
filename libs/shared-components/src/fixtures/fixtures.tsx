import { Fixture } from '@abc/shared-model';
import { FixtureComponent } from './fixture-component';

/* eslint-disable-next-line */
export interface FixturesProps {
  fixtures: Fixture[];
}

export function Fixtures({ fixtures }: FixturesProps) {
  return (
    <div className="flex flex-nowrap space-x-4 overflow-x-auto w-full">
      {fixtures.map((fixture) => (
        <FixtureComponent key={fixture.id} {...fixture} />
      ))}
    </div>
  );
}
