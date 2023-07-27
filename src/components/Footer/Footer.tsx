import { Card } from '@/Card';
import { CardTitle } from '@/CardTitle';
import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <Card>
      <CardTitle>Footer</CardTitle>
      <footer>
        <menu class="flex gap-8 text-sm mt-8">
          <li>
            <a
              href="https://github.com/Braweria/community-talks"
              class="hover:underline">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://discord.gg/web" class="hover:underline">
              Discord
            </a>
          </li>
        </menu>
      </footer>
    </Card>
  );
});
