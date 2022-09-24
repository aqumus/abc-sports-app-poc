import { render } from '@testing-library/react';

import FixturesWidget from './fixtures-widget';

describe('FixturesWidget', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FixturesWidget />);
    expect(baseElement).toBeTruthy();
  });
});
