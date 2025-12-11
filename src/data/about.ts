const CDN = import.meta.env.PUBLIC_CDN_BASE_URL;

export const ABOUT = {
  title: "Nafiul Islam Tony",
  subtitle: "Frontend Lead & Full Stack Engineer",
  location: "Dhaka, Bangladesh",
  bio: "Engineering practitioner with over 13 years of experience in the JavaScript ecosystem. Former engineering leader at startups like klikit and Pathao, where I have lead and worked in teams to ship robust, user-centric products at scale. Proven track record of transforming complex requirements into simplified, performant user experiences for millions of users",
  profilePic: `${CDN}/Nafiul-Islam-Tony-208w.webp`,
  profilePicSrcset: `${CDN}/Nafiul-Islam-Tony-208w.webp 1x, ${CDN}/Nafiul-Islam-Tony-416w.webp 2x`,
  resume: `${CDN}/resume/Nafiul+Islam+Tony.pdf`,
  links: [
    {
      slug: "phone",
      href: "tel:+8801672219915",
      icon: "mdi:phone",
      title: "Phone",
      value: "+8801672219915",
      target: "_self",
    },
    {
      slug: "email",
      href: "mailto:nafiul.islam.tony@gmail.com",
      icon: "mdi:email",
      title: "Email",
      value: "nafiul.islam.tony@gmail.com",
      target: "_self",
    },
    {
      slug: "linkedin",
      href: "https://www.linkedin.com/in/nafiul/",
      icon: "simple-icons:linkedin",
      title: "LinkedIn",
      value: "nafiul",
      target: "_blank",
    },
  ],
  openTo: ['Open for Remote Work', 'Available for Mentoring', 'Working on Side Projects'],
};