import { createDOM } from '@builder.io/qwik/testing';

import { TalkModal } from './TalkModal';

const testingData = {
  cover: 'https://placekitten.com/1800',
  title:
    "O womanly commerce! Wherefore doth deadly calamity grant not pardon for the rain's faults?",
  description: "Nay! From whence doth celestial vice wash away God's sinew?",
  date: '15. Juli 2023',
  time: '15:00',
  link: 'https://discord.gg/web?event=123',

  speaker: 'Dr. Kelsie Kozey',
  job: 'Lead Directives Orchestrator',
  company: 'Kozey - Kozey, Inc.',
  avatar: 'https://placekitten.com/400',
};

describe('<TalkModal />', () => {
  it('render', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal isOpen onClose={() => {}} {...testingData} />);
    expect(screen.querySelector('dialog')).toBeTruthy();
  });

  it('featured image', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal isOpen onClose={() => {}} {...testingData} />);
    expect(screen.querySelector('img')).toBeTruthy();
  });

  it('title', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal isOpen onClose={() => {}} {...testingData} />);
    expect(screen.innerHTML).toContain(testingData.title);
  });

  it('description', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal isOpen onClose={() => {}} {...testingData} />);
    expect(screen.innerHTML).toContain(testingData.description);
  });

  it('speaker name', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal isOpen onClose={() => {}} {...testingData} />);
    console.log(screen.innerHTML);
    expect(screen.innerHTML).toContain(testingData.speaker);
  });

  it('speaker job', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal isOpen onClose={() => {}} {...testingData} />);
    expect(screen.innerHTML).toContain(testingData.job);
  });

  it('speaker company', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal isOpen onClose={() => {}} {...testingData} />);
    expect(screen.innerHTML).toContain(testingData.company);
  });

  it('date and time', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal isOpen onClose={() => {}} {...testingData} />);
    expect(screen.innerHTML).toContain('15. Juli 2023');
    expect(screen.innerHTML).toContain('15:00');
  });

  it.todo('functioning add to calendar link');

  it('link to the talk', async () => {
    const { screen, render } = await createDOM();
    await render(<TalkModal isOpen onClose={() => {}} {...testingData} />);
    expect(screen.innerHTML).toContain('Join Event');
    // expect a href with link to discord.gg/web
    expect(screen.querySelector('a[href*=discord.gg/web?event]')).toBeTruthy();
  });

  it.todo("link to speaker's socials");
});
