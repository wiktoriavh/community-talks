import { Slot, component$ } from '@builder.io/qwik';
import { classNames } from '~/utils';

type CardTitleProps = {
  class?: string;
};

export const CardTitle = component$<CardTitleProps>((props) => {
  return (
    <p class={classNames('italic text-sm font-heading mb-3', props.class)}>
      <Slot />
    </p>
  );
});
