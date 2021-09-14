import data from "../data/settings.json";
const { home, about, projects, contact, resume } = data.sidebar;

export type MenuItem = {
  key: string;
  icon: string;
  text: string;
} & (
  | {
      link: string;
      to?: never;
    }
  | {
      link?: never;
      to: string;
    }
) &
  (
    | {
        label: string;
        icon?: never;
      }
    | {
        label?: never;
        icon: string;
      }
  );

export const navLogo: MenuItem[] = [];
export const desktopMenu: MenuItem[] = [
  { key: "home", to: "/", icon: home, text: "Home" },
  { key: "about", to: "about", icon: about, text: "About" },
  { key: "projects", to: "showcase", icon: projects, text: "Projects" },
  { key: "contact", to: "contact", icon: contact, text: "Contact" },
  {
    key: "resume",
    link: "https://alenbasar.s3.ap-southeast-2.amazonaws.com/Alen_Basar-Resume.pdf",
    icon: resume,
    text: "Resume",
  },
];
