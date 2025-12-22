export type Skill = {
  title: string;
  icon?: string;
  color?: string;
  image?: string;
};

export type Project = {
  title: string;
  subtitle: string;
  image: string;
  href?: string;
  description: string;
  summary: string;
};

export const skills: Skill[] = [
  { title: "HTML", icon: "bxl-html5", color: "#e34f26" },
  { title: "CSS", icon: "bxl-css3", color: "#1572b6" },
  { title: "JavaScript", icon: "bxl-javascript", color: "#f7df1e" },
  { title: "React", icon: "bxl-react", color: "#61dafb" },
  { title: "Python", image: "https://www.svgrepo.com/show/452091/python.svg" },
  { title: "WordPress", icon: "bxl-wordpress", color: "#21759b" },
  {
    title: "GoHighLevel",
    icon: "bxs-rocket",
    color: "#7c3aed",
  },
  {
    title: "Zapier",
    icon: "bxs-zap",
    color: "#ff4a00",
  },
  {
    title: "Photoshop",
    icon: "bx-brush",
    color: "#00c4ff",
  },
  {
    title: "Canva",
    icon: "bx-palette",
    color: "#8b5cf6",
  },
  {
    title: "Unreal Engine",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/UE_Logo_Black_Centered.svg",
  },
  {
    title: "Unity",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg",
  },
];

export const projects: Project[] = [
  {
    title: "Absher360",
    subtitle: "WordPress Site",
    image: "/images/Absher360.png",
    href: "https://jo.absher360.com/",
    summary: "Business marketplace built with WordPress + Elementor.",
    description:
      "I designed the full brand and logo for Absher 360 and built a custom WordPress marketplace that helps people find the right technician fast. Using Elementor with ACF and CPT UI, I created a Professional content type with fields for trade, pricing, service areas, bios, and contact options, then crafted archive templates with filters by city and category for smooth discovery. The system supports clean mobile UX, trust signals, and clear CTAs. I optimized on-page SEO and performance, added structured data for services, and wired automation: new requests flow to a CRM (GoHighLevel) via Zapier with tags, alerts, and follow-ups to reduce manual work. The result is a reliable, searchable directory that balances design polish with real-world operations for pros and customers alike.",
  },
  {
    title: "Baraka Wash",
    subtitle: "Local Brand, Site & Funnel",
    image: "/images/BarakaWash.png",
    href: "https://barakawash.com/",
    summary:
      "Conversion-focused pressure washing brand with instant quotes.",
    description:
      "Local Brand, Site & Funnel. I created the brand system and logo for Baraka Wash, then built a conversion-first site that showcases credibility and results. The layout highlights before/after galleries, service summaries, FAQs, and neighborhood trust markers to answer objections quickly. An instant-quote/booking flow captures leads on mobile and desktop, sending them to GoHighLevel where automations (via Zapier) handle notifications, tags, and polite follow-ups to lift close rates. I tuned on-page SEO and metadata for local discovery and prepared asset templates for social posts and reviews. The goal was simple: turn visitors into scheduled jobs with fast, friendly UX and an operations pipeline that saves time.",
  },
  {
    title: "SereniSkin Med Spa",
    subtitle: "Multi-Page Website w/ Booking",
    image: "/images/MedSpa.png",
    summary: "Premium spa experience with detailed services and booking.",
    description:
      "Multi-Page Website w/ Booking. I designed the logo and visual identity for SereniSkin, then built a calm, premium website experience that reflects clinical quality without losing warmth. The site includes service taxonomies, detailed treatment pages with benefits/contraindications, pricing modules, testimonials, and an integrated booking flow. To support search and credibility, I implemented clean semantic HTML, performance tweaks, and structured data for local business/services. The content design guides users from discovery to decision—answering common questions, surfacing trust signals, and keeping calls-to-action visible on mobile. The result is a smooth path from curiosity to consultation.",
  },
  {
    title: "Pullman Real Estate",
    subtitle: "Listings & Detail Templates",
    image: "/images/Pullman.png",
    summary: "Property listing system with custom fields and filters.",
    description:
      "Listings & Detail Templates. I refreshed the brand and designed the logo for Pullman, then built a listings experience that’s fast, searchable, and easy to update. Using Elementor + ACF/CPT UI, I modeled a Property type with fields for price, beds/baths, square footage, photo gallery, and map/location data. The archive grid supports quick scanning and filtering; each detail page is optimized for readability, large imagery, and clear “contact agent” actions. I tuned on-page SEO and added structured data to help listings surface in search. Editors can publish new properties in minutes without breaking visual consistency, while buyers get a clean, responsive experience across devices.",
  },
  {
    title: "Full Stack App",
    subtitle: "React, Flask & MySQL",
    image:
      "https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?w=1200&auto=format&fit=crop&q=80",
    href: "https://github.com/Mahmoud-Atiyah/fullstack-flask-react-app",
    summary: "End-to-end CRUD app with React UI and Flask API.",
    description:
      "A full stack application was developed using React for the frontend, Flask for the backend, and MySQL for data management. It allows users to interact with a dynamic interface, perform CRUD operations, and manage data seamlessly. The frontend features a responsive layout with user-friendly navigation, while the backend handles API requests, data validation, and secure communication with the database. This project demonstrates my ability to build and integrate modern web technologies into a complete, functional application.",
  },
  {
    title: "React Portfolio",
    subtitle: "Responsive Frontend",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&auto=format&fit=crop&q=80",
    href: "https://github.com/Mahmoud-Atiyah/react-portfolio",
    summary: "Clean, animated React portfolio layout.",
    description:
      "This responsive frontend portfolio page is built with React and showcases modern web development practices. It features a clean and minimalist design, smooth animations, and dynamic content loading. The layout adapts seamlessly across devices, ensuring an optimal viewing experience on desktops, tablets, and mobile phones. Sections include an interactive hero banner, project showcases with hover effects, an about section, and contact form integration. Styled with CSS modules or Tailwind CSS, the page highlights both technical skills and design sensibility.",
  },
  {
    title: "Combat Fight",
    subtitle: "Unreal Engine 5 Prototype",
    image:
      "https://images.unsplash.com/photo-1541474583361-bc9527eb46d6?w=1200&auto=format&fit=crop&q=80",
    href: "https://github.com/Mahmoud-Atiyah/combat-fight-unrealengine",
    summary: "Third-person fighting mechanics in UE5.",
    description:
      "Combat Fight is an unfinished third-person fighting game built in Unreal Engine 5, developed as a learning project inspired by Mortal Kombat: Shaolin Monks. The game features a functional early combat system and uses a Liu Kang model imported from MK1 to bring a familiar character into the gameplay. While still in progress, the project showcases key mechanics like third-person movement and foundational combat interactions. Future improvements include level design, hit reactions, advanced parkour mechanics, and a more polished combat system. This project reflects my hands-on approach to learning Unreal Engine and building action-based gameplay from the ground up.",
  },
  {
    title: "Block Breaker",
    subtitle: "Unity 2D Game",
    image:
      "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=1200&auto=format&fit=crop&q=80",
    href: "https://github.com/Mahmoud-Atiyah/bricks-smasher-unity",
    summary: "Classic block breaker gameplay with power-ups.",
    description:
      "I developed a fun and challenging Block Breaker 2D game using Unity, incorporating classic arcade-style gameplay with modern features. The game involves controlling a paddle to break bricks by bouncing a ball, with increasingly difficult levels and special power-ups that enhance gameplay. Using Unity's physics engine, I ensured smooth and responsive interactions, giving players an engaging experience. The game is designed with colorful graphics, fluid animations, and sound effects to keep players immersed.",
  },
  {
    title: "Tic-Tac-Toe",
    subtitle: "Python Game",
    image:
      "https://plus.unsplash.com/premium_photo-1673735396428-d51dc2a7a62d?w=1200&auto=format&fit=crop&q=80",
    href: "https://github.com/Mahmoud-Atiyah/tic-tac-toe-python",
    summary: "Two-player classic built with Python.",
    description:
      "I created a simple yet engaging Tic Tac Toe game using Python, designed for two players to compete in the classic 3x3 grid. The project utilizes basic Python concepts such as loops, conditionals, and functions to manage the game logic, ensuring a smooth and error-free experience. The game features a clear and intuitive text-based interface, where players take turns to input their moves, with the program automatically checking for valid moves and determining the winner or a tie. This project demonstrates the power of Python in creating interactive applications and was a great way to enhance my understanding of game logic and algorithm design.",
  },
];
