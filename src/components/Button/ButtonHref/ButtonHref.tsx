import { Slot, component$ } from '@builder.io/qwik';

type ButtonHrefProps = {
  href: string;
};

export const ButtonHref = component$<ButtonHrefProps>(({ href }) => {
  return (
    <a
      href={href}
      class="py-2 px-4 bg-primary-500 rounded-full block w-fit hover:bg-primary-600">
      <Slot />
    </a>
  );
});
