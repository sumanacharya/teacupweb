// Site content
const SITE_CONTENT = {
    brand: {
        prefix: 'Teacup',
        suffix: 'Digital'
    },
    nav: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        contact: 'Get Free Consultation'
    },
    hero: {
        title: 'Enterprise Tech Solutions for Startups',
        subtitle: 'Led by industry veterans, we bring enterprise-grade technology and innovation to growing businesses. Get a free 1-hour strategy session with our tech leaders.',
        cta: 'Book Free Strategy Session'
    },
    services: {
        title: 'Our Services',
        subtitle: 'Enterprise-grade solutions at startup-friendly prices',
        items: [
            {
                title: 'AI & Machine Learning',
                description: 'Custom AI solutions that drive growth and efficiency. From predictive analytics to intelligent automation, we build AI systems that deliver real business value.',
                icon: 'brain-circuit',
                color: 'from-purple-500 to-pink-500'
            },
            {
                title: 'Enterprise Architecture',
                description: 'Scalable, secure, and robust systems designed by tech leaders who\'ve built solutions handling millions of users. Future-proof your technology stack.',
                icon: 'network',
                color: 'from-blue-500 to-cyan-500'
            },
            {
                title: 'Digital Innovation',
                description: 'Transform your business with cutting-edge technology. Our team of industry veterans helps you leverage the latest innovations to stay ahead of the competition.',
                icon: 'sparkles',
                color: 'from-orange-500 to-yellow-500'
            }
        ]
    },
    about: {
        title: 'Our Approach',
        description: 'We combine enterprise expertise with startup agility to deliver exceptional results. Our team of tech leaders has built and scaled systems handling millions of users, and we bring that same level of excellence to every project. What sets us apart is our commitment to understanding your business goals and delivering solutions that drive real growth. We don\'t just build technology – we build partnerships that help your business thrive in the digital age.',
        cta: 'Schedule Free Strategy Session'
    },
    contact: {
        title: 'Start Your Digital Transformation',
        subtitle: 'Book a free 1-hour strategy session with our tech leaders. We\'ll help you build the right technology solution for your business growth.',
        form: {
            name: 'Your Name',
            email: 'Your Email',
            message: 'Tell us about your business goals',
            submit: 'Book Free Strategy Session',
            success: 'Thanks {name}! We\'ll be in touch shortly to schedule your free strategy session.',
            error: 'Please fill in all fields'
        }
    },
    footer: {
        tagline: 'Enterprise tech solutions for startups',
        copyright: '© 2024 Teacup Digital. All rights reserved.',
        credits: 'Built by industry veterans'
    }
};

// Initialize site content
document.addEventListener('DOMContentLoaded', () => {
    // Set brand name
    document.querySelectorAll('.brand-prefix').forEach(el => {
        el.textContent = SITE_CONTENT.brand.prefix;
    });
    document.querySelectorAll('.brand-suffix').forEach(el => {
        el.textContent = SITE_CONTENT.brand.suffix;
    });

    // Set navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        const key = link.getAttribute('data-link');
        if (key && SITE_CONTENT.nav[key]) {
            link.textContent = SITE_CONTENT.nav[key];
        }
    });

    // Set hero content
    document.querySelector('.hero-title').textContent = SITE_CONTENT.hero.title;
    document.querySelector('.hero-subtitle').textContent = SITE_CONTENT.hero.subtitle;
    document.querySelector('.hero-cta').textContent = SITE_CONTENT.hero.cta;

    // Set services content
    document.querySelector('.services-title').textContent = SITE_CONTENT.services.title;
    document.querySelector('.services-subtitle').textContent = SITE_CONTENT.services.subtitle;

    const servicesGrid = document.getElementById('services-grid');
    SITE_CONTENT.services.items.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'theme-card p-8 shadow-2xl fade-in-up hover:scale-105 transition-transform duration-300';
        serviceElement.innerHTML = `
            <div class="flex justify-center mb-6">
                <div class="w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center">
                    <i data-lucide="${service.icon}" class="w-12 h-12 text-white"></i>
                </div>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4 text-center">${service.title}</h3>
            <p class="text-gray-400 text-center leading-relaxed">${service.description}</p>
        `;
        servicesGrid.appendChild(serviceElement);
    });

    // Set about content
    document.querySelector('.about-title').textContent = SITE_CONTENT.about.title;
    document.querySelector('.about-description').textContent = SITE_CONTENT.about.description;
    document.querySelector('.about-cta').textContent = SITE_CONTENT.about.cta;

    // Set contact content
    document.querySelector('.contact-title').textContent = SITE_CONTENT.contact.title;
    document.querySelector('.contact-subtitle').textContent = SITE_CONTENT.contact.subtitle;
    
    // Set form labels
    document.querySelectorAll('.contact-form-label').forEach(label => {
        const key = label.getAttribute('data-label');
        if (key && SITE_CONTENT.contact.form[key]) {
            label.textContent = SITE_CONTENT.contact.form[key];
        }
    });
    document.querySelector('.contact-form-submit').textContent = SITE_CONTENT.contact.form.submit;

    // Set footer content
    document.querySelector('.footer-tagline').textContent = SITE_CONTENT.footer.tagline;
    document.querySelector('.footer-copyright').textContent = SITE_CONTENT.footer.copyright;
    document.querySelector('.footer-credits').textContent = SITE_CONTENT.footer.credits;

    // Initialize Lucide icons
    lucide.createIcons();
}); 