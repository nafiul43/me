
type School = {
  institute: string;
  degree: string;
  logo: {
    src: string;
    fit?: "contain" | "cover";
  };
  date: string;
  links?: {
    slug: string;
    href: string;
    icon: string;
    title: string;
    value: string;
    target: string;
  }[];
}

export const SCHOOLS: School[] = [
  {
    institute: "University of Dhaka",
    degree: "Master of Science in Computer Science & Engineering",
    logo: {
      src: "https://mefolio.s3.eu-north-1.amazonaws.com/companies/du.webp",
      fit: "contain",
    },
    date: "October 2012 - December 2014",
  },
  {
    institute: "University of Dhaka",
    degree: "Bachelor of Science (Honours) in Computer Science & Engineering",
    logo: {
      src: "https://mefolio.s3.eu-north-1.amazonaws.com/companies/du.webp",
      fit: "contain",
    },
    date: "March 2008 - August 2012",
  },
];