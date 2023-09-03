import { Button } from '@/Button';
import { $, Slot, component$, useSignal, useTask$ } from '@builder.io/qwik';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = component$<ModalProps>(({ isOpen, onClose }) => {
  const dialogRef = useSignal<HTMLDialogElement>();
  console.log('isOpen', isOpen);

  useTask$(({ track }) => {
    track(() => isOpen);
    console.log('track isOpen', isOpen);
    if (isOpen) {
      dialogRef.value?.showModal();
    } else {
      dialogRef.value?.close();
    }
  });

  const close = $(() => {
    onClose();
  });

  return (
    <div
      class={`absolute top-0 left-0 overflow-hidden m-0 p-0 ${
        isOpen ? 'w-full h-full bg-black/30' : 'w-0 h-0'
      }`}>
      <dialog
        ref={dialogRef}
        class="absolute rounded-xl w-[65ch] p-0 bg-primary-50 ">
        <Slot name="feature-image" />
        <div class="p-4">
          <Slot />
        </div>
        <Button
          onClick$={close}
          styles="absolute top-0 right-0 py-2 px-4 bg-primary-500 rounded-tr-none hover:bg-primary-600 flex gap-2 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
          Close
        </Button>
      </dialog>
    </div>
  );
});
