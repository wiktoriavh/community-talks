import { component$, Slot } from "@builder.io/qwik";
import { Header } from "../components/navigation/header";
import { Footer } from "../components/navigation/footer";

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
