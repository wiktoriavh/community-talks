import { Footer } from '@/navigation/Footer';
import { Header } from '@/navigation/Header';
import { Slot, component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <Header />
      <main class="grid grid-cols-2">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
