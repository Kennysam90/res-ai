// Teams, technologies and frequently asked questions.
//
// The team list is organised by discipline, following the areas of work the
// company has named. Edit the names and descriptions here to match how the
// company is actually organised.
import type { Faq, Team, TechGroup } from '../types'

export const TEAMS: Team[] = [
  {
    slug: 'leadership',
    name: 'Leadership',
    icon: 'iconoir-rocket',
    summary: 'Sets the direction of the company and its products, and decides what ships.',
    does: ['Company and product strategy', 'Partnerships and press', 'Final release decisions'],
    links: [{ label: 'Meet the founder', to: '/founder' }],
  },
  {
    slug: 'ai',
    name: 'AI & machine learning',
    icon: 'iconoir-brain',
    summary: 'Builds the assistants, visual AI and agents that run inside every product.',
    does: ['Assistants that act for the user', 'Try-on and other visual AI', 'Voice interfaces', 'Evaluation and safety limits'],
    links: [{ label: 'AI research lab', to: '/labs/ai' }, { label: 'AI development', to: '/services/ai-development' }],
  },
  {
    slug: 'robotics',
    name: 'Robotics & embedded systems',
    icon: 'iconoir-cpu',
    summary: 'Works with Arduino, Raspberry Pi and ESP32 to connect software to sensors and motors.',
    does: ['Prototypes and circuits', 'Firmware in C, C++ and Python', 'Vision on the device', 'Links between devices and apps'],
    links: [{ label: 'Robotics lab', to: '/labs/robotics' }, { label: 'Robotics service', to: '/services/robotics-embedded' }],
  },
  {
    slug: '3d',
    name: '3D, animation & design',
    icon: 'iconoir-box-3d-center',
    summary: 'Models, rigs, animates and renders in Blender, and designs every interface.',
    does: ['3D characters and models', 'Animation and post-production', 'Product visualisation', 'Interface and brand design in Figma'],
    links: [{ label: '3D & animation lab', to: '/labs/3d-animation' }, { label: 'Design service', to: '/services/ui-ux-design' }],
  },
  {
    slug: 'web',
    name: 'Web & SaaS engineering',
    icon: 'iconoir-code',
    summary: 'Builds the websites, dashboards and subscription platforms behind each product.',
    does: ['React front ends', 'Django and Node.js back ends', 'Plans, billing and API keys', 'Documentation sites'],
    links: [{ label: 'Web development', to: '/services/web-development' }, { label: 'SaaS development', to: '/services/saas-development' }],
  },
  {
    slug: 'mobile',
    name: 'Mobile engineering',
    icon: 'iconoir-smartphone-device',
    summary: 'Ships iOS and Android apps from one React Native codebase.',
    does: ['React Native and Expo apps', 'Payments, camera and notifications', 'Shared accounts with the web'],
    links: [{ label: 'Mobile app development', to: '/services/mobile-app-development' }],
  },
  {
    slug: 'platform',
    name: 'Platform & operations',
    icon: 'iconoir-server',
    summary: 'Keeps everything deployed, fast, monitored and secure.',
    does: ['Servers, Nginx and Cloudflare', 'Deployment pipelines', 'Monitoring and watchdogs', 'Backups and security checks'],
    links: [{ label: 'API & backend engineering', to: '/services/api-development' }, { label: 'Vending Monitor', to: '/portfolio/vending-monitor' }],
  },
  {
    slug: 'support',
    name: 'Product support & community',
    icon: 'iconoir-headset-help',
    summary: 'Answers customers, writes the documentation and runs our channels.',
    does: ['Customer support for each product', 'Documentation and tutorials', 'YouTube and social channels'],
    links: [{ label: 'Documentation', to: '/docs' }, { label: 'Updates', to: '/newsletter' }],
  },
]

export const TECH: TechGroup[] = [
  {
    name: 'AI',
    icon: 'iconoir-brain',
    intro: 'What our assistants, try-on and agents are built from.',
    items: [
      { name: 'Large language models', use: 'The reasoning behind assistants in Adorė and Apsuni, and the agents in Brainbox.' },
      { name: 'Image and video models', use: 'Photo and video try-on in Adorė.' },
      { name: 'Speech to text', use: 'Voice input: describing an idea out loud in Apsuni.' },
      { name: 'Python and FastAPI', use: 'Services that sit between a model and a product.' },
      { name: 'WebSockets', use: 'Live, two-way conversations with an assistant.' },
    ],
  },
  {
    name: 'Web',
    icon: 'iconoir-code',
    intro: 'The front ends and back ends of our sites and dashboards.',
    items: [
      { name: 'React', use: 'Interfaces for every website and dashboard we ship, including this one.' },
      { name: 'TypeScript', use: 'Typed code for web and mobile apps.' },
      { name: 'Vite', use: 'Fast builds and pre-rendered pages.' },
      { name: 'Django & Django REST Framework', use: 'APIs, admin tools and billing.' },
      { name: 'Node.js & Express', use: 'APIs and real-time services.' },
      { name: 'Three.js', use: 'Live 3D scenes in the browser.' },
    ],
  },
  {
    name: 'Mobile',
    icon: 'iconoir-smartphone-device',
    intro: 'One codebase for iOS and Android.',
    items: [
      { name: 'React Native', use: 'The Adorė app and the mobile projects in our public code.' },
      { name: 'Expo', use: 'Builds, updates and device features without separate native projects.' },
    ],
  },
  {
    name: 'Robotics & hardware',
    icon: 'iconoir-cpu',
    intro: 'The boards and languages of the robotics lab.',
    items: [
      { name: 'Arduino', use: 'Real-time control of motors, servos and sensors.' },
      { name: 'Raspberry Pi', use: 'Cameras, networking and AI on the device.' },
      { name: 'ESP32', use: 'Low-cost devices with Wi-Fi and Bluetooth.' },
      { name: 'C, C++ and Python', use: 'Firmware on microcontrollers, and Python on the Pi.' },
    ],
  },
  {
    name: '3D & design',
    icon: 'iconoir-box-3d-center',
    intro: 'From a sketch to a rendered frame.',
    items: [
      { name: 'Blender', use: 'Modelling, rigging, animation and rendering.' },
      { name: 'Cycles and Eevee', use: 'Rendering: Cycles for realism, Eevee for speed.' },
      { name: 'glTF', use: 'A compact format for 3D models on the web and in apps.' },
      { name: 'Figma', use: 'Interface design, and the source for Figma to code in Apsuni.' },
    ],
  },
  {
    name: 'Data & infrastructure',
    icon: 'iconoir-server',
    intro: 'Where the products run.',
    items: [
      { name: 'PostgreSQL', use: 'The main database behind our Django products.' },
      { name: 'MongoDB', use: 'Document data in our Node.js APIs.' },
      { name: 'Docker', use: 'Repeatable environments and deployments.' },
      { name: 'Nginx and Gunicorn', use: 'Serving sites and APIs on Ubuntu.' },
      { name: 'Cloudflare', use: 'DNS, caching and protection in front of every site.' },
      { name: 'GitHub Actions', use: 'Automated deployment and desktop app releases.' },
      { name: 'Flutterwave and Paystack', use: 'Card, bank transfer and USSD payments.' },
    ],
  },
]

export const FAQS: Faq[] = [
  { q: 'What is Resbrotherx?', a: 'Resbrotherx is a technology company founded by Patrick Francis Ugochukwu. It builds AI applications, robotics, 3D animation, mobile apps, web apps and SaaS platforms, and is the company behind Apsuni, AnimeDoc and Adorė.' },
  { q: 'Who is the founder of Resbrotherx?', a: 'Resbrotherx was founded by Patrick Francis Ugochukwu, who is also its chief executive officer. He is a software engineer and is also the CEO of Apsuni. You can read more on the [founder page](/founder).' },
  { q: 'Who is Patrick Francis Ugochukwu?', a: 'Patrick Francis Ugochukwu, also known as Patrick Ugochukwu and Francis Patrick Ugochukwu, is a software engineer and the founder and CEO of Resbrotherx, the technology company behind Apsuni, AnimeDoc and Adorė. He is also the CEO of Apsuni.' },
  { q: 'What products has Resbrotherx built?', a: 'Resbrotherx owns and runs [Apsuni](/products/apsuni) (websites and mobile apps built, hosted and deployed for you), [AnimeDoc](/products/animedoc) (a streaming catalogue API and website) and [Adorė](/products/adore) (made-to-measure African fashion with AI try-on). [Brainbox](/products/brainbox), an AI operations platform, is in development.' },
  { q: 'What does Resbrotherx work on?', a: 'Four fields: artificial intelligence, robotics with Arduino and Raspberry Pi, 3D modelling and animation in Blender, and software, meaning mobile apps, web applications and SaaS platforms.' },
  { q: 'Is ResBrotherX the same company as Resbrotherx?', a: 'Yes. The name is written both Resbrotherx and ResBrotherX. The registered business name is Resbrotherx Technologies.' },
  { q: 'Where is Resbrotherx based?', a: 'Resbrotherx is based in Enugu, Enugu State, Nigeria, and its products are used online from anywhere.' },
  { q: 'Is Resbrotherx a registered business?', a: 'Yes. Resbrotherx Technologies is a business name registered with the Corporate Affairs Commission of Nigeria in November 2026, for computer programming, consultancy and related activities.' },
  { q: 'When was Resbrotherx started?', a: 'Its founder has been publishing software under the Resbrotherx name since 2020. The business name Resbrotherx Technologies was registered in November 2026.' },
  { q: 'Does Resbrotherx build software for other companies?', a: 'Yes. For a website or mobile app delivered from a template or a Figma design, start with [Apsuni](/products/apsuni). For anything else, including AI, robotics and 3D work, use the [contact page](/contact).' },
  { q: 'Does Resbrotherx work on robotics?', a: 'Yes. Robotics is the newest lab at Resbrotherx. The work uses Arduino, Raspberry Pi and ESP32 boards to connect software to sensors and motors. See the [robotics lab](/labs/robotics).' },
  { q: 'Does Resbrotherx do 3D animation?', a: 'Yes. The team models, rigs, animates and renders in Blender, and builds 3D that runs in the browser. See the [3D and animation lab](/labs/3d-animation).' },
  { q: 'Where is the documentation for Resbrotherx products?', a: 'Guides for each product are in the [documentation](/docs). The full AnimeDoc API reference is at animedoc.cloud/docs.' },
  { q: 'How do I contact Resbrotherx?', a: 'Use the [contact page](/contact). For help with a specific product, write to that product\'s support address: support@apsuni.com for Apsuni and support@animedoc.cloud for AnimeDoc.' },
  { q: 'How can I follow Resbrotherx?', a: 'Subscribe to the Resbrotherx channel on YouTube, follow the [blog](/blog), or add the RSS feed at /feed.xml to your reader.' },
  { q: 'Is Resbrotherx hiring?', a: 'There are no listed openings at the moment. People who work in AI, robotics, 3D, web or mobile engineering are welcome to introduce themselves through the [careers page](/careers).' },
]
