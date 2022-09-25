import { renderWithQueryClientProvider } from '@abc/shared-components';

import FixturesWidget from './fixtures-widget';

describe('FixturesWidget', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithQueryClientProvider(<FixturesWidget />);
    expect(baseElement).toBeTruthy();
  });
});
