import { renderWithQueryClientProvider } from '@abc/shared-components';
import MatchHighlightsWidget from './match-highlights-widget';

describe('MatchHighlightsWidget', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithQueryClientProvider(
      <MatchHighlightsWidget />
    );
    expect(baseElement).toBeTruthy();
  });
});
