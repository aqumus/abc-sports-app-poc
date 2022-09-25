import { renderWithQueryClientProvider } from '@abc/shared-components';
import LeaderboardWidget from './leaderboard-widget';

describe('LeaderboardWidget', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithQueryClientProvider(
      <LeaderboardWidget />
    );
    expect(baseElement).toBeTruthy();
  });
});
