import { createDOM } from '@builder.io/qwik/testing';

import { Modal } from './Modal';

describe('<Modal />', () => {
  it('should render', async () => {
    const { screen, render } = await createDOM();
    await render(<Modal />);
    expect(screen.querySelector('dialog')).toBeTruthy();
  });

  it('should render with content', async () => {
    const { screen, render } = await createDOM();
    await render(
      <Modal>
        <div>Hello World</div>
      </Modal>
    );
    expect(screen.innerHTML).toContain('Hello World');
  });

  it('should render with feature image', async () => {
    const { screen, render } = await createDOM();
    await render(
      <Modal>
        <img q:slot="feature-image" src="https://placekitten.com/600" />
      </Modal>
    );
    expect(screen.innerHTML).toContain('Feature Image');
  });
});
