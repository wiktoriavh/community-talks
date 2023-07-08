import { Slot, component$ } from '@builder.io/qwik';

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const sharedClasses = 'font-heading';

export const Heading = component$<HeadingProps>(({ level = 1 }) => {
  if (level < 1) {
    level = 1;
  } else if (level > 6) {
    level = 6;
  }

  switch (level) {
    case 1:
      return (
        <h1
          class={[
            sharedClasses,
            'text-4xl font-extrabold text-primary-500',
          ].join(' ')}>
          <Slot />
        </h1>
      );
    case 2:
      return (
        <h2 class={[sharedClasses, 'text-3xl font-extrabold'].join(' ')}>
          <Slot />
        </h2>
      );
    case 3:
      return (
        <h3 class={[sharedClasses, 'text-2xl font-extrabold'].join(' ')}>
          <Slot />
        </h3>
      );
    case 4:
      return (
        <h4 class={[sharedClasses, 'text-xl font-extrabold'].join(' ')}>
          <Slot />
        </h4>
      );
    case 5:
      return (
        <h5 class={[sharedClasses, 'text-xl font-bold'].join(' ')}>
          <Slot />
        </h5>
      );
    case 6:
      return (
        <h6 class={[sharedClasses, 'text-xl font-semibold'].join(' ')}>
          <Slot />
        </h6>
      );
  }
});
