import { Slot, component$ } from '@builder.io/qwik';

type CardTitleProps = {
  styling?: string;
};

export const CardTitle = component$<CardTitleProps>(({ styling }) => {
  return (
    <p class={['italic text-sm font-heading', styling ?? ''].join(' ')}>
      <Slot />
    </p>
  );
});
