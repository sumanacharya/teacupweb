export type SiteNavLinkKey = 'home' | 'services' | 'about' | 'contact';

export type SiteServiceItem = {
  title: string;
  description: string;
  iconName: 'network' | 'sparkles' | 'brain-circuit';
  gradientClass: string;
};

export const SITE_CONTENT = {
  brand: {
    prefix: 'Teacup',
    suffix: 'Digital',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Get Free Consultation',
  },
  hero: {
    title: 'Enterprise Tech Solutions for Startups',
    subtitle:
      'Led by industry veterans, we bring enterprise-grade technology and innovation to growing businesses. Get a free 1-hour strategy session with our tech leaders.',
    cta: 'Book Free Strategy Session',
  },
  services: {
    title: 'Our Services',
    subtitle: 'Enterprise-grade solutions at startup-friendly prices',
    items: [
      {
        title: 'Enterprise Architecture',
        description:
          "Scalable, secure, and robust systems designed by tech leaders who've built solutions handling millions of users. Future-proof your technology stack.",
        iconName: 'network',
        gradientClass: 'from-blue-500 to-cyan-500',
      },
      {
        title: 'Digital Innovation',
        description:
          'Transform your business with cutting-edge technology. Our team of industry veterans helps you leverage the latest innovations to stay ahead of the competition.',
        iconName: 'sparkles',
        gradientClass: 'from-orange-500 to-yellow-500',
      },
      {
        title: 'AI & Machine Learning',
        description:
          'Custom AI solutions that drive growth and efficiency. From predictive analytics to intelligent automation, we build AI systems that deliver real business value.',
        iconName: 'brain-circuit',
        gradientClass: 'from-purple-500 to-pink-500',
      },
    ],
  },
  about: {
    title: 'Our Approach',
    description:
      "We combine enterprise expertise with startup agility to deliver exceptional results. Our team of tech leaders has built and scaled systems handling millions of users, and we bring that same level of excellence to every project. What sets us apart is our commitment to understanding your business goals and delivering solutions that drive real growth. We don't just build technology, we build partnerships that help your business thrive in the digital age.",
    cta: 'Talk to our team',
  },
  contact: {
    title: 'Start Your Digital Transformation',
    subtitle:
      'Book a free 1-hour strategy session with our tech leaders. We\'ll help you build the right technology solution for your business growth.',
    form: {
      name: 'Your Name',
      email: 'Your Email',
      message: 'Tell us about your business goals',
      submit: 'Send Message',
      sending: 'Sending...',
      genericError: 'Failed to send. Please try again later.',
      validationError: 'Please fill in all fields',
      thankYouHeading: 'Thank You!',
      thankYouBody:
        "We've received your message and will get back to you as soon as possible.",
      sendAnother: 'Send another message',
    },
  },
  footer: {
    email: 'contact@teacupdigital.com.au',
    credits: '',
  },
} as const;
