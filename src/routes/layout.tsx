import { component$, Slot } from "@builder.io/qwik";
import { Header } from "../components/navigation/header";
import { Footer } from "../components/navigation/footer";
import { Heading } from "../components/typography/heading";

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
