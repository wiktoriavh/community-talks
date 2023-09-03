import { Slot, component$ } from '@builder.io/qwik';

type ButtonHrefProps = {
  href: string;
  target?: string;
};

export const ButtonHref = component$<ButtonHrefProps>(({ href, target }) => {
  return (
    <a
      href={href}
      target={target}
      class="py-2 px-4 bg-primary-500 rounded-full block w-fit hover:bg-primary-600">
      <Slot />
    </a>
  );
});
