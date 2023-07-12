import { createDOM } from '@builder.io/qwik/testing';

import { CardTitle } from './CardTitle';

describe('<CardTitle />', () => {
  it('should render with content', async () => {
    const { screen, render } = await createDOM();
    await render(<CardTitle>Hello World</CardTitle>);
    expect(screen.innerHTML).toContain('Hello World');
  });
});
