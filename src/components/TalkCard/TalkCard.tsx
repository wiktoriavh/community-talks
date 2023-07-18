import { Card } from '@/Card';
import { component$ } from '@builder.io/qwik';
import type { RegisteredComponent } from '@builder.io/sdk-qwik';
import { inLocaleTime, inRelativeTime } from '~/utils';

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

export const TalkCard = component$<{
  Event?: BuilderReference<Event>;
  time?: string;
  title?: string;
  job?: string;
  speaker?: string;
  company?: string;
}>((props) => {
  const Event: Event = props.Event?.value.data ?? DEFAULT_EVENT;
  const eventDate = new Date(Event.datetime);
  const dateTimeDifference = eventDate.getTime() - Date.now();
  const isNow =
    dateTimeDifference < 0 && dateTimeDifference > -1000 * 60 * Event.duration;
  return (
    <Card class="bg-green-100 heropattern-yyy-green-200 py-3 w-full prose">
      <div class="px-4 tracking-wide w-full">
        <div class="flex justify-between gap-x-4">
          <time
            dateTime={Event.datetime}
            class="flex-none py-0.5 text-xs leading-5 flex gap-3">
            <span class="font-semibold">{inLocaleTime(eventDate)}</span>
            <span>{Event.duration} min talk</span>
            {isNow ? 'Now' : inRelativeTime(eventDate)}
          </time>
        </div>
        <h2 class="my-1 tracking-wider">{Event.title}</h2>
        <div class="py-0.5 text-xs leading-5">
          <span>with</span> <span class="font-medium">{Event.speaker}</span>
        </div>
      </div>
      <div class="w-full px-8 py-4">
        <p class="">{Event.description}</p>
      </div>
    </Card>
  );
});

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
