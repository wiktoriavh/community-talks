import { createDOM } from '@builder.io/qwik/testing';

import { ButtonHref } from './ButtonHref';

describe('<ButtonHref />', () => {
  it('render', async () => {
    const { screen, render } = await createDOM();
    await render(<ButtonHref href="#beta">Alpha</ButtonHref>);
    expect(screen.querySelector('a')).toBeTruthy();
    // check href attribute
    expect(screen.querySelector('a')?.getAttribute('href')).toBe('#beta');
  });
});
