import { Slot, component$ } from '@builder.io/qwik';

import { Footer } from '../components/navigation/Footer';
import { Header } from '../components/navigation/Header';
import { Heading } from '../components/typography/Heading';

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
