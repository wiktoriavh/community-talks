import { createDOM } from '@builder.io/qwik/testing';

import { Button } from './Button';

describe('<Button />', () => {
  it('render', async () => {
    const { screen, render } = await createDOM();
    await render(<Button onClick$={() => console.log('')}>Alpha</Button>);
    expect(screen.querySelector('button')?.innerHTML).toContain('Alpha');
  });
});
