import { createDOM } from '@builder.io/qwik/testing';

import { CommonCard } from './CommonCard';

describe('<CommonCard />', () => {
  it('should render', async () => {
    const { screen, render } = await createDOM();
    await render(<CommonCard title="Hello World"></CommonCard>);
    expect(screen.innerHTML).toContain('Hello World');
  });

  it('should render with content', async () => {
    const { screen, render } = await createDOM();
    await render(
      <CommonCard title="Hello World">
        <button>I am a button</button>
      </CommonCard>
    );
    expect(screen.querySelector('button')).toBeTruthy();
    expect(screen.querySelector('button')?.innerHTML).toBe('I am a button');
  });
});
