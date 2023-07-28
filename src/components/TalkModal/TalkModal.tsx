import { Button } from '@/Button';
import { ButtonHref } from '@/ButtonHref';
import { Modal } from '@/Modal';
import { component$ } from '@builder.io/qwik';

type SpeakerProps = {
  name: string;
  job?: string;
  company?: string;
  avatar?: string;
};

function buildSpeakerJobDescription(job?: string, company?: string) {
  if (job && company) {
    return `${job}, ${company}`;
  }

  return job ?? company ?? '';
}

const Speaker = component$<SpeakerProps>(({ name, job, company, avatar }) => {
  const withJobOrCompany = Boolean(job) || Boolean(company);

  return (
    <div class="flex gap-4 my-4">
      {avatar ? (
        <img
          src={avatar}
          alt={''}
          width={40}
          height={40}
          class="w-10 h-10 rounded-full"
        />
      ) : (
        <div class="w-10 h-10 rounded-full bg-primary-500"></div>
      )}
      <div class="flex flex-col justify-center gap-0 text-sm">
        <p class="font-bold italic font-heading">{name}</p>
        {withJobOrCompany && <p>{buildSpeakerJobDescription(job, company)}</p>}
      </div>
    </div>
  );
});

type TalkModalProps = {
  cover: string;
  title: string;
  description: string;
  date: string;
  time: string;
  link: string;

  speaker: string;
  job?: string;
  company?: string;
  avatar?: string;
};

export const TalkModal = component$<TalkModalProps>(
  ({
    cover,
    title,
    description,
    date,
    time,
    speaker,
    job,
    company,
    avatar,
    link,
  }) => {
    return (
      <Modal>
        <img
          q:slot="feature-image"
          width={160}
          height={90}
          src={cover}
          class="object-cover w-full h-auto aspect-[5/2] rounded-xl"
        />
        <div class="prose">
          <h2 class="text-black text-2xl">{title}</h2>
        </div>
        <p class="my-2">
          {date}, {time}
        </p>
        <Speaker name={speaker} job={job} company={company} avatar={avatar} />
        <div>
          <p class="font-sans text-base">{description}</p>
        </div>
        <footer class="flex justify-end gap-4 pt-8 pb-4">
          <ButtonHref href={link}>Join Event</ButtonHref>
          {/* TODO: How to add something to calendar? */}
          <Button onClick$={() => console.log('foo')}>Add to Calendar</Button>
        </footer>
      </Modal>
    );
  }
);
