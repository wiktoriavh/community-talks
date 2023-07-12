import { TalkCard } from '@/TalkCard';
import { Footer } from '@/navigation/Footer';
import { Header } from '@/navigation/Header';
import { Slot, component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
        <TalkCard
          time="10:00 AM"
          title="Design and Build An Extensible Site on a Component-Based Mentality"
          speaker="Wiktoria van Harneveldt"
          job="Frontend Developer"
          company="Trusted Shops AG"
        />
      </main>
      <Footer />
    </>
  );
});
