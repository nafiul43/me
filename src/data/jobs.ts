
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
      src: 'https://mefolio.s3.eu-north-1.amazonaws.com/companies/klikit.webp',
    },
    date: "January 2023 - September 2025",
    responsibilities: [
      "Collaborated with the design team to architect and scale a high-performing UI component library using React, TailwindCSS, StoryBook & Rollup, cutting UI dev time by 30% across 5 teams through consistent, reusable, and responsive styling",
      "Led rapid development of core features, including launching Webshop (ordering WebApp with payments) in just 7 weeks and delivering a Reservation MVP in 2 weeks, enabling the company to test and scale new revenue streams quickly in the market",
      "Leveraged Copilot and Windsurf to accelerate feature delivery while optimizing component performance and maintaining scalable, high-load-ready codebases, ensuring seamless integration across multiple applications",
      "Translated business goals into scalable frontend solutions, accelerating release cycles and improving stakeholder satisfaction",
      "Mentored 10 engineers, improving onboarding efficiency by 40% with reviews, documentation, and coding practices",
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
      src: 'https://mefolio.s3.eu-north-1.amazonaws.com/companies/pathao.webp',
    },
    date: "January 2022 - December 2022",
    responsibilities: [
      "Relaunched Pathao Points Loyalty program, achieved a performance boost by reducing initial load from 7 seconds to 200ms",
      "Co-designed and rolled out Pathao PayLater with the backend teams on a tight 3-week timeline, driving strong adoption among the first 10k target users and securing Lighthouse scores above 90",
      "Optimized dashboard load times by 35% through performance-focused state management in VueJS, VueX, and lazy loading",
      "Coached junior developers and facilitated knowledge sharing across teams, reducing onboarding ramp-up time by 40%",
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
      src: 'https://mefolio.s3.eu-north-1.amazonaws.com/companies/pathao.webp',
    },
    date: "July 2018 - December 2021",
    responsibilities: [
      "Led a 5-engineer full-stack team to build and launch Pathao Shop, reaching 5M+ users within 6 months",
      "Created a Vue-powered UI library, adopted in 20+ dashboards, ensuring consistency and accelerating delivery",
      "Partnered with backend and QA to stabilize large-scale deployments, ensuring reliable services across various products",
      "Delivered consumer-facing features in collaboration with design teams, improving user retention by 15%",
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
      src: 'https://mefolio.s3.eu-north-1.amazonaws.com/companies/widespace.webp',
    },
    date: "July 2014 - June 2018",
    responsibilities: [
      "Delivered high-performance ad-tech features in React & Redux, serving millions of ad impressions across global clients",
      "Collaborated with Swedish teams, shipping features in Laravel & VueJS, helping to optimize rendering & load times by 20%",
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
      src: 'https://mefolio.s3.eu-north-1.amazonaws.com/companies/enosis.webp',
    },
    date: "July 2012 - June 2014",
    responsibilities: [
      "Developed hybrid applications with jQuery Mobile & Apache Cordova, delivering on fast approaching deadlines",
      "Primary developer of iPass Kiosk built in WPF, which was an instant hit & was heavily used in the client’s headquarters",
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