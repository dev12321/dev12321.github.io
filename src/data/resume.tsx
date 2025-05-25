import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dev Bhushan",
  initials: "DB",
  url: "https://devbhushan.in",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/bangalore",
  description:
    "Product Engineer at EnParadigm. I love solving problems and learning new things.",
  summary:
    "I'm a Full stack engineer with a meticulous attention to detail, always looking for new challenges. I like building products and solve problems and I'm always looking for new opportunities to learn and grow.",
  avatarUrl: "/me.jpeg",
  skills: [
    "FastAPI",
    "Svelte",
    "Docker",
    "AWS Elastic Beanstalk",
    "AWS Lambda",
    "Amazon SQS",
    "Tailwind CSS",
    "Next.js",
    "Amazon Web Services (AWS)",
    "Firebase",
    "Hasura",
    "PostgreSQL",
    "React.js",
    "SQL",
    "Java",
    "Python",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "NoSQL",
    "GraphQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "devbhushan12321@gmail.com",
    tel: "+91 9801693738",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dev12321",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dev-bhushan/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/devb1209",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:devbhushan12321@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "EnParadigm",
      href: "https://www.enparadigm.com",
      badges: [],
      location: "Bangalore, India",
      title: "Product Engineer",
      logoUrl: "/enparadigm_logo.jpeg",
      start: "June 2024",
      end: "Present",
      description: ""
    },
    {
      company: "AI Smart Labs LLP",
      href: "https://www.meritcurve.com/",
      badges: [],
      location: "Remote",
      title: "Lead FullStack Engineer",
      logoUrl: "/meritcurve_logo.png",
      start: "April 2023",
      end: "August 2023",
      description:
        `Led technical operations and infrastructure optimization while rebuilding the admin portal with modern technologies. Implemented cost-effective cloud solutions through serverless architecture and load balancing. Established scalable backend systems with reusable components and robust CD pipelines. Mentored development team through code reviews and best practices, while maintaining clear client communication for requirement alignment.`,
    },
    {
      company: "StudyOwl (Now AI Smart Labs LLP)",
      href: "https://www.meritcurve.com/",
      badges: [],
      location: "Remote",
      title: "FullStack Engineer",
      logoUrl: "/studyowl_logo.jpeg",
      start: "April 2020",
      end: "March 2021",
      description:
        `Maintained and enhanced the codebase with new features while optimizing database performance through strategic indexing and analytical dashboard views. Additionally, created an educational cognitive game to help students prepare for Capgemini placement assessments.`,
    },

  ],
  education: [
    {
      school: "Neovarsity | Woolf University (Scaler)",
      href: "https://scaler.com",
      degree: "Online Master's Degree in Computer Science and Engineering",
      logoUrl: "/woolfuniversity_logo.jpeg",
      start: "2023",
      end: "2025",
    },
    {
      school: "Dayananda Sagar College of Engineering",
      href: "https://dsce.edu.in/",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      logoUrl: "/dsce_logo.jpeg",
      start: "2017",
      end: "2021",
    },
  ],
  projects: [

    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
} as const;
