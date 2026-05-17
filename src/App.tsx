import { About } from './components/About';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';

export function App() {
  return (
    <>
      <a
        href="#home"
        className="absolute left-4 top-4 z-[100] -translate-y-28 rounded-full bg-indigo-700 px-4 py-2 text-sm font-semibold text-white transition-transform duration-150 focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
