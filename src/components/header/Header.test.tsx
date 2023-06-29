import { createDOM } from '@builder.io/qwik/testing';

import { Header } from './Header';

describe('header', () => {
  it('passes', async () => {
    const { screen, render } = await createDOM();
    await render(<Header />);
    expect(screen.innerHTML.includes('Docs')).toBeTruthy();
  });
});
