import { Slot, component$ } from '@builder.io/qwik';

type CardProps = {
  styling?: string;
};

const defaultStyles = 'rounded-xl py-4 px-6 bg-dark-300';

export const Card = component$<CardProps>(({ styling }) => {
  return (
    <div class={[defaultStyles, styling ?? ''].join(' ')}>
      <Slot name="title" />
      <Slot />
    </div>
  );
});
