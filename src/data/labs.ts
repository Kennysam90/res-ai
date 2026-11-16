// Research areas. These pages describe what we work on and how we think about
// it. They do not announce products that do not exist yet.

import type { Lab } from '../types'

export const LABS: Lab[] = [
  {
    slug: 'ai',
    name: 'AI research',
    kicker: 'Lab 01 · Artificial intelligence',
    title: 'AI that acts for people, inside clear limits',
    icon: 'iconoir-brain',
    image: 'code',
    shape: 'icosahedron',
    summary: 'Assistants, visual AI and agents. We study how to make AI do useful work inside a product while staying honest about what it can and cannot do.',
    areas: [
      { icon: 'iconoir-chat-bubble', title: 'Assistants that act', text: 'Assistants that search, fill a basket or open a ticket instead of only answering, with a confirmation before anything that matters.' },
      { icon: 'iconoir-sparks', title: 'Visual AI', text: 'Image-based features such as virtual try-on, where a shopper sees an outfit on their own photo.' },
      { icon: 'iconoir-sound-high', title: 'Voice interfaces', text: 'Speech to text, a language model that works out what the person wants, and a spoken reply.' },
      { icon: 'iconoir-terminal', title: 'Operations agents', text: 'Agents that read logs, locate the code involved and query data through read-only, audited access.' },
    ],
    body: [
      { h2: 'What we are working on' },
      { p: 'AI runs through every Resbrotherx product, and the lab is where the shared ideas are worked out. Today that work shows up in four places:' },
      { ul: [
        '**[Adorė](/products/adore)**: photo and video try-on, and the Adorė AI assistant that searches the whole app and can act for the shopper.',
        '**[Apsuni](/products/apsuni)**: AI that organises a goal, a reference or a voice note into product direction, screens and technical choices, plus Figma to code and image to code.',
        '**[Brainbox](/products/brainbox)**: agents that analyse logs and query a database safely. This one is still in development.',
      ] },
      { h2: 'Directions we are exploring' },
      { p: 'These are research directions, not product announcements:' },
      { ul: [
        '**Agents with real permissions.** How much an assistant should be allowed to do on its own, and how to show a person what it is about to do.',
        '**Voice as a first-class interface.** Describing an idea out loud and getting back a plan, a design or a working draft.',
        '**AI on small devices.** Running detection and tracking on a Raspberry Pi so that a [robot](/labs/robotics) can react without a network connection.',
        '**AI in 3D pipelines.** Using AI to speed up the slow parts of [3D work](/labs/3d-animation) while people keep the creative decisions.',
      ] },
      { h2: 'Principles' },
      { ol: [
        '**People approve what matters.** AI drafts and suggests; a person signs off releases, payments and anything that cannot be undone.',
        '**Say what it is.** A preview is labelled a preview. A demo result is labelled a demo.',
        '**Least access.** An agent gets the smallest set of permissions that lets it do the job: read-only where reading is enough.',
        '**Keep a record.** Actions and queries are logged so they can be reviewed.',
        '**Test on real cases.** We judge a feature on real examples, including the ones that went badly.',
      ] },
      { h2: 'Read more' },
      { ul: [
        '[Building AI assistants that act, not just chat](/blog/ai-assistants-that-act)',
        '[How AI try-on works, in plain language](/blog/how-ai-try-on-works)',
        '[Designing safe database access for AI agents](/blog/safe-database-access-for-ai-agents)',
      ] },
    ],
  },
  {
    slug: 'robotics',
    name: 'Robotics',
    kicker: 'Lab 02 · Robotics & embedded systems',
    title: 'Robots and devices on Arduino and Raspberry Pi',
    icon: 'iconoir-cpu',
    image: 'humanoid-robot',
    shape: 'octahedron',
    summary: 'Our newest lab. We build with Arduino, Raspberry Pi and ESP32 to connect software to sensors, motors and the physical world.',
    areas: [
      { icon: 'iconoir-electronics-chip', title: 'Microcontrollers', text: 'Arduino boards for timing-critical control of motors, servos and sensors.' },
      { icon: 'iconoir-cpu', title: 'Single-board computers', text: 'Raspberry Pi for cameras, networking and running AI models on the device.' },
      { icon: 'iconoir-wifi', title: 'Connected devices', text: 'ESP32 modules for hardware that needs Wi-Fi or Bluetooth at low cost.' },
      { icon: 'iconoir-eye', title: 'Vision', text: 'Cameras and detection models so a machine can see what it is doing.' },
    ],
    body: [
      { h2: 'Why a software company builds robots' },
      { p: 'Software has spent decades living on screens. The next useful things it does will often be physical: a machine that sorts, a device that monitors, a robot that fetches. Robotics is the newest lab at Resbrotherx, and it exists so that our [AI](/labs/ai) and software work has somewhere to go beyond the screen.' },
      { h2: 'The hardware we work with' },
      { img: 'arduino-uno', caption: 'An Arduino Uno: a microcontroller board for real-time control.' },
      { p: 'An **Arduino** is a microcontroller board. It runs one program, starts instantly and reacts within microseconds, which makes it right for motors, servos and sensors. It has no operating system to get in the way.' },
      { img: 'raspberry-pi', caption: 'A Raspberry Pi 4: a full Linux computer the size of a card.' },
      { p: 'A **Raspberry Pi** is a small computer that runs Linux. It can drive a camera, talk to a network and run an AI model, which makes it right for seeing and deciding. An **ESP32** sits between the two: a microcontroller with Wi-Fi and Bluetooth built in.' },
      { h2: 'How the pieces fit together' },
      { ol: [
        '**Sense.** Distance, light, temperature, motion and camera input arrive from sensors.',
        '**Decide.** A Raspberry Pi, or the microcontroller itself for simple cases, works out what to do.',
        '**Act.** An Arduino drives the motors and servos through a motor driver.',
        '**Report.** The device sends its state to a dashboard or an app, and takes commands back.',
      ] },
      { h2: 'What we are working on' },
      { ul: [
        'Prototypes on breadboards that prove a sensor, a motor or a control loop before anything is soldered.',
        'Firmware in C and C++ for Arduino and ESP32, and Python on the Raspberry Pi.',
        'Links between devices and our web and mobile software, so a robot can be watched and controlled from an app.',
        'Monitoring for machines in the field, building on tools like [Vending Monitor](/portfolio/vending-monitor).',
      ] },
      { h2: 'Read more' },
      { ul: [
        '[Arduino vs Raspberry Pi: which one should your robot use?](/blog/arduino-vs-raspberry-pi-for-robots)',
        '[Robotics & embedded systems service](/services/robotics-embedded)',
      ] },
    ],
  },
  {
    slug: '3d-animation',
    name: '3D & animation',
    kicker: 'Lab 03 · 3D design & animation',
    title: '3D characters, models and animation in Blender',
    icon: 'iconoir-box-3d-center',
    image: '3d-character',
    shape: 'cube',
    summary: 'Modelling, rigging, animation and rendering in Blender, plus 3D that runs live in the browser and inside our products.',
    areas: [
      { icon: 'iconoir-user', title: '3D characters', text: 'Stylised characters modelled, textured and rigged so they are ready to animate.' },
      { icon: 'iconoir-movie', title: 'Animation', text: 'Character and object animation, from a walk cycle to a finished short scene.' },
      { icon: 'iconoir-cube', title: 'Product 3D', text: 'Accurate models and turntables, like the rotating previews of designs in Adorė.' },
      { icon: 'iconoir-globe', title: '3D on the web', text: 'Light models exported to glTF and drawn with Three.js so they load quickly on a phone.' },
    ],
    body: [
      { h2: 'Where 3D shows up in our work' },
      { p: '3D is part of how Resbrotherx products explain themselves. In [Adorė](/products/adore), designs with a multi-angle preview can be rotated so that a shopper sees the whole outfit. On the web we use Three.js for live 3D scenes. And in Blender we build characters and animation for stories and product films.' },
      { img: '3d-character', caption: 'A character turnaround: front, side and back views are the starting point for a 3D model.' },
      { h2: 'The Blender pipeline' },
      { ol: [
        '**Concept and references.** Sketches and a turnaround that show the character or object from every side.',
        '**Modelling.** Building the shape with clean topology: evenly spaced quads that follow the form.',
        '**UVs, textures and materials.** Unwrapping the surface and painting or assigning physically based materials.',
        '**Rigging.** Adding a skeleton, weights and controls so the model can be posed.',
        '**Animation.** Blocking the key poses, then refining the timing and arcs.',
        '**Lighting and rendering.** Cycles when realism matters, Eevee when speed matters.',
        '**Post-production.** Compositing, colour and final export.',
      ] },
      { img: '3d-topology', caption: 'Topology matters: the flow of polygons decides how well a face or a joint deforms.' },
      { h2: 'What we are working on' },
      { ul: [
        '3D characters: modelling and rigging characters in Blender, with Python scripts that build and check assets.',
        '3D animation and post-production for short films and product videos.',
        '3D design and visualisation of products, including multi-angle previews for shopping.',
        'Web-ready 3D: models light enough to rotate smoothly inside a web page or mobile app.',
      ] },
      { h2: 'Read more' },
      { ul: [
        '[How we take a 3D character from sketch to animation in Blender](/blog/3d-character-pipeline-in-blender)',
        '[3D modelling & animation service](/services/3d-animation)',
      ] },
    ],
  },
]

export const getLab = (slug: string | undefined) => LABS.find((l) => l.slug === slug)
