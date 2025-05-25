const SITE_CONTENT = {
    // Navigation
    nav: {
        brand: {
            prefix: "Teacup",
            suffix: "Digital"
        },
        links: {
            home: "Home",
            services: "Services",
            about: "About Us",
            contact: "Contact"
        }
    },

    // Hero Section
    hero: {
        title: "Code. Build. Scale.",
        subtitle: "From MVP to market leader. We build scalable tech solutions that startups can actually afford.",
        cta: "Get Your Free Tech Audit"
    },

    // Services Section
    services: {
        title: "What We Build",
        subtitle: "Full-stack development with a startup mindset. Fast, efficient, and cost-effective.",
        items: [
            {
                title: "AI-Powered Solutions",
                description: "Custom AI integrations, chatbots, and automation tools that give you enterprise-grade capabilities without the enterprise price tag.",
                icon: "lightning"
            },
            {
                title: "Web & Mobile Apps",
                description: "From sleek landing pages to complex web applications. We build responsive, scalable solutions that grow with your user base.",
                icon: "code"
            },
            {
                title: "Tech Strategy",
                description: "Not sure what tech stack to use? We'll help you choose the right tools and architecture that won't break your budget.",
                icon: "chart"
            }
        ]
    },

    // About Section
    about: {
        title: "Why Startups Choose Us",
        description: [
            "We're a team of engineers who've built and scaled products that millions use daily. Now, we're bringing that expertise to startups at a fraction of the cost.",
            "Our approach? Start lean, iterate fast, and scale smart. We'll help you build the right features first, not the most expensive ones."
        ],
        cta: "See Our Work"
    },

    // Contact Section
    contact: {
        title: "Let's Build Your MVP",
        subtitle: "Get a free 1-hour tech consultation. We'll help you validate your idea and plan your next steps.",
        form: {
            name: {
                label: "Full Name -",
                placeholder: "e.g., Jane Doe"
            },
            email: {
                label: "Email Address",
                placeholder: "you@example.com"
            },
            company: {
                label: "Company (Optional)",
                placeholder: "Your Company Inc."
            },
            message: {
                label: "Your Message",
                placeholder: "Hi! I'm looking to build a [web app/mobile app/AI tool] ... "
            },
            submit: "Get Free Tech Audit",
            success: "Thanks {name}! We'll review your project and get back within 24 hours to schedule your free tech audit.",
            error: "Please fill out all required fields."
        }
    },

    // Footer
    footer: {
        tagline: "Building the future, one startup at a time.",
        copyright: "Teacup Digital. All rights reserved.",
        credits: "Crafted with ❤️ by startup builders",
        social: {
            facebook: "Facebook",
            twitter: "Twitter",
            linkedin: "LinkedIn"
        }
    }
};

// Function to update content
function updateContent() {
    // Navigation
    document.querySelector('.brand-prefix').textContent = SITE_CONTENT.nav.brand.prefix;
    document.querySelector('.brand-suffix').textContent = SITE_CONTENT.nav.brand.suffix;
    
    // Update navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkType = link.getAttribute('data-link');
        if (SITE_CONTENT.nav.links[linkType]) {
            link.textContent = SITE_CONTENT.nav.links[linkType];
        }
    });
    
    // Hero
    document.querySelector('.hero-title').textContent = SITE_CONTENT.hero.title;
    document.querySelector('.hero-subtitle').textContent = SITE_CONTENT.hero.subtitle;
    document.querySelector('.hero-cta').textContent = SITE_CONTENT.hero.cta;

    // Services
    document.querySelector('.services-title').textContent = SITE_CONTENT.services.title;
    document.querySelector('.services-subtitle').textContent = SITE_CONTENT.services.subtitle;

    // Populate services grid
    const servicesGrid = document.getElementById('services-grid');
    servicesGrid.innerHTML = ''; // Clear existing content
    SITE_CONTENT.services.items.forEach((service, index) => {
        const serviceElement = document.createElement('div');
        serviceElement.className = `theme-card p-8 shadow-2xl fade-in-up delay-${(index + 2) * 100}`;
        serviceElement.innerHTML = `
            <div class="flex justify-center mb-6">
                <svg class="w-16 h-16 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${getIconPath(service.icon)}"></path>
                </svg>
            </div>
            <h3 class="text-2xl font-semibold text-white mb-3 text-center">${service.title}</h3>
            <p class="text-gray-400 text-center leading-relaxed">${service.description}</p>
        `;
        servicesGrid.appendChild(serviceElement);
    });

    // About
    document.querySelector('.about-title').textContent = SITE_CONTENT.about.title;
    document.querySelector('.about-description').innerHTML = SITE_CONTENT.about.description.map(p => `<p>${p}</p>`).join('');
    document.querySelector('.about-cta').textContent = SITE_CONTENT.about.cta;

    // Contact
    document.querySelector('.contact-title').textContent = SITE_CONTENT.contact.title;
    document.querySelector('.contact-subtitle').textContent = SITE_CONTENT.contact.subtitle;

    // Update form labels and placeholders
    const formFields = ['name', 'email', 'company', 'message'];
    formFields.forEach(field => {
        const label = document.querySelector(`.contact-form-label[data-label="${field}"]`);
        const input = document.getElementById(field);
        if (label && input) {
            label.textContent = SITE_CONTENT.contact.form[field].label;
            input.placeholder = SITE_CONTENT.contact.form[field].placeholder;
        }
    });

    // Update submit button
    const submitButton = document.querySelector('.contact-form-submit');
    if (submitButton) {
        submitButton.textContent = SITE_CONTENT.contact.form.submit;
    }

    // Footer
    document.querySelector('.footer-tagline').textContent = SITE_CONTENT.footer.tagline;
    document.querySelector('.footer-copyright').textContent = `© ${new Date().getFullYear()} ${SITE_CONTENT.footer.copyright}`;
    document.querySelector('.footer-credits').textContent = SITE_CONTENT.footer.credits;
}

// Helper function to get icon paths
function getIconPath(icon) {
    const paths = {
        lightning: "M13 10V3L4 14h7v7l9-11h-7z",
        code: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        chart: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
    };
    return paths[icon] || paths.lightning;
}

// Initialize content when DOM is loaded
document.addEventListener('DOMContentLoaded', updateContent); 