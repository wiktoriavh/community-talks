import { component$ } from '@builder.io/qwik';
import type { RegisteredComponent } from '@builder.io/sdk-qwik';
import { inRelativeTime } from '~/utils';

type ISODateTimeString = string;
type Event = {
  id: number;
  type: 'Talk' | 'Workshop';
  title: string;
  description: string;
  dateTime: ISODateTimeString;
  duration: string;
  location: string;
  speakers: string[];
};

export const Timeline = component$(() => {
  const events: Event[] = [
    {
      id: 1,
      type: 'Talk',
      title: 'The Future of Web Development',
      description: 'Rust in Web Components',
      dateTime: '2023-07-08T08:45:58.158Z',
      duration: '30 min',
      location: 'Discord',
      speakers: ['John Doe'],
    },
  ];
  return (
    <ul role="list" class="space-y-6">
      {events.map((event) => (
        <li class="relative flex gap-x-4" key={event.id}>
          <div class="absolute left-0 top-0 flex w-8 justify-center -bottom-6">
            <div class="w-px bg-blue-800"></div>
          </div>
          <img
            src="https://placekitten.com/100/100"
            alt=""
            class="relative mt-3 h-8 w-8 flex-none rounded-full bg-gray-50"
            width="50"
            height="50"
          />
          <div class="flex-auto rounded-md p-3 ring-1 ring-inset ring-blue-500 prose prose-invert tracking-wide">
            <div class="flex justify-between gap-x-4">
              <div class="py-0.5 text-xs leading-5">
                <span class="font-medium">{event.speakers[0]}</span>{' '}
                <span>presents</span>{' '}
                <h2 class="my-1 tracking-wider">{event.title}</h2>
              </div>
              <time
                dateTime={event.dateTime}
                class="flex-none py-0.5 text-xs leading-5">
                {inRelativeTime(new Date(event.dateTime))}
              </time>
            </div>
            <p class="text-sm leading-6">{event.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
});

export const TimelineRegistry: RegisteredComponent = {
  component: Timeline,
  name: 'Timeline',
  inputs: [],
};
