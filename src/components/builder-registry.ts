import type { RegisteredComponent } from '@builder.io/sdk-qwik';

import { Heading } from './typography/Heading';

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    name: 'Heading',
    component: Heading,
    inputs: [
      {
        name: 'text',
        type: 'string',
        defaultValue: 'Hello World',
      },
      {
        name: 'level',
        type: 'number',
        defaultValue: 1,
      },
    ],
  },
];
