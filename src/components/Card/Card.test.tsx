import { createDOM } from '@builder.io/qwik/testing';

import { Card } from './Card';

describe('<Card />', () => {
  it('should render title and content', async () => {
    const { screen, render } = await createDOM();
    await render(
      <Card>
        <span q:slot="title">Testing</span>Hello World
      </Card>
    );
    expect(screen.innerHTML).toContain('Hello World');
    expect(screen.querySelector('span')?.innerHTML).toContain('Testing');
  });
});
