// Portfolio. Entries are limited to our own products and to code that is
// public on GitHub, described from each repository's own README.

import type { Project, RepoLink } from '../types'

const GH = 'https://github.com/resbrotherx'

export const PROJECTS: Project[] = [
  {
    slug: 'vending-monitor',
    name: 'Vending Monitor',
    kicker: 'Operations · Desktop app',
    category: 'Monitoring',
    image: 'workbench',
    summary: 'A live dashboard and watchdog for a vending service. It reaches the server over SSH and shows the heartbeat, vends, errors, server load, security checks and the live log.',
    stack: ['Node.js', 'SSH', 'Docker', 'Desktop app', 'GitHub Actions'],
    repo: `${GH}/server-monitoring-system-`,
    body: [
      { h2: 'What it does' },
      { p: '**Vending Monitor** watches a vending service running on a server and shows its health on one screen: the heartbeat, completed vends, errors, server load, security checks and the live log. It connects over SSH, stays connected until it is told to disconnect, and reconnects by itself if the network drops.' },
      { h2: 'Designed to be safe on a production server' },
      { ul: [
        'It writes nothing on the server and never touches the database or other containers.',
        'It reads metrics every 2 seconds and slower checks every 10 seconds, using a short list of small read commands.',
        'The only action it can take is restarting the vending container, and only when a person presses the button or has switched auto-restart on.',
        'IP addresses and server names are hidden on every page until "Show IPs" is clicked.',
      ] },
      { h2: 'The watchdog' },
      { p: 'A stall is declared when the log shows no heartbeat for 45 seconds while the container is running. With auto-restart on, the monitor restarts the container, waits before trying again and stops after three restarts in an hour, so a broken service cannot be restarted forever.' },
      { h2: 'A desktop app that updates itself' },
      { p: 'Vending Monitor also runs as a desktop app with a Windows installer. It checks GitHub Releases for a newer version when it starts, every 30 minutes and whenever the connection comes back, downloads the update in the background and asks before restarting.' },
    ],
  },
  {
    slug: 'hair-store-api',
    name: 'Hair Store API',
    kicker: 'E-commerce · Backend',
    category: 'API',
    image: 'servers',
    summary: 'A Django REST backend for selling hair products: accounts, products with variants, basket, checkout, coupons, ratings, comments and payments through Flutterwave and Paystack.',
    stack: ['Django', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Flutterwave', 'Paystack', 'Swagger'],
    repo: `${GH}/hair-store-api`,
    body: [
      { h2: 'What it does' },
      { p: '**Hair Store API** is an e-commerce backend for hair products and hair maintenance items. It covers the whole shop: sign-up and sign-in with JWT, product management, basket and checkout, likes, ratings, threaded comments, coupons, shipping addresses, a blog, contact messages and email subscriptions.' },
      { h2: 'Features' },
      { ul: [
        '**Products with variants** for inches, sizes and types, with related products, images and admin upload.',
        '**A persistent basket** per user: add, list, update and remove.',
        '**Orders** that snapshot their items, shipping address and coupon, with order status and payment reference.',
        '**Coupons** that are one-time or reusable, with tracking of who used them.',
        '**Payments** through Flutterwave and Paystack, with initialisation, webhook handlers and transaction history.',
        '**Ratings and comments**: one rating per user per product with an average, and threaded replies.',
        '**Documentation** generated as Swagger and ReDoc.',
      ] },
      { h2: 'How it is deployed' },
      { p: 'The API runs on PostgreSQL behind Gunicorn and Nginx on an Ubuntu server, and a GitHub Actions workflow deploys it. It is a compact example of the [API and backend work](/services/api-development) we do.' },
    ],
  },
  {
    slug: 'company-portfolio-api',
    name: 'Company Portfolio API',
    kicker: 'Content API · Backend',
    category: 'API',
    image: 'code',
    summary: 'A REST API that powers a company website or dashboard, with endpoints for services, team members, about information and contact messages. Built with Node.js, Express, MongoDB and Docker.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Multer', 'Docker'],
    repo: `${GH}/Dampecon-backend-api`,
    body: [
      { h2: 'What it does' },
      { p: 'This API gives a company website its content: services, team members, about information and contact messages. A site or a dashboard reads and updates everything through REST endpoints, so the content can change without changing the site.' },
      { h2: 'How it is built' },
      { ul: [
        '**Node.js and Express** for the server, with **MongoDB** and the Mongoose ODM for data.',
        '**JWT-ready authentication** with hashed passwords.',
        '**Image uploads** handled with Multer.',
        '**Input validation** with express-validator, and CORS enabled for browser clients.',
        '**Docker and Docker Compose** for a repeatable setup, ready to deploy on an Ubuntu server.',
      ] },
    ],
  },
]

// Other public repositories, linked straight to GitHub. Described only by what
// the repository itself shows.
export const MORE_ON_GITHUB: RepoLink[] = [
  { name: 'BEDC BillPay Mobile App', text: 'A bill-payment mobile app for iOS and Android, written in TypeScript with React Native.', url: `${GH}/BEDC-BillPay-Mobile-App`, tags: ['React Native', 'TypeScript'] },
  { name: 'Crowdfunding Mobile App', text: 'A crowdfunding app for iOS and Android, written in TypeScript with React Native.', url: `${GH}/Crowdfunding-mobile-app`, tags: ['React Native', 'TypeScript'] },
  { name: 'Brainbox (Spres AI Agent)', text: 'SDKs and backend design for an AI operations platform. See the Brainbox product page.', url: `${GH}/Spres-Ai-Agent`, tags: ['TypeScript', 'Python', 'AI'] },
  { name: 'Management Analytical Dashboard', text: 'A dashboard for management reporting and analytics.', url: `${GH}/management_analytical_dashboard`, tags: ['JavaScript'] },
  { name: 'Boutique Store API', text: 'A backend API for an online boutique.', url: `${GH}/boutique-store-api`, tags: ['JavaScript', 'API'] },
  { name: 'School Cash Collection', text: 'A web application for recording school fee collections.', url: `${GH}/School_cash_collection`, tags: ['JavaScript'] },
  { name: 'Bible Application', text: 'A Bible reading application, with a companion mobile app.', url: `${GH}/bibleApplication`, tags: ['JavaScript', 'Mobile'] },
  { name: 'Restaurant Web Application', text: 'A website and ordering front end for a restaurant.', url: `${GH}/resturant_web_application`, tags: ['HTML', 'Web'] },
  { name: 'Task Application', text: 'A task management web application.', url: `${GH}/task_application`, tags: ['HTML', 'Web'] },
]

export const GITHUB_PROFILE = GH

export const getProject = (slug: string | undefined) => PROJECTS.find((p) => p.slug === slug)
