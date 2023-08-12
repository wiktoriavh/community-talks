import { createDOM } from '@builder.io/qwik/testing';

import { TalkCard } from './TalkCard';

describe('<TalkCard />', () => {
  it('should render', async () => {
    const { screen, render } = await createDOM();
    await render(
      <TalkCard
        time="15:00"
        title="Presentation Title"
        date="1. Januar 2020"
        duration={30}
        description="Lorem ipsum"
        cover="https://placekitten.com/300"
        type="Talk"
        speaker="Max Mustermann"
        job="Developer"
        company="Acme Inc."></TalkCard>
    );
    expect(screen.innerHTML).toContain('Presentation Title');
  });

  it('should format speaker with only name', async () => {
    const { screen, render } = await createDOM();
    await render(
      <TalkCard
        time="15:00"
        title="Presentation Title"
        speaker="Max Mustermann"
        date="1. Januar 2020"
        duration={30}
        description="Lorem ipsum"
        cover="https://placekitten.com/300"
        type="Talk"></TalkCard>
    );
    expect(screen.innerHTML).toContain('Max Mustermann');
  });

  it('should format speaker with name and job', async () => {
    const { screen, render } = await createDOM();
    await render(
      <TalkCard
        time="15:00"
        title="Presentation Title"
        speaker="Max Mustermann"
        date="1. Januar 2020"
        duration={30}
        description="Lorem ipsum"
        cover="https://placekitten.com/300"
        type="Talk"
        job="Developer"></TalkCard>
    );
    expect(screen.innerHTML).toContain('Max Mustermann, Developer');
  });

  it('should format speaker with name, job and company', async () => {
    const { screen, render } = await createDOM();
    await render(
      <TalkCard
        time="15:00"
        title="Presentation Title"
        speaker="Max Mustermann"
        job="Developer"
        date="1. Januar 2020"
        duration={30}
        description="Lorem ipsum"
        cover="https://placekitten.com/300"
        type="Talk"
        company="Acme Inc."></TalkCard>
    );
    expect(screen.innerHTML).toContain('Max Mustermann, Developer (Acme Inc.)');
  });

  it('should represent speaker with name and company', async () => {
    const { screen, render } = await createDOM();
    await render(
      <TalkCard
        time="15:00"
        title="Presentation Title"
        speaker="Max Mustermann"
        date="1. Januar 2020"
        duration={30}
        description="Lorem ipsum"
        cover="https://placekitten.com/300"
        type="Talk"
        company="Acme Inc."></TalkCard>
    );
    expect(screen.innerHTML).toContain('Max Mustermann (Acme Inc.)');
  });
});
