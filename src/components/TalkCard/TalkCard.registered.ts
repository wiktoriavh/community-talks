import type { RegisteredComponent } from '@builder.io/sdk-qwik';

import { TalkCard } from './TalkCard';

export const RegisteredTalkCard: RegisteredComponent = {
  component: TalkCard,
  name: 'TalkCard',
  inputs: [
    {
      name: 'time',
      type: 'string',
      required: true,
    },
    {
      name: 'title',
      type: 'string',
      required: true,
    },
    {
      name: 'speaker',
      type: 'string',
      required: true,
    },
    {
      name: 'job',
      type: 'string',
      required: false,
    },
    {
      name: 'company',
      type: 'string',
      required: false,
    },
  ],
};
