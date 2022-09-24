import { render } from '@testing-library/react';

import MatchHighlightsWidget from './match-highlights-widget';

describe('MatchHighlightsWidget', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MatchHighlightsWidget />);
    expect(baseElement).toBeTruthy();
  });
});
