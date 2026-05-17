import { BrainCircuit, Network, Sparkles } from 'lucide-react';

import { SITE_CONTENT, type SiteServiceItem } from '../content/siteContent';
import { Reveal } from './Reveal';

const iconMap = {
  network: Network,
  sparkles: Sparkles,
  'brain-circuit': BrainCircuit,
} satisfies Record<SiteServiceItem['iconName'], typeof Network>;

export function Services() {
  return (
    <>
      <div className="section-transition" aria-hidden />
      <section id="services" className="relative bg-background-darker py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <Reveal className="fade-in-up">
              <h2 className="mb-4 text-4xl font-bold text-gradient">{SITE_CONTENT.services.title}</h2>
            </Reveal>
            <Reveal className="fade-in-up delay-100">
              <p className="mx-auto max-w-2xl text-lg text-gray-400">{SITE_CONTENT.services.subtitle}</p>
            </Reveal>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {SITE_CONTENT.services.items.map((service) => {
              const Icon = iconMap[service.iconName];
              return (
                <Reveal key={service.title} className="fade-in-up theme-card p-8 shadow-2xl transition-transform duration-300 hover:scale-105">
                  <div className="mb-6 flex justify-center">
                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradientClass} p-4`}
                    >
                      <Icon className="h-12 w-12 text-white" aria-hidden strokeWidth={1.75} />
                    </div>
                  </div>
                  <h3 className="mb-4 text-center text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-center leading-relaxed text-gray-400">{service.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
