import { Slot, component$ } from '@builder.io/qwik';

import Footer from '../components/footer/Footer';
import { Header } from '../components/header/Header';

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
