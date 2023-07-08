import { component$ } from '@builder.io/qwik';
import type { RegisteredComponent } from '@builder.io/sdk-qwik';

import { inRelativeTime } from '~/utils';

import { Card } from '../layout/Card';

type ISODateTimeString = string;
type Event = {
  id: number;
  type: 'Talk' | 'Workshop';
  hero: string;
  title: string;
  description: string;
  dateTime: ISODateTimeString;
  duration: string;
  location: string;
  speakers: string[];
};

export const TalkCard = component$<{}>(() => {
  const event: Event = {
    id: 1,
    type: 'Talk',
    hero: 'https://placekitten.com/400/200',
    title: 'The Future of Web Development',
    description: 'Rust in Web Components',
    dateTime: '2023-07-08T08:45:58.158Z',
    duration: '30 min',
    location: 'Discord',
    speakers: ['John Doe'],
  };
  return (
    <Card>
      <img
        src={event.hero}
        class="w-full h-auto object-cover"
        width="400"
        height="200"
        loading="lazy"
        alt=""
      />
      <div class="px-4 prose tracking-wide">
        <h2 class="my-1 tracking-wider">{event.title}</h2>
        <div class="flex justify-between gap-x-4">
          <div class="py-0.5 text-xs leading-5">
            <span>with</span>{' '}
            <span class="font-medium">{event.speakers[0]}</span>
          </div>
          <time
            dateTime={event.dateTime}
            class="flex-none py-0.5 text-xs leading-5">
            {inRelativeTime(new Date(event.dateTime))}
          </time>
        </div>
      </div>
      <p class="text-sm px-4 py-2 prose">{event.description}</p>
    </Card>
  );
});

export const TalkCardRegistry: RegisteredComponent = {
  component: TalkCard,
  name: 'TalkCard',
  inputs: [],
};
