import { About } from "@/components/About";
import { Engagements } from "@/components/Engagements";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Hire } from "@/components/Hire";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { SkipLink } from "@/components/SkipLink";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Engagements />
        <Process />
        <About />
        <Hire />
      </main>
      <Footer />
    </>
  );
}
