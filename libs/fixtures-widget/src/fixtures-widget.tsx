import { Fixtures, Loader } from '@abc/shared-components';
import { useFixtures } from '@abc/shared-hooks';
import { Fixture } from '@abc/shared-model';

/* eslint-disable-next-line */
export interface FixturesWidgetProps {}

export function FixturesWidget(props: FixturesWidgetProps) {
  const { data, isLoading } = useFixtures();
  return (
    <div
      id="fixtures-widget"
      className="bg-blue-500 p-2 font-mono hover:bg-purple-200"
    >
      {isLoading ? <Loader /> : <Fixtures fixtures={data?.results} />}
    </div>
  );
}

export default FixturesWidget;
