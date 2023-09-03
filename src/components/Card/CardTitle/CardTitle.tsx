import { Slot, component$ } from '@builder.io/qwik';

type CardTitleProps = {
  styling?: string;
};

export const CardTitle = component$<CardTitleProps>(({ styling }) => {
  return (
    <p class={['italic text-sm font-heading mb-3', styling ?? ''].join(' ')}>
      <Slot />
    </p>
  );
});
