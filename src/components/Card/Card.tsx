import { Slot, component$ } from '@builder.io/qwik';
import { classNames } from '~/utils';

type CardProps = {
  class?: string;
};

const defaultStyles = 'rounded-xl py-4 px-6 bg-dark-300 overflow-hidden';

export const Card = component$<CardProps>((props) => {
  return (
    <div class={classNames(defaultStyles, props.class)}>
      <Slot name="header" />
      <Slot />
    </div>
  );
});
