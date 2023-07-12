import { Card } from '@/Card';
import { CardTitle } from '@/CardTitle';
import { $, component$ } from '@builder.io/qwik';

type TalkCardProps = {
  time: string;
  title: string;
  speaker: string;
  job?: string;
  company?: string;
};

function createSpeakerText(speaker: string, job?: string, company?: string) {
  let result = speaker;

  if (job) {
    result += `, ${job}`;
  }

  if (company) {
    result += ` (${company})`;
  }

  return result;
}

export const TalkCard = component$<TalkCardProps>(
  ({ time, title, speaker, job, company }) => {
    const openTalkModal = $(() => {
      console.log('Open talk');
    });

    return (
      <Card styling="bg-primary-50 text-black w-[620px] font-heading">
        <CardTitle q:slot="title">
          <span class="font-bold">{time}</span> - 30 Min Talk
        </CardTitle>
        <h3 class=" text-lg font-bold ">{title}</h3>
        <p class="mt-10 mb-5 italic font-light">
          {createSpeakerText(speaker, job, company)}
        </p>
        <button
          class="flex justify-between items-center w-full hover:bg-primary-500/50 p-2 rounded-lg"
          onClick$={openTalkModal}>
          See more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </button>
      </Card>
    );
  }
);
