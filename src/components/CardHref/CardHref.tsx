import { Slot, component$ } from '@builder.io/qwik';

type CardHrefProps = {
  styling?: string;
  href?: string;
};

const defaultStyles = 'rounded-xl py-4 px-6 bg-dark-300 block';

export const CardHref = component$<CardHrefProps>(({ styling, href }) => {
  return (
    <a class={[defaultStyles, styling ?? ''].join(' ')} href={href}>
      <Slot name="title" />
      <Slot />
    </a>
  );
});
