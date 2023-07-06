import { component$ } from '@builder.io/qwik';

import { Heading } from '../typography/Heading';

export const Header = component$(() => {
  return (
    <header class="text-center py-12">
      <Heading text="Community Talks" level={1} />
    </header>
  );
});
