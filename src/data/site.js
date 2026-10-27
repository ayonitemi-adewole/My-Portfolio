import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa6';
import {
  Code2,
  LayoutDashboard,
  Smartphone,
  PenTool,
  Gauge,
  Wrench,
} from 'lucide-react';

export const profile = {
  name: 'Ayonitemi Adewole',
  shortName: 'AYO',
  role: 'Software Developer',
  location: 'Lagos, Nigeria',
  email: 'ayonitemiadewole16@gmail.com',
  phone: '+234 812 614 3347',
  phoneHref: 'tel:+2348126143347',
  birthday: '06 June',
  yearsExperience: '3+',
  available: true,
  roles: ['Front-End Developer', 'Web App Developer', 'Mobile App Developer', 'UI Engineer'],
  tagline:
    'I turn ideas into clean, functional digital products — modern, user-friendly web apps that bridge creativity and engineering.',
  bio: [
    "I'm a software developer based in Lagos, Nigeria, focused on building fast, accessible and good-looking interfaces. I studied Software Engineering at Dominion University and sharpened my front-end craft at SQI College of ICT.",
    'Today I work as a Front-End Developer at ICMA Professional Services, and I build products on the side — from crypto portfolio trackers to agro-investment platforms. I care about the small details: smooth motion, sensible states, and code that the next developer will thank me for.',
  ],
};

export const socials = [
  { icon: FaWhatsapp, href: 'https://wa.link/yq00wz', label: 'WhatsApp' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/ayonitemi-adewole-adedamola', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/_.ayonitemi/', label: 'Instagram' },
  { icon: FaGithub, href: 'https://github.com/ayonitemi-adewole', label: 'GitHub' },
];

export const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export const work = [
  {
    period: '2026 — Present',
    title: 'Front-End Developer',
    org: 'ICMA Professional Services',
    description: 'Building and maintaining responsive client-facing interfaces with React.',
    current: true,
  },
];

export const education = [
  {
    period: '2025 — Present',
    title: 'Mobile App Development',
    org: 'Online courses',
    current: true,
  },
  {
    period: '2021 — 2025',
    title: 'B.Sc. Software Engineering',
    org: 'Dominion University',
  },
  {
    period: '2024',
    title: 'Advanced Front-End Development',
    org: 'SQI College of ICT',
  },
  {
    period: '2023',
    title: 'Front-End Development',
    org: 'SQI College of ICT',
  },
];

const devicon = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-${variant}.svg`;

export const skillCategories = ['All', 'Frontend', 'Backend', 'Tools'];

export const skills = [
  {
    name: 'HTML5',
    category: 'Frontend',
    icon: devicon('html5'),
    since: 2023,
    description:
      'HTML5 is the backbone of the web. I started with it in 2023 at SQI, learning how to structure pages with semantic markup. It opened the door to building websites for me.',
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    icon: devicon('css3'),
    since: 2023,
    description:
      'CSS brought styling to life. I mastered flexbox, grid and animations, transforming plain markup into polished, responsive designs.',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    icon: devicon('javascript'),
    since: 2023,
    description:
      'JavaScript felt like magic. Introduced at SQI in 2023 and advanced in 2024, it added interactivity to my projects — DOM manipulation, async data and dynamic features.',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    icon: devicon('typescript'),
    since: 2024,
    description:
      'TypeScript keeps my larger projects honest. Vaultly, Palmvest and Transaction Visualizer are all typed end to end.',
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: devicon('react'),
    since: 2024,
    description:
      'React changed how I build. Component-based architecture and state management make complex UIs intuitive — and it powers the site you are looking at right now.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: devicon('tailwindcss'),
    since: 2024,
    description:
      'Tailwind streamlined my styling. Its utility-first approach lets me prototype quickly and keep design systems consistent.',
  },
  {
    name: 'Bootstrap',
    category: 'Frontend',
    icon: devicon('bootstrap'),
    since: 2023,
    description:
      'Bootstrap accelerated my early front-end work with ready-made components and a responsive grid.',
  },
  {
    name: 'Framer Motion',
    category: 'Frontend',
    icon: devicon('framermotion'),
    since: 2025,
    invertOnDark: true,
    description:
      'Framer Motion adds life to my UIs. I picked it up in 2025 to create smooth transitions and engaging interactions.',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    icon: devicon('nodejs'),
    since: 2024,
    description:
      "Node.js brought JavaScript to the server. I was introduced to it in 2024 and I'm steadily growing toward building full-stack applications.",
  },
  {
    name: 'Express.js',
    category: 'Backend',
    icon: devicon('express'),
    since: 2024,
    invertOnDark: true,
    description:
      'Express keeps backend work minimal. I use it to learn API design and lightweight web servers.',
  },
  {
    name: 'Firebase',
    category: 'Backend',
    icon: devicon('firebase', 'plain'),
    since: 2024,
    description:
      'Firebase is my go-to backend for products: authentication, Firestore, and hosting without the overhead.',
  },
  {
    name: 'Appwrite',
    category: 'Backend',
    icon: devicon('appwrite'),
    since: 2024,
    description:
      'Appwrite is an open-source backend-as-a-service I explore for auth, databases and storage.',
  },
  {
    name: 'Git',
    category: 'Tools',
    icon: devicon('git'),
    since: 2023,
    description:
      'Git is my version-control lifeline — branching, merging and clean history for working effectively in teams.',
  },
  {
    name: 'GitHub',
    category: 'Tools',
    icon: devicon('github'),
    since: 2023,
    invertOnDark: true,
    description:
      'GitHub is where I host repositories, review pull requests and collaborate with other developers.',
  },
  {
    name: 'VS Code',
    category: 'Tools',
    icon: devicon('vscode'),
    since: 2023,
    description:
      'VS Code is my editor of choice — extensions, integrated terminal and debugging keep my workflow fast.',
  },
];

export const services = [
  {
    icon: Code2,
    title: 'Front-End Development',
    description: 'Pixel-accurate, responsive interfaces built with React, TypeScript and Tailwind CSS.',
    points: ['Component libraries', 'Responsive layouts', 'Accessibility'],
  },
  {
    icon: LayoutDashboard,
    title: 'Web App Development',
    description: 'Dashboards and SaaS products with auth, real-time data and payments wired in.',
    points: ['Firebase / Appwrite', 'Paystack & Flutterwave', 'Data visualisation'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile experiences that feel native and share logic with the web.',
    points: ['React Native', 'Offline-friendly', 'App-store ready'],
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description: 'User-centred flows and clean visual design, prototyped before a single line of code.',
    points: ['Wireframes', 'Design systems', 'Micro-interactions'],
  },
  {
    icon: Gauge,
    title: 'Performance & SEO',
    description: 'Faster loads, better Core Web Vitals and search-friendly markup.',
    points: ['Lighthouse audits', 'Code splitting', 'Semantic HTML'],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Bug fixes, feature additions and upgrades for existing React codebases.',
    points: ['Refactoring', 'Dependency upgrades', 'Ongoing support'],
  },
];

export const process = [
  { step: '01', title: 'Discover', description: 'We talk through your goals, users and constraints so I understand what success looks like.' },
  { step: '02', title: 'Design', description: 'I map out flows and visuals, and we iterate until the direction feels right.' },
  { step: '03', title: 'Build', description: 'I develop in small, reviewable increments with a live preview link you can check any time.' },
  { step: '04', title: 'Launch', description: 'We ship, I monitor, and I stay on hand for fixes and the next round of improvements.' },
];

export const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'A landing page usually takes 1–2 weeks. A full web app with authentication and a dashboard is more like 4–8 weeks, depending on scope.',
  },
  {
    q: 'Do you work with clients outside Nigeria?',
    a: 'Yes. I work remotely and am comfortable collaborating across time zones over Slack, WhatsApp, email or video calls.',
  },
  {
    q: 'Can you work from an existing design?',
    a: 'Absolutely — send over your Figma file and I will turn it into a responsive, production-ready build.',
  },
  {
    q: 'Do you offer support after launch?',
    a: 'Yes. I offer ongoing maintenance for bug fixes, small features and dependency upgrades.',
  },
];

export const marqueeItems = [
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'Dashboards',
  'Performance',
  'SEO Optimisation',
];
