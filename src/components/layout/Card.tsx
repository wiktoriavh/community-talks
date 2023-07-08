import { Slot, component$ } from '@builder.io/qwik';

export const Card = component$<{}>(() => {
  return (
    <div class="divide-y divide-gray-200 overflow-hidden rounded-xl bg-white shadow-lg">
      <Slot />
    </div>
  );
});
