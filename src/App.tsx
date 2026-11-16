import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Highlights } from "./components/Highlights";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { navItems, profile } from "./data/profile";
import { useActiveSection } from "./hooks/useActiveSection";

const sectionIds = navItems.map((item) => item.id);

export default function App() {
  const active = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-night text-white">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-gold focus:px-3 focus:py-2 focus:text-ink"
      >
        Lewati ke konten
      </a>
      <Header active={active} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Skills />
        <SelectedWork />
        <Education />
        <Highlights />
        <Contact />
      </main>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}
