import { useEffect, useState } from 'react';

import type { SiteNavLinkKey } from '../content/siteContent';
import { SITE_CONTENT } from '../content/siteContent';

const navKeys: SiteNavLinkKey[] = ['home', 'services', 'about'];

function sectionIdForNav(key: SiteNavLinkKey): string {
  if (key === 'home') return 'home';
  return key;
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compactNav, setCompactNav] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setCompactNav(window.scrollY > 50);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollToSection = (hash: string) => {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const navPaddingClass = compactNav ? 'py-2 shadow-lg' : 'py-3';

  return (
    <nav
      aria-label="Primary"
      className={`theme-nav fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out ${navPaddingClass}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a
          href="#home"
          className="text-3xl font-bold text-white"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection('#home');
          }}
        >
          <span>{SITE_CONTENT.brand.prefix}</span>
          <span className="text-gradient">{SITE_CONTENT.brand.suffix}</span>
        </a>

        <button
          type="button"
          id="menu-toggle"
          className="block text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <title>{menuOpen ? 'Close menu' : 'Open menu'}</title>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div
          id="nav-links"
          className={`absolute left-0 top-16 hidden w-full flex-col gap-0 bg-[var(--color-background-dark)] px-6 py-4 shadow-lg md:static md:flex md:w-auto md:flex-row md:items-center md:space-x-6 md:bg-transparent md:p-0 md:shadow-none ${
            menuOpen ? '!flex' : ''
          }`}
        >
          {navKeys.map((key) => (
            <a
              key={key}
              href={`#${sectionIdForNav(key)}`}
              className="text-gray-300 transition duration-300 hover:text-[var(--color-primary-light)] md:inline-block md:border-none md:py-0"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(`#${sectionIdForNav(key)}`);
              }}
            >
              {SITE_CONTENT.nav[key]}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
