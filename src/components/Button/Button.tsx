import { Slot, component$ } from '@builder.io/qwik';

type ButtonProps = {
  type?: 'button' | 'reset' | 'submit';
  onClick$: () => void;
  styles?: string;
};

export const Button = component$<ButtonProps>(({ type, onClick$, styles }) => {
  return (
    <button
      type={type ?? 'button'}
      onClick$={onClick$}
      class={`py-2 px-4 bg-primary-500 rounded-full w-fit hover:bg-primary-600 ${
        styles ?? ''
      }`}>
      <Slot />
    </button>
  );
});
