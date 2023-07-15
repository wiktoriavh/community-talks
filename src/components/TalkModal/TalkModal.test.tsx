import { createDOM } from '@builder.io/qwik/testing';

import { TalkModal } from './TalkModal';

describe('<TalkModal />', () => {
  it('should render', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal />);
    expect(screen.querySelector('dialog')).toBeTruthy();
  });

  it('should havea  featured image', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal />);
    expect(screen.querySelector('img')).toBeTruthy();
  });

  it('should have a title', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal />);
    expect(screen.innerHTML).toContain('Talk');
  });

  it('should have a description', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal />);
    expect(screen.innerHTML).toContain('Talk');
  });

  it('should have a speaker', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal />);
    expect(screen.innerHTML).toContain('Talk');
  });

  it('should have a date', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal />);
    expect(screen.innerHTML).toContain('Talk');
  });

  it('should have a time', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal />);
    expect(screen.innerHTML).toContain('Talk');
  });

  it('should have an add to calendar button', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal />);
    expect(screen.innerHTML).toContain('Talk');
  });

  it('should have a link to the talk', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal />);
    expect(screen.innerHTML).toContain('Talk');
  });

  it('should have a list of socials', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal />);
    expect(screen.innerHTML).toContain('Talk');
  });
});
