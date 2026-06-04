import teamGregory from "../assets/images/about/team-gregory.webp";
import teamGregoryMobile from "../assets/images/about/team-gregory-mobile.webp";
import teamBenjamin from "../assets/images/about/team-benjamin.webp";
import teamBenjaminMobile from "../assets/images/about/team-benjamin-mobile.webp";
import teamJunaid from "../assets/images/about/team-junaid.webp";
import teamAzeem from "../assets/images/about/team-azeem.webp";
import teamAzu from "../assets/images/about/team-azu.webp";
import teamSamuel from "../assets/images/about/team-samuel.webp";
import teamSteven from "../assets/images/about/team-steven.webp";

/** Figma 1956:135 desktop; 1888:6881 mobile carousel */
export const TEAM_ROW_LARGE = [
  {
    name: "Gregory van Duyse",
    role: "CEO & Co-founder",
    bio: "With years of entrepreneurial experience, Greg brings a grounded perspective on leadership and strategy. He focuses on helping businesses translate AI capabilities into meaningful growth and smoother operations.",
    image: teamGregory,
    mobileImage: teamGregoryMobile,
    variant: "large",
    mobilePaddingTop: 300,
  },
  {
    name: "Benjamin Gonzalez M.Sc.",
    role: "CEO & Co-founder",
    bio: "Holding a Master's in Data Science, Ben works to bridge the gap between technical engineering and business goals. He enjoys making complex concepts accessible and turning them into practical value for the team and clients.",
    image: teamBenjamin,
    mobileImage: teamBenjaminMobile,
    variant: "large",
    mobilePaddingTop: 300,
  },
];

export const TEAM_ROW_MEDIUM = [
  {
    name: "Junaid Dar",
    role: "Marketing Partner",
    roleCapitalize: true,
    bio: "Junaid brings analytical thinking and hands-on marketing execution. With over 10 years of experience working with startups, scaling companies, and Fortune 1000 brands, he specializes in building data-driven growth systems.",
    image: teamJunaid,
    variant: "medium-fixed",
    objectPosition: "50% 20%",
    mobilePaddingTop: 300,
  },
  {
    name: "Azeem Khan",
    role: "Automation Engineer",
    bio: "Azeem has a knack for designing thoughtful automation workflows that simplify day-to-day operations. He takes the time to understand manual processes and builds reliable systems that help teams work more efficiently.",
    image: teamAzeem,
    variant: "medium-fixed",
    objectPosition: "35% 15%",
    mobilePaddingTop: 360,
    mobileImageFrame: {
      height: "99.99%",
      width: "137.93%",
      left: "-18.96%",
      top: "-0.04%",
    },
  },
  {
    name: "Azu Avalos",
    role: "Customer Success Specialist",
    bio: "Azu serves as the connection between our solutions and our clients' goals. She draws on her industry experience and a genuine care for people to help every partner get the most out of our work together.",
    image: teamAzu,
    variant: "medium-flex",
    objectPosition: "50% 12%",
    mobilePaddingTop: 360,
    mobileImageFrame: {
      height: "100%",
      width: "145.64%",
      left: "-18.67%",
      top: "0",
    },
  },
];

export const TEAM_ROW_BOTTOM = [
  {
    name: "Samuel Avila",
    role: "QA Engineer",
    bio: "Sam brings a careful, detail-oriented approach to quality assurance. His thoroughness and dedication to high standards help ensure that the solutions we deliver are reliable and well-tested.",
    image: teamSamuel,
    variant: "medium-fixed",
    objectPosition: "42% 12%",
    mobilePaddingTop: 360,
  },
  {
    name: "Steven Brodson",
    role: "AI & Cyber Security Expert",
    bio: "Steven helps organizations secure AI systems before they fail. He focuses on AI governance, cyber resilience, risk assessment, and practical safeguards for generative AI across enterprise environments.",
    image: teamSteven,
    variant: "medium-fixed",
    objectPosition: "38% 12%",
    mobilePaddingTop: 360,
  },
];

/** Figma 1888:6881 mobile carousel — all members in order */
export const ALL_TEAM_MEMBERS = [
  ...TEAM_ROW_LARGE,
  ...TEAM_ROW_MEDIUM,
  ...TEAM_ROW_BOTTOM,
];

export const MOBILE_TEAM_CARD_HEIGHT = 590;
export const MOBILE_TEAM_CARD_PB = 12;

export function mobileTeamOverlayMaxHeight(paddingTop) {
  return MOBILE_TEAM_CARD_HEIGHT - paddingTop - MOBILE_TEAM_CARD_PB;
}

