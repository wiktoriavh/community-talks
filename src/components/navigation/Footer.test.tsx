import { createDOM } from '@builder.io/qwik/testing';

import { Footer } from './Footer';

describe('<Footer />', () => {
  it('should render', async () => {
    const { screen, render } = await createDOM();
    await render(<Footer />);
    expect(screen.innerHTML).toContain('GitHub');
  });
});
