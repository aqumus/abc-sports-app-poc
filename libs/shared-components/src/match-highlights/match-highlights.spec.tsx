import { render } from '@testing-library/react';

import MatchHighlights from './match-highlights';

describe('MatchHighlights', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MatchHighlights />);
    expect(baseElement).toBeTruthy();
  });
});
