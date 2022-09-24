import { render } from '@testing-library/react';

import { Fixtures } from './fixtures';

describe('Fixtures', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Fixtures fixtures={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
