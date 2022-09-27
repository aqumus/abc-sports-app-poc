import { Fixtures, Loader } from '@abc/shared-components';
import { useFixtures } from '@abc/shared-hooks';

/* eslint-disable-next-line */
export interface FixturesWidgetProps {}

export function FixturesWidget(props: FixturesWidgetProps) {
  const { data, isLoading } = useFixtures();
  return (
    <>
      <h2 id="fixtures-widget" className="font-bold text-lg mb-4">
        <a href="#fixtures-widget" className="cursor-pointer">
          Match Fixtures
        </a>
      </h2>
      {isLoading ? <Loader /> : <Fixtures fixtures={data?.results} />}
    </>
  );
}

export default FixturesWidget;
