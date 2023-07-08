import { Heading } from '@/typography/Heading';
import { component$ } from '@builder.io/qwik';

export const Header = component$(() => {
  return (
    <header class="text-center py-12 prose">
      <Heading level={1}>Community Talks</Heading>
    </header>
  );
});
