import Achievements from "@/components/sections/Achievements";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Qna from "@/components/sections/Qna";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <Certificates />
        <Contact />
        <Qna />
      </main>
      <Footer />
    </div>
  );
}
