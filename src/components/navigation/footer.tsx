import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer>
      <menu class="flex gap-2 justify-end">
        <li class="p-4 hover:underline underline-offset-2">
          <a href="https://github.com/r-webdev/community-talks" target="_blank">
            View on GitHub
          </a>
        </li>
        <li class="p-4 hover:underline underline-offset-2">
          <a
            href="https://github.com/r-webdev/community-talks/graphs/contributors"
            target="_blank"
          >
            Contributors
          </a>
        </li>
      </menu>
    </footer>
  );
});
