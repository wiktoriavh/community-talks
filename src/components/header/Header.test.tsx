import { createDOM } from '@builder.io/qwik/testing';

import { Header } from './Header';

describe('<Header />', () => {
  it('should render', async () => {
    const { screen, render } = await createDOM();
    await render(<Header />);
    expect(screen.innerHTML).toContain('Docs');
  });
});
