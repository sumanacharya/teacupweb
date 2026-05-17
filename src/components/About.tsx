import { SITE_CONTENT } from '../content/siteContent';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="about" className="bg-background-dark py-20">
      <div className="container mx-auto flex flex-col items-center px-6 md:flex-row">
        <Reveal className="fade-in-up mb-10 md:mb-0 md:w-1/2 md:pr-10">
          <video
            aria-label="Our team at work"
            className="border-gradient w-full rounded-xl shadow-2xl"
            style={{ filter: 'hue-rotate(45deg)' }}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://teacupdigital.com.au/assets/code.mp4" type="video/mp4" />
          </video>
        </Reveal>

        <div className="md:w-1/2">
          <Reveal className="fade-in-up delay-100">
            <h2 className="mb-6 text-4xl font-bold text-gradient">{SITE_CONTENT.about.title}</h2>
          </Reveal>
          <Reveal className="fade-in-up delay-200">
            <p className="mb-10 text-lg leading-relaxed text-gray-400">{SITE_CONTENT.about.description}</p>
          </Reveal>
          <Reveal className="fade-in-up delay-300">
            <a
              href="#contact"
              className="inline-block rounded-lg border-2 border-[var(--color-primary)] py-3 px-8 font-semibold text-[var(--color-primary-light)] transition duration-300 hover:bg-[var(--color-primary)] hover:text-white"
            >
              {SITE_CONTENT.about.cta}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
