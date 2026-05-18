/* ============================================================
   TEACUP DIGITAL — Site Content 2026
   ============================================================ */

const SITE = {
  brand: { prefix: 'Teacup', suffix: 'Digital' },

  nav: {
    services:   'Services',
    process:    'How We Work',
    about:      'About',
    contact:    'Get in Touch'
  },

  hero: {
    label:        'Software Consulting and Engineering, Sydney',
    title:        'Complex Digital Projects.\nDelivered with ',
    titleEnd:     'Certainty.',
    subtitle:     'Senior engineers. Fixed price. Clear milestones. We design and build digital systems for organisations and we deliver what we promise.',
    primaryCta:   'Book a Free Consultation',
    secondaryCta: 'Our Services'
  },

  trust: [
    {
      icon:  'file-check',
      title: 'Fixed-Price Engagements',
      desc:  'Scope and price agreed before work begins. No surprise invoices.'
    },
    {
      icon:  'user-check',
      title: 'Senior Engineers, Always',
      desc:  'Principal-level engineers lead every project. Your work is never handed to juniors.'
    },
    {
      icon:  'map-pin',
      title: 'Australian-Based & Operated',
      desc:  'Local context, your time zone, and data sovereignty by design.'
    }
  ],

  services: {
    tag:      'Services',
    title:    'What We Do',
    subtitle: 'From first conversation to live systems and the support that follows.',
    items: [
      {
        icon:  'search',
        bg:    'rgba(99,102,241,0.12)',
        color: '#818CF8',
        title: 'Consulting and Solution Design',
        short: 'Define the problem before committing budget. We work with you to understand your context, explore options and design a practical delivery path.',
        detail: 'Technical discovery · Architecture planning · Build vs buy assessment · Risk mapping · Delivery roadmap',
        long:   'Many projects fail not because of poor code, but because the problem was never properly defined. We help clients understand what they are actually trying to solve, what the technical options are and what a realistic delivery looks like. Deliverables may include a solution architecture document, system diagrams, integration strategy, risk register and implementation roadmap.'
      },
      {
        icon:  'code-2',
        bg:    'rgba(59,130,246,0.12)',
        color: '#60A5FA',
        title: 'Software Design and Development',
        short: 'We design and build software tailored to your business workflows — web applications, customer portals, internal tools, APIs and dashboards.',
        detail: 'Web applications · Customer portals · Internal platforms · REST and GraphQL APIs · Dashboards · Workflow automation',
        long:   'Off-the-shelf software rarely fits complex business processes well. We design and build custom digital products with clear architecture, accessible user experience and long-term maintainability in mind. Every system is built for the team that will operate it after launch, not just for the demo. We work in iterative sprints with regular client reviews and working software at each milestone.'
      },
      {
        icon:  'cpu',
        bg:    'rgba(139,92,246,0.12)',
        color: '#A78BFA',
        title: 'Cloud and AI Engineering',
        short: 'Cloud systems and practical AI implementations designed for Australian data requirements and the operational realities of 2026.',
        detail: 'Cloud architecture and migration · Serverless and containers · CI/CD pipelines · AI readiness assessment · Workflow automation · Document intelligence',
        long:   'Cloud is no longer just infrastructure. In 2026 it supports AI workloads, data pipelines and integration at scale. We help organisations design cloud systems with attention to cost, security, data sovereignty and operational readiness. On the AI side we take a practical approach: clear use case first, suitable data, human oversight where required and honest testing before any production rollout. We do not overstate AI capability.'
      },
      {
        icon:  'git-branch',
        bg:    'rgba(20,184,166,0.12)',
        color: '#2DD4BF',
        title: 'System Integration and APIs',
        short: 'Connect your platforms, data and workflows so teams stop duplicating effort and working around broken handoffs between systems.',
        detail: 'API design and development · CRM and ERP connectivity · SaaS platform integration · Event driven architecture · Data synchronisation',
        long:   'Most organisations run several systems that were never designed to talk to each other. We design integrations to be observable, maintainable and well documented. Our work covers API development, third-party platform connectivity, data synchronisation and event-driven patterns. We focus on building integrations your team can operate and extend without us after delivery.'
      }
    ]
  },

  process: {
    tag:      'How We Work',
    title:    'No Black Boxes.\nEver.',
    subtitle: 'You always know what is being built, why it matters and what comes next.',
    steps: [
      { number: '01', title: 'Understand',  desc: 'Business context, users, constraints, desired outcomes. We ask what success looks like in practical terms — not technical ones.', icon: 'search'  },
      { number: '02', title: 'Design',      desc: 'Architecture, system flows, delivery milestones, risk notes. Written for both technical and non-technical stakeholders.',          icon: 'pencil'  },
      { number: '03', title: 'Build',       desc: 'Iterative sprints with regular demos. Clear milestones, working software, and no surprises at the end of a billing cycle.',        icon: 'code-2'  },
      { number: '04', title: 'Deliver',     desc: 'Deployment, handover, documentation and ongoing support. We stay available — because software does not end at launch.',           icon: 'rocket'  }
    ]
  },

  about: {
    tag:   'About Us',
    quote: '"We built Teacup Digital because we kept seeing the same problem: organisations paying large consultancies, getting junior teams, and wondering why the project was over budget and late."',
    title: 'Senior Engineering Without\nthe Big Consultancy Overhead',
    desc:  'We are a small, senior-led team with backgrounds in enterprise software delivery, cloud platforms and complex system integration. Some of our engineers have experience from global cloud and enterprise technology environments and bring that practical knowledge directly to client work.\n\nWe keep our team intentionally lean. That means you work directly with the engineers building your system — not account managers or coordinators. When a project needs more capacity, we scale through trusted engineering partners while keeping senior technical ownership with our core team.',
    bullets: [
      'Senior technical ownership at every stage of delivery',
      'Flexible capacity through trusted engineering partners when needed',
      'Lower overhead than large consulting models',
      'Clear accountability across discovery, design and implementation'
    ],
    cta: 'Start a Conversation'
  },

  technologies: {
    title:    'Technologies We Work With',
    subtitle: 'Selected for the problem — not the popularity.',
    categories: [
      {
        name:  'Frontend',
        icon:  'layout-dashboard',
        color: '#818CF8',
        bg:    'rgba(99,102,241,0.12)',
        items: ['React', 'Next.js', 'TypeScript']
      },
      {
        name:  'Backend',
        icon:  'server',
        color: '#60A5FA',
        bg:    'rgba(59,130,246,0.12)',
        items: ['Node.js', 'Python', 'GraphQL', 'Redis']
      },
      {
        name:  'Cloud & DevOps',
        icon:  'cloud',
        color: '#2DD4BF',
        bg:    'rgba(20,184,166,0.12)',
        items: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
      },
      {
        name:  'Data & AI',
        icon:  'database',
        color: '#A78BFA',
        bg:    'rgba(139,92,246,0.12)',
        items: ['PostgreSQL', 'OpenAI', 'LangChain', 'Python']
      }
    ]
  },

  contact: {
    tag:      'Get In Touch',
    title:    'Have a Complex Digital\nProblem to Solve?',
    subtitle: 'Talk to a senior engineer before you commit to a build. We will help you clarify the problem, explore options and design a practical path forward — with no commitment required.',
    details: [
      { icon: 'mail',    text: 'contact@teacupdigital.com.au', href: 'mailto:contact@teacupdigital.com.au' },
      { icon: 'clock',   text: 'Response within one business day'           },
      { icon: 'video',   text: 'Free 60-minute consultation included'       },
      { icon: 'map-pin', text: 'Sydney, Australia. Remote and on-site engagements.' }
    ],
    form: {
      name:    'Name',
      org:     'Organisation',
      email:   'Email',
      phone:   'Phone',
      message: 'What do you need help with?',
      submit:  'Send Message',
      success: 'Thanks {name} — we have received your message and will be in touch within one business day.',
      error:   'Please complete your name, email and message.'
    }
  },

  footer: {
    tagline: 'Senior software consulting and engineering for organisations.',
    email:   'contact@teacupdigital.com.au',
    social: [
      { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/company/teacupdigital' },
      { name: 'GitHub',   icon: 'github',   url: 'https://github.com/teacupdigital'              }
    ],
    columns: {
      company: {
        title: 'Company',
        links: [
          { label: 'Services',    href: '#services' },
          { label: 'How We Work', href: '#process'  },
          { label: 'About',       href: '#about'    },
          { label: 'Contact',     href: '#contact'  }
        ]
      },
      services: {
        title: 'Services',
        links: [
          { label: 'Consulting and Solution Design',  href: '#services' },
          { label: 'Software Design and Development', href: '#services' },
          { label: 'Cloud and AI Engineering',        href: '#services' },
          { label: 'System Integration and APIs',     href: '#services' }
        ]
      }
    }
  }
};

/* ══════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  setBrand();
  setNav();
  setHero();
  setTrust();
  setServices();
  setProcess();
  setAbout();
  setTechnologies();
  setContact();
  setFooter();

  lucide.createIcons();
  initScrollReveal();
  initNavScroll();
  initHamburger();
  initContactForm();
  initServiceAccordion();
});

/* ── Brand & Nav ──────────────────────────────────────────── */
function setBrand() {
  document.querySelectorAll('.brand-prefix').forEach(el => el.textContent = SITE.brand.prefix);
  document.querySelectorAll('.brand-suffix').forEach(el => el.textContent = SITE.brand.suffix);
}
function setNav() {
  document.querySelectorAll('[data-nav]').forEach(el => {
    const k = el.getAttribute('data-nav');
    if (SITE.nav[k]) el.textContent = SITE.nav[k];
  });
}

/* ── Hero ─────────────────────────────────────────────────── */
function setHero() {
  document.querySelector('.hero-label').textContent = SITE.hero.label;
  document.querySelector('.hero-title').innerHTML =
    SITE.hero.title + `<span class="text-gradient">${SITE.hero.titleEnd}</span>`;
  document.querySelector('.hero-sub').textContent = SITE.hero.subtitle;
  document.querySelector('.hero-primary-cta').textContent = SITE.hero.primaryCta;
  document.querySelector('.hero-secondary-cta').innerHTML =
    `${SITE.hero.secondaryCta}&thinsp;<i data-lucide="arrow-right" style="width:0.875rem;height:0.875rem;display:inline-block;vertical-align:middle"></i>`;
}

/* ── Trust Strip ──────────────────────────────────────────── */
function setTrust() {
  const wrap = document.getElementById('trust-items');
  SITE.trust.forEach((t, i) => {
    if (i > 0) {
      const div = document.createElement('div');
      div.className = 'trust-divider';
      wrap.appendChild(div);
    }
    const item = document.createElement('div');
    item.className = 'trust-item';
    item.innerHTML = `
      <div class="trust-icon-wrap">
        <i data-lucide="${t.icon}" style="width:1.25rem;height:1.25rem;color:#818CF8"></i>
      </div>
      <div>
        <div class="trust-title">${t.title}</div>
        <div class="trust-desc">${t.desc}</div>
      </div>`;
    wrap.appendChild(item);
  });
}

/* ── Services ─────────────────────────────────────────────── */
function setServices() {
  document.querySelector('.services-tag').textContent   = SITE.services.tag;
  document.querySelector('.services-title').textContent = SITE.services.title;
  document.querySelector('.services-sub').textContent   = SITE.services.subtitle;

  const grid = document.getElementById('services-grid');
  SITE.services.items.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = `service-card reveal reveal-d${(i % 3) + 1}`;
    card.innerHTML = `
      <div class="service-header" role="button" tabindex="0" aria-expanded="false">
        <div class="service-icon-wrap" style="background:${s.bg}">
          <i data-lucide="${s.icon}" style="width:1.3rem;height:1.3rem;color:${s.color}"></i>
        </div>
        <div class="service-header-text">
          <div class="service-name">${s.title}</div>
          <div class="service-short">${s.short}</div>
        </div>
        <div class="service-toggle">
          <i data-lucide="chevron-down" style="width:1rem;height:1rem;color:var(--text-3)"></i>
        </div>
      </div>
      <div class="service-body" aria-hidden="true">
        <p class="service-long">${s.long}</p>
        <div class="service-detail-tags">${s.detail}</div>
      </div>`;
    grid.appendChild(card);
  });
}

/* ── Services accordion ───────────────────────────────────── */
function initServiceAccordion() {
  document.addEventListener('click', e => {
    const header = e.target.closest('.service-header');
    if (!header) return;
    const card    = header.closest('.service-card');
    const body    = card.querySelector('.service-body');
    const chevron = header.querySelector('[data-lucide="chevron-down"]');
    const isOpen  = card.classList.contains('open');

    // close all
    document.querySelectorAll('.service-card.open').forEach(c => {
      c.classList.remove('open');
      c.querySelector('.service-body').style.maxHeight = '0';
      const ch = c.querySelector('[data-lucide="chevron-down"]');
      if (ch) ch.style.transform = '';
      c.querySelector('.service-header').setAttribute('aria-expanded', 'false');
      c.querySelector('.service-body').setAttribute('aria-hidden', 'true');
    });

    if (!isOpen) {
      card.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
      if (chevron) chevron.style.transform = 'rotate(180deg)';
      header.setAttribute('aria-expanded', 'true');
      body.setAttribute('aria-hidden', 'false');
    }
  });

  // keyboard support
  document.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const header = e.target.closest('.service-header');
    if (header) { e.preventDefault(); header.click(); }
  });
}

/* ── Process ──────────────────────────────────────────────── */
function setProcess() {
  document.querySelector('.process-tag').textContent   = SITE.process.tag;
  document.querySelector('.process-title').textContent = SITE.process.title;
  document.querySelector('.process-sub').textContent   = SITE.process.subtitle;

  const track = document.getElementById('process-track');
  SITE.process.steps.forEach((s, i) => {
    const step = document.createElement('div');
    step.className = `pstep reveal reveal-d${i + 1}`;
    step.innerHTML = `
      <div class="pstep-num">${s.number}</div>
      <div class="pstep-icon">
        <i data-lucide="${s.icon}" style="width:1.25rem;height:1.25rem;color:#818CF8"></i>
      </div>
      <div class="pstep-title">${s.title}</div>
      <div class="pstep-desc">${s.desc}</div>`;
    track.appendChild(step);

    if (i < SITE.process.steps.length - 1) {
      const arrow = document.createElement('div');
      arrow.className = 'pstep-arrow';
      arrow.innerHTML = `<i data-lucide="chevron-right" style="width:1.25rem;height:1.25rem;color:var(--text-3)"></i>`;
      track.appendChild(arrow);
    }
  });
}

/* ── About ────────────────────────────────────────────────── */
function setAbout() {
  document.querySelector('.about-tag').textContent   = SITE.about.tag;
  document.querySelector('.about-quote').textContent = SITE.about.quote;
  document.querySelector('.about-title').textContent = SITE.about.title;
  document.querySelector('.about-cta').textContent   = SITE.about.cta;

  const body = document.querySelector('.about-body');
  body.innerHTML = SITE.about.desc.split('\n\n').map(p => `<p>${p}</p>`).join('');

  const ul = document.getElementById('about-bullets');
  SITE.about.bullets.forEach(b => {
    const li = document.createElement('li');
    li.className = 'about-bullet';
    li.innerHTML = `<span class="bullet-icon"><i data-lucide="check" style="width:0.7rem;height:0.7rem"></i></span>${b}`;
    ul.appendChild(li);
  });
}

/* ── Technologies ─────────────────────────────────────────── */
function setTechnologies() {
  document.querySelector('.tech-title').textContent = SITE.technologies.title;
  document.querySelector('.tech-sub').textContent   = SITE.technologies.subtitle;
  const wrap = document.getElementById('tech-categories');
  SITE.technologies.categories.forEach((cat, i) => {
    const card = document.createElement('div');
    card.className = `tech-cat-card reveal reveal-d${i + 1}`;
    card.innerHTML = `
      <div class="tech-cat-header">
        <div class="tech-cat-icon" style="background:${cat.bg}">
          <i data-lucide="${cat.icon}" style="width:1rem;height:1rem;color:${cat.color}"></i>
        </div>
        <span class="tech-cat-name" style="color:${cat.color}">${cat.name}</span>
      </div>
      <div class="tech-cat-items">
        ${cat.items.map(name => `<span class="tech-tag">${name}</span>`).join('')}
      </div>`;
    wrap.appendChild(card);
  });
}

/* ── Contact ──────────────────────────────────────────────── */
function setContact() {
  document.querySelector('.contact-tag').textContent   = SITE.contact.tag;
  document.querySelector('.contact-title').textContent = SITE.contact.title;
  document.querySelector('.contact-sub').textContent   = SITE.contact.subtitle;
  document.querySelector('.submit-btn').textContent    = SITE.contact.form.submit;

  const labels = { name: SITE.contact.form.name, org: SITE.contact.form.org,
                   email: SITE.contact.form.email, phone: SITE.contact.form.phone,
                   message: SITE.contact.form.message };
  document.querySelectorAll('[data-label]').forEach(el => {
    const k = el.getAttribute('data-label');
    if (labels[k]) el.textContent = labels[k];
  });

  const det = document.getElementById('contact-details');
  SITE.contact.details.forEach(d => {
    const row = document.createElement('div');
    row.className = 'contact-detail';
    const inner = d.href ? `<a href="${d.href}" style="color:inherit;text-decoration:none">${d.text}</a>` : d.text;
    row.innerHTML = `<span class="detail-icon"><i data-lucide="${d.icon}" style="width:0.95rem;height:0.95rem"></i></span>${inner}`;
    det.appendChild(row);
  });
}

/* ── Footer ───────────────────────────────────────────────── */
function setFooter() {
  document.querySelector('.footer-tagline').textContent    = SITE.footer.tagline;
  document.querySelector('.footer-email-link').textContent = SITE.footer.email;
  document.querySelector('.footer-email-link').href        = `mailto:${SITE.footer.email}`;
  document.querySelector('.footer-copyright').textContent  =
    `© ${new Date().getFullYear()} ${SITE.brand.prefix} ${SITE.brand.suffix}. All rights reserved.`;

  const social = document.getElementById('footer-social');
  SITE.footer.social.forEach(s => {
    const a = document.createElement('a');
    a.href = s.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', s.name); a.className = 'footer-social-icon';
    a.innerHTML = `<i data-lucide="${s.icon}" style="width:0.95rem;height:0.95rem"></i>`;
    social.appendChild(a);
  });

  ['company', 'services'].forEach(key => {
    const ul = document.getElementById(`footer-${key}-links`);
    if (!ul) return;
    SITE.footer.columns[key].links.forEach(l => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${l.href}">${l.label}</a>`;
      ul.appendChild(li);
    });
  });
}

/* ── Scroll Reveal ────────────────────────────────────────── */
function initScrollReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ── Navbar ───────────────────────────────────────────────── */
function initNavScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () =>
    nav.classList.toggle('scrolled', window.scrollY > 40), { passive: true });
}

/* ── Hamburger ────────────────────────────────────────────── */
function initHamburger() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('nav-menu');
  btn.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => menu.classList.remove('open')));
}

/* ── Contact Form ─────────────────────────────────────────── */
function initContactForm() {
  const form   = document.getElementById('contactForm');
  const msgEl  = document.getElementById('formMsg');
  const tyWrap = document.getElementById('thankYou');
  const tyText = document.getElementById('thankYouText');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const name    = document.getElementById('fname').value.trim();
    const org     = document.getElementById('forg').value.trim();
    const email   = document.getElementById('femail').value.trim();
    const phone   = document.getElementById('fphone').value.trim();
    const message = document.getElementById('fmessage').value.trim();
    if (!name || !email || !message) { showMsg(msgEl, SITE.contact.form.error, 'error'); return; }

    const btn = form.querySelector('.submit-btn');
    btn.disabled = true;
    showMsg(msgEl, 'Sending…', 'info');

    try {
      const res  = await fetch('/api/mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: [`name=${encodeURIComponent(name)}`, `org=${encodeURIComponent(org)}`,
               `email=${encodeURIComponent(email)}`, `phone=${encodeURIComponent(phone)}`,
               `message=${encodeURIComponent(message)}`].join('&')
      });
      const text = await res.text();
      if (res.ok) {
        msgEl.textContent = '';
        form.reset(); form.classList.add('hidden');
        tyText.textContent = SITE.contact.form.success.replace('{name}', name);
        tyWrap.classList.remove('hidden');
      } else {
        showMsg(msgEl, text || 'Something went wrong. Please try again.', 'error');
        btn.disabled = false;
      }
    } catch {
      showMsg(msgEl, 'Unable to send. Please email us directly.', 'error');
      btn.disabled = false;
    }
  });
}

function showMsg(el, text, type) {
  el.textContent = text;
  el.className = `form-msg msg-${type}`;
  if (type === 'error') setTimeout(() => { el.textContent = ''; }, 5000);
}

window.resetContactForm = () => {
  document.getElementById('thankYou').classList.add('hidden');
  document.getElementById('contactForm').classList.remove('hidden');
};

window.SITE = SITE;
