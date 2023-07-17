import { createDOM } from '@builder.io/qwik/testing';

import { TalkModal } from './TalkModal';

const testingData = {
  imageSrc: 'https://placekitten.com/1800',
  title:
    "O womanly commerce! Wherefore doth deadly calamity grant not pardon for the rain's faults?",
  description: "Nay! From whence doth celestial vice wash away God's sinew?",
  speakerName: 'Dr. Kelsie Kozey',
  datetime: '2023-07-15T15:00:00.000Z',
  link: 'https://discord.gg/web?event=123',
};

describe('<TalkModal />', () => {
  it('render', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal {...testingData} />);
    expect(screen.querySelector('dialog')).toBeTruthy();
  });

  it('featured image', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal {...testingData} />);
    expect(screen.querySelector('img')).toBeTruthy();
  });

  it('title', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal {...testingData} />);
    expect(screen.innerHTML).toContain(testingData.title);
  });

  it('description', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal {...testingData} />);
    expect(screen.innerHTML).toContain(testingData.description);
  });

  it('speaker name', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal {...testingData} />);
    expect(screen.innerHTML).toContain(testingData.speakerName);
  });

  it('date and time', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal {...testingData} />);
    expect(screen.innerHTML).toContain('15. Juli 2023');
    expect(screen.innerHTML).toContain('15:00');
  });

  it.todo('functioning add to calendar link');

  it('link to the talk', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal {...testingData} />);
    expect(screen.innerHTML).toContain('Join Event');
    // expect a href with link to discord.gg/web
    expect(screen.querySelector('a[href*=discord.gg/web?event]')).toBeTruthy();
  });

  it.todo("link to speaker's socials");
});
