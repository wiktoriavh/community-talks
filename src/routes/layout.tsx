import { Footer } from '@/navigation/Footer';
import { Header } from '@/navigation/Header';
import { Heading } from '@/typography/Heading';
import { Slot, component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Heading text="Hello World" level={2} />
        <Slot />
      </main>
      <Footer />
    </>
  );
});
