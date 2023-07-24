import { Footer } from '@/Footer';
import { Header } from '@/Header';
import { TalkModal } from '@/TalkModal/TalkModal';
import { Slot, component$ } from '@builder.io/qwik';

const testingData = {
  image: 'https://placekitten.com/1800',
  title:
    "O womanly commerce! Wherefore doth deadly calamity grant not pardon for the rain's faults?",
  description: `How do you make the dream of a design system for your website stand up to the reality of other teams actually using it in production? In this talk, you'll learn a bunch of best-practices to not only design your site upon an extensible component-based mentality, but you'll also see how to implement it in a CMS as well as translate it to a beautifully engineered frontend meant to stand the test of time. It'll deliver admins with the perfect level of flexibility - not too much so that they can ruin the design and turn the site into a kaleidoscope, but just the right amount so admins don't bother you every 20 minutes for simple layout changes.

  We'll talk through how professional agencies and large organizations tackle website architecture at scale, and you'll learn a ton of tips for how to take advantage of powerful tooling like Payload, TypeScript, and React.`,
  date: '15. Juli 2023',
  time: '15:00',
  link: 'https://discord.gg/web?event=123',

  speaker: {
    name: 'Dr. Kelsie Kozey',
    job: 'Lead Developer',
    company: 'Kozey, Inc.',
    avatar: 'https://placekitten.com/400',
  },
};

export default component$(() => {
  return (
    <>
      <Header />
      <main class="grid grid-cols-2">
        <Slot />
        <TalkModal {...testingData} />
      </main>
      <Footer />
      <div id="__PORTAL__"></div>
    </>
  );
});
