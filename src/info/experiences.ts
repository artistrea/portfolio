export const experiences: Experience[] = [
  {
    at: ["Struct"],
    role: "Projects Director",
    description: [
      "Changed our go-to tech stack to a monorepo (t3-turbo).",
      { type: "break" },
      "Changed our development",
      { type: "highlight", content: [" focus "] },
      "to frontend first, so client may",
      { type: "highlight", content: [" validate earlier."] },
    ],
    date: {
      from: "2023",
    },
    tags: [
      "Docker",
      "Reverse Proxy",
      "NextJS",
      "React Native",
      "TypeScript",
      "Tailwind",
      "tRPC",
      "Next Auth",
      "Lucia Auth",
      "Training",
    ],
  },
  {
    at: ["Struct"],
    role: "Manager (PO + SCRUM Master)",
    description: [
      "Received the design (not made by us) to implement.",
      { type: "break" },
      "The project includes an",
      { type: "highlight", content: [" Admin Dashboard made from scratch "] },
      "to manage its contents. The client has been hosting this website with us and has",
      { type: "highlight", content: [" renewed the contract."] },
    ],
    date: {
      from: "06",
      until: "09/2022",
    },
    tags: [
      "Rails API",
      "React",
      "JavaScript",
      "Styled Components",
      "Docker",
      "Reverse Proxy",
      "SSL configuration",
    ],
  },
  {
    at: ["Struct"],
    role: "Full Stack Developer",
    description: [
      "Developed backend in Rails and frontend with React. Used Docker to host websites in our Droplet. Worked in a ",
      {
        type: "link",
        content: [{ type: "highlight", content: ["MarketPlace"] }],
        href: "https://www.instagram.com/hortadocerrado/",
      },
      " gone wrong, in a ",
      { type: "highlight", content: ["internal web app"] },
      " for a ",
      {
        type: "link",
        content: ["statistics company"],
        href: "https://estat.com.br/",
      },
      ", helped",
      { type: "highlight", content: [" mantain and update"] },
      " a ",
      {
        type: "link",
        content: [{ type: "highlight", content: ["landing page"] }],
        href: "https://quimeraej.com/",
      },
      ", etc.",
    ],
    date: {
      from: "2022",
      until: "2023",
    },
    tags: ["Rails API", "React", "CSS in JS", "JavaScript", "Docker"],
  },
  {
    at: ["Struct"],
    role: "Trainee",
    description: [
      "It was in my first semester of university that I started getting into web development.",
    ],
    date: {
      from: "08",
      until: "12/2021",
    },
    tags: ["Rails API", "React", "CSS in JS", "JavaScript"],
  },
];

export type Experience = {
  at: Content;
  role: string;
  description: Content;
  date: {
    from: string;
    until?: string;
  };
  tags: string[];
  // href?: string;
};

export type Content = (
  | string // normal text
  | {
      type: "highlight";
      content: Content;
    }
  | {
      type: "link";
      content: Content;
      href: string;
    }
  | {
      type: "break";
    }
)[];
