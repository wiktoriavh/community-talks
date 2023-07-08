import { Heading } from '@/typography/Heading';
import { createDOM } from '@builder.io/qwik/testing';

const levels: (1 | 2 | 3 | 4 | 5 | 6)[] = [1, 2, 3, 4, 5, 6];

describe('<Heading />', () => {
  it('should render heading with text', async () => {
    const { screen, render } = await createDOM();

    await render(<Heading level={1}>Hello World</Heading>);

    expect(screen.querySelector('h1')).toBeTruthy();
    expect(screen.querySelector('h1')?.textContent).toBe('Hello World');
  });

  it('should render heading with another element', async () => {
    const { screen, render } = await createDOM();

    await render(
      <Heading level={1}>
        <a href="#">World Wide Web</a>
      </Heading>
    );

    expect(screen.querySelector('h1')).toBeTruthy();
    expect(screen.querySelector('h1 a')).toBeTruthy();
    expect(screen.querySelector('h1')?.textContent).toBe('World Wide Web');
  });

  it.each(levels)(
    'should render a heading with the correct level %i',
    async (level) => {
      const { screen, render } = await createDOM();

      await render(<Heading level={level}>Hello World</Heading>);

      expect(screen.querySelector(`h${level}`)).toBeTruthy();
    }
  );
});
