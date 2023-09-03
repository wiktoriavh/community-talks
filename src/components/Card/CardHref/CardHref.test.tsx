import { createDOM } from '@builder.io/qwik/testing';

import { CardHref } from './CardHref';

describe('<CardHref />', () => {
  it('render', async () => {
    const { screen, render } = await createDOM();
    await render(
      <CardHref
        href="https://discord.gg/web"
        styling="flex gap-4 justify-center items-center font-heading font-bold text-lg bg-primary-500 hover:bg-primary-600 text-black">
        Join our Discord Community
      </CardHref>
    );
    expect(screen.querySelector('a')).toBeTruthy();
    // check if text is rendered
    expect(screen.querySelector('a')?.textContent).toBe(
      'Join our Discord Community'
    );
  });
});
