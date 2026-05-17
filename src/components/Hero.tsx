import { useEffect, useState } from 'react';

import { SITE_CONTENT } from '../content/siteContent';
import { Reveal } from './Reveal';

export function Hero() {
  const [shortHeroCopy, setShortHeroCopy] = useState(false);

  useEffect(() => {
    const evaluate = () => {
      // Matches legacy behaviour threshold intent for very narrow layouts.
      setShortHeroCopy(window.innerWidth < 200);
    };
    evaluate();
    window.addEventListener('resize', evaluate);
    return () => window.removeEventListener('resize', evaluate);
  }, []);

  const title = shortHeroCopy ? 'Build. Launch. Grow.' : SITE_CONTENT.hero.title;
  const subtitle = shortHeroCopy
    ? 'Affordable, scalable tech for startups.'
    : SITE_CONTENT.hero.subtitle;

  return (
    <section id="home" aria-labelledby="hero-heading" className="hero-bg text-white">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="https://teacupdigital.com.au/assets/table-xs.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" aria-hidden />
      <div className="hero-content container mx-auto px-6 text-center">
        <Reveal className="fade-in-up delay-100">
          <h1 id="hero-heading" className="mb-6 text-5xl font-bold text-gradient md:text-7xl">
            {title}
          </h1>
        </Reveal>
        <Reveal className="fade-in-up delay-200">
          <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-300 md:text-2xl">{subtitle}</p>
        </Reveal>
        <Reveal className="fade-in-up delay-300">
          <a href="#contact" className="gradient-button inline-block rounded-lg px-10 py-4 text-lg font-bold text-white shadow-xl">
            {SITE_CONTENT.hero.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
