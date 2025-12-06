
type Job = {
  company: string;
  position: string;
  logo: {
    src: string;
    fit?: "contain" | "cover";
  };
  date: string;
  responsibilities: string[];
  links?: {
    slug: string;
    href: string;
    icon: string;
    title: string;
    value: string;
    target: string;
  }[];
}

export const JOBS: Job[] = [
  {
    company: "klikit PTE Ltd",
    position: "Lead, Frontend Engineering",
    logo: {
      src: `${import.meta.env.PUBLIC_CDN_BASE_URL}/companies/klikit.webp`,
    },
    date: "January 2023 - September 2025",
    responsibilities: [
      "Architected and scaled a production-ready UI component library using React, TailwindCSS, Storybook & Rollup, reducing UI development time by 30% across 5 engineering teams through reusable, accessible components",
      "Led end-to-end development of 5 mission-critical applications (Cloud, Admin, Webshop, Reservations, Showcase) serving 3500+ stores across Indonesia, Singapore, Malaysia, and the Philippines",
      "Delivered Webshop ordering platform with Stripe/Xendit payment integration in 7 weeks and Reservations MVP in 2 weeks, enabling rapid market validation and generating new revenue streams",
      "Optimized application performance and scalability using React 18, Vite, Redux Toolkit, and code-splitting techniques, ensuring sub-second load times for high-traffic merchant dashboards",
      "Implemented real-time features using Socket.io for live order updates, improving merchant response time by 45%",
      "Established engineering best practices including comprehensive code reviews, automated testing, and CI/CD pipelines, reducing production bugs by 60%",
      "Mentored 10 frontend engineers through pair programming, technical documentation, and architecture reviews, reducing onboarding time by 40% and fostering a culture of continuous learning",
    ],
    links: [{
      slug: "linkedin",
      href: "https://www.linkedin.com/company/klikit/",
      icon: "simple-icons:linkedin",
      title: "LinkedIn",
      value: "klikit",
      target: "_blank",
    }, {
      slug: "website",
      href: "https://www.klikit.io",
      icon: "mdi:web",
      title: "Website",
      value: "https://www.klikit.io",
      target: "_blank",
    }],
  },
  {
    company: "Pathao Ltd.",
    position: "Staff Software Engineer",
    logo: {
      src: `${import.meta.env.PUBLIC_CDN_BASE_URL}/companies/pathao.webp`,
    },
    date: "January 2022 - December 2022",
    responsibilities: [
      "Relaunched Pathao Points Loyalty program with Vue.js and Framework7, achieving 97% performance improvement by reducing initial load time from 7 seconds to 200ms through code-splitting and lazy loading",
      "Co-architected and launched Pathao PayLater (BNPL service) in 3 weeks, onboarding 10,000+ users in the first month with Lighthouse performance scores consistently above 90",
      "Built dashboards with Vue.js, Google Maps API, and Express.js, enabling real-time tracking of 50,000+ rides",
      "Led backend development for Pathao Food microservices using Go and Python, architecting scalable APIs on GCP with Kubernetes and Docker to handle 20,000+ daily food orders",
      "Mentored 6 engineers from different stacks through code reviews and technical workshops, reducing onboarding time by 40% and establishing frontend development standards across the organization",
    ],
    links: [{
      slug: "linkedin",
      href: "https://www.linkedin.com/company/pathao/",
      icon: "simple-icons:linkedin",
      title: "LinkedIn",
      value: "pathao",
      target: "_blank",
    }, {
      slug: "website",
      href: "https://www.pathao.com",
      icon: "mdi:web",
      title: "Website",
      value: "https://www.pathao.com",
      target: "_blank",
    }],
  },
  {
    company: "Pathao Ltd.",
    position: "Senior Software Engineer",
    logo: {
      src: `${import.meta.env.PUBLIC_CDN_BASE_URL}/companies/pathao.webp`,
    },
    date: "July 2018 - December 2021",
    responsibilities: [
      "Led a 5-engineer cross-functional team to architect and launch Pathao Shop (e-commerce platform), scaling to 5M+ active users within 6 months and processing 100,000+ monthly orders",
      "Built and open-sourced Infinity Stones UI component library using Vue.js and Rollup, adopted across 20+ internal dashboards and reducing development cycles by 25%",
      "Developed Atlas merchant panel, Pathao Points loyalty system, and Sherlock analytics dashboard using Vue.js, Framework7, and Tailwind, serving 50,000+ merchants and drivers",
      "Collaborated with backend, QA, and DevOps teams to implement robust deployment pipelines, achieving 99.9% uptime across all consumer-facing applications",
      "Delivered high-impact features in partnership with product and design teams, improving user retention by 15% and increasing average session duration by 20%",
    ],
    links: [{
      slug: "linkedin",
      href: "https://www.linkedin.com/company/pathao/",
      icon: "simple-icons:linkedin",
      title: "LinkedIn",
      value: "pathao",
      target: "_blank",
    }, {
      slug: "website",
      href: "https://www.pathao.com",
      icon: "mdi:web",
      title: "Website",
      value: "https://www.pathao.com",
      target: "_blank",
    }],
  },
  {
    company: "Widespace Bangladesh Ltd. (Acquired by Azerion AB)",
    position: "Software Engineer",
    logo: {
      src: `${import.meta.env.PUBLIC_CDN_BASE_URL}/companies/widespace.webp`,
    },
    date: "July 2014 - June 2018",
    responsibilities: [
      "Architected and delivered 8+ full-stack applications from scratch using React, Vue, Laravel, and Node.js, serving millions of ad impressions daily across global markets",
      "Improved application performance by 40% through optimization, and efficient state management in React & Vue ecosystems",
      "Rapidly delivered complex features under tight deadlines while mastering new technologies including Docker, MongoDB, and modern build tools (Webpack, Gulp)",
      "Took ownership of critical ad-tech projects (AdBuilder, Coach, Wagon), maintaining high development standards and ensuring 99.9% uptime for client-facing systems",
      "Collaborated with Swedish teams to ship scalable features in Laravel & VueJS, optimizing rendering and load times by 20%",
    ],
    links: [{
      slug: "x",
      href: "https://x.com/WidespaceMobile",
      icon: "simple-icons:x",
      title: "X",
      value: "widespace",
      target: "_blank",
    }, {
      slug: "website",
      href: "https://www.azerion.com/european-digital-gaming-and-monetisation-company-azerion-expands-nordic-presence-with-new-swedish-acquisition-delta-projects/#:~:text=acquisition%20of%20adtech%20companies%20Widespace%20and%20Sellbranch,Azerion%20already%20enjoys%20a%20strong%20presence%20not",
      icon: "mdi:web",
      title: "Website",
      value: "https://www.azerion.com/european-digital-gaming-and-monetisation-company-azerion-expands-nordic-presence-with-new-swedish-acquisition-delta-projects/#:~:text=acquisition%20of%20adtech%20companies%20Widespace%20and%20Sellbranch,Azerion%20already%20enjoys%20a%20strong%20presence%20not",
      target: "_blank",
    }],
  },
  {
    company: "Enosis Solutions",
    position: "Software Engineer",
    logo: {
      src: `${import.meta.env.PUBLIC_CDN_BASE_URL}/companies/enosis.webp`,
    },
    date: "July 2012 - June 2014",
    responsibilities: [
      "Mastered hybrid mobile application development using jQuery Mobile & Apache Cordova, delivering 3 production apps on aggressive timelines while learning new technologies",
      "Became technical spokesperson for e21 Mobile CRM project, effectively training 4 new team members and maintaining comprehensive documentation for knowledge sharing",
      "Led development of iPass Kiosk (WPF), which became an instant success and was deployed across client headquarters, handling 1000+ daily check-ins",
      "Efficiently managed multiple large-scale projects (iTrak, iPass Kiosk, e21 Mobile) simultaneously, consistently meeting tight client deadlines through effective prioritization",
    ],
    links: [{
      slug: "linkedin",
      href: "https://www.linkedin.com/company/enosis-solutions/",
      icon: "simple-icons:linkedin",
      title: "LinkedIn",
      value: "enosis-solutions",
      target: "_blank",
    }, {
      slug: "website",
      href: "https://www.enosisbd.com/",
      icon: "mdi:web",
      title: "Website",
      value: "https://www.enosisbd.com/",
      target: "_blank",
    }],
  },
];