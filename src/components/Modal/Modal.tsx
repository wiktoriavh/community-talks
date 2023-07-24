import { Slot, component$ } from '@builder.io/qwik';

export const Modal = component$(() => {
  return (
    <dialog open class="absolute top-32 rounded-xl w-[65ch] p-0 bg-primary-50">
      <Slot name="feature-image" />
      <div class="p-4">
        <Slot />
      </div>
    </dialog>
  );
});
