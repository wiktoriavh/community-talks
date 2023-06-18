import { component$ } from "@builder.io/qwik";

export const Header = component$(() => {
  return (
    <header>
      <menu class="flex gap-4 m-auto justify-center text-lg">
        <li class="p-4 hover:underline underline-offset-2">
          <a href="#home">Home</a>
        </li>
        <li class="p-4 hover:underline underline-offset-2">
          <a href="#about">About</a>
        </li>
        <li class="p-4 hover:underline underline-offset-2">
          <a href="#schedule">Schedule</a>
        </li>
      </menu>
    </header>
  );
});
