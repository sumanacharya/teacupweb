import { SITE_CONTENT } from '../content/siteContent';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="theme-footer py-12">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <div className="mb-4">
          <a href="#home" className="text-2xl font-bold text-white">
            <span>{SITE_CONTENT.brand.prefix}</span>
            <span className="text-gradient">{SITE_CONTENT.brand.suffix}</span>
          </a>
        </div>

        <a href={`mailto:${SITE_CONTENT.footer.email}`} className="mb-4 block underline">
          {SITE_CONTENT.footer.email}
        </a>

        <p className="text-gray-400">
          © {year} {SITE_CONTENT.brand.prefix} {SITE_CONTENT.brand.suffix}
        </p>

        {SITE_CONTENT.footer.credits ? <p className="mt-2 text-sm">{SITE_CONTENT.footer.credits}</p> : null}
      </div>
    </footer>
  );
}
