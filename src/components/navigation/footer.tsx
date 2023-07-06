import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer class="dark:text-white flex justify-end gap-12 p-4">
      <menu class="flex flex-col gap-2 text-sm">
        <li class="hover:underline underline-offset-2">
          <a href="#top">Back to Top</a>
        </li>
        <li class="hover:underline underline-offset-2">
          <a href="#schedule">Schedule</a>
        </li>
      </menu>

      {/* <menu class="flex flex-col gap-2 text-sm">
        <li class="hover:underline underline-offset-2">
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
        <li class="hover:underline underline-offset-2">
          <a href="/impress">Impress</a>
        </li>
      </menu> */}

      <menu class="flex flex-col gap-2 text-sm">
        <li class="hover:underline underline-offset-2">
          <a href="https://discord.gg/web" target="_blank">
            Discord Server
          </a>
        </li>
        <li class="hover:underline underline-offset-2">
          <a href="https://github.com/r-webdev/community-talks" target="_blank">
            View on GitHub
          </a>
        </li>
        <li class="hover:underline underline-offset-2">
          <a
            href="https://github.com/r-webdev/community-talks/graphs/contributors"
            target="_blank">
            Contributors
          </a>
        </li>
      </menu>
    </footer>
  );
});
