import { component$ } from '@builder.io/qwik';
import type { RegisteredComponent } from '@builder.io/sdk-qwik';

import { inRelativeTime } from '~/utils';

import { Card } from '../layout';

type ISODateTimeString = string;

type Event = {
  id: number;
  type: 'Talk' | 'Workshop';
  hero: string;
  title: string;
  description: string;
  datetime: ISODateTimeString;
  duration: number;
  location: string;
  speaker: string;
};

type BuilderReference<T> = {
  value: {
    data: T;
  };
};

export const TalkCard = component$<{ Event?: BuilderReference<Event> }>(
  (props) => {
    const Event: Event = props.Event?.value.data ?? DEFAULT_EVENT;
    const dateTimeDifference = new Date(Event.datetime).getTime() - Date.now();
    const isNow =
      dateTimeDifference < 0 &&
      dateTimeDifference > -1000 * 60 * Event.duration;
    return (
      <Card>
        <img
          src={Event.hero}
          class="w-full h-auto object-cover max-h-64"
          width="400"
          height="200"
          loading="lazy"
          alt=""
        />
        <div class="px-4 prose tracking-wide w-full">
          <h2 class="my-1 tracking-wider">{Event.title}</h2>
          <div class="flex justify-between gap-x-4">
            <div class="py-0.5 text-xs leading-5">
              <span>with</span> <span class="font-medium">{Event.speaker}</span>
            </div>
            <time
              dateTime={Event.datetime}
              class="flex-none py-0.5 text-xs leading-5">
              {isNow ? 'Now' : inRelativeTime(new Date(Event.datetime))}
            </time>
          </div>
        </div>
        <div class="prose w-full px-8 py-4">
          <p class="">{Event.description}</p>
        </div>
      </Card>
    );
  }
);

export const TalkCardRegistry: RegisteredComponent = {
  component: TalkCard,
  name: 'TalkCard',
  inputs: [
    {
      name: 'Event',
      type: 'reference',
      model: 'community-talk',
    },
  ],
};

const DEFAULT_EVENT: Event = {
  id: 1,
  type: 'Talk',
  hero: 'https://placekitten.com/400/200',
  title: 'The Future of Web Development',
  description: 'Rust in Web Components',
  datetime: '2023-07-08T08:45:58.158Z',
  duration: 30,
  location: 'Discord',
  speaker: 'John Doe',
};
