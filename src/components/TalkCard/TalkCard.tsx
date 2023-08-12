import { Card } from '@/Card';
import { CardTitle } from '@/CardTitle';
import type { Talk } from '@/Timeline';
import { $, component$ } from '@builder.io/qwik';

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

const randomBackgroundPosition = () => {
  const positions = [
    'bg-bottom',
    'bg-center',
    'bg-left',
    'bg-left-bottom',
    'bg-left-top',
    'bg-right',
    'bg-right-bottom',
    'bg-right-top',
    'bg-top',
  ];

  return positions[Math.floor(Math.random() * positions.length)];
};

export const TalkCard = component$<Talk>(
  ({ time, title, speaker, job, company, duration, type }) => {
    const openTalkModal = $(() => {
      console.log('Open talk');
    });

    return (
      <button class="w-full text-left group" onClick$={openTalkModal}>
        <Card
          styling={[
            'bg-primary-50 text-black w-full font-heading bg-circles-25',
            randomBackgroundPosition(),
          ].join(' ')}>
          <CardTitle q:slot="title">
            <span class="font-bold">{time}</span> - {duration} Min {type}
          </CardTitle>

          <h3 class=" text-lg font-bold ">{title}</h3>

          <p class="mt-4 mb-5 italic font-light">
            with {createSpeakerText(speaker, job, company)}
          </p>
          <svg
            class="group-hover:translate-x-4 ease-in duration-200"
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
        </Card>
      </button>
    );
  }
);
