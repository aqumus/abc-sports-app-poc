import { render } from '@testing-library/react';

import LeaderboardWidget from './leaderboard-widget';

describe('LeaderboardWidget', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LeaderboardWidget />);
    expect(baseElement).toBeTruthy();
  });
});
