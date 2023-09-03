import { createDOM } from '@builder.io/qwik/testing';

import { Modal } from './Modal';

describe('<Modal />', () => {
  it('should render', async () => {
    const { screen, render } = await createDOM();
    await render(<Modal isOpen onClose={() => {}} />);
    expect(screen.querySelector('dialog')).toBeTruthy();
  });

  it('should render with content', async () => {
    const { screen, render } = await createDOM();
    await render(
      <Modal isOpen onClose={() => {}}>
        <div>Hello World</div>
      </Modal>
    );
    expect(screen.innerHTML).toContain('Hello World');
  });

  it('should render with feature image', async () => {
    const { screen, render } = await createDOM();
    await render(
      <Modal isOpen onClose={() => {}}>
        <img
          q:slot="feature-image"
          width="160"
          height="90"
          src="https://placekitten.com/160/90"
          class=""
        />
      </Modal>
    );
    expect(screen.querySelector('img')).toBeTruthy();
  });

  it('should render with feature image and content', async () => {
    const { screen, render } = await createDOM();
    await render(
      <Modal isOpen onClose={() => {}}>
        <img
          q:slot="feature-image"
          width="160"
          height="90"
          src="https://placekitten.com/160/90"
          class=""
        />
        <div>Hello World</div>
      </Modal>
    );
    expect(screen.querySelector('img')).toBeTruthy();
    expect(screen.innerHTML).toContain('Hello World');
  });
});
