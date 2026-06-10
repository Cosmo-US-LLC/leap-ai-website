import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function readJson(relPath) {
  return JSON.parse(fs.readFileSync(path.join(root, relPath), "utf8"));
}

function writeJson(relPath, data) {
  fs.writeFileSync(path.join(root, relPath), `${JSON.stringify(data, null, 2)}\n`);
}

const teamMembersEn = {
  gregory: {
    name: "Gregory van Duyse",
    role: "CEO & Co-founder",
    bio: "With years of entrepreneurial experience, Greg brings a grounded perspective on leadership and strategy. He focuses on helping businesses translate AI capabilities into meaningful growth and smoother operations.",
  },
  benjamin: {
    name: "Benjamin Gonzalez M.Sc.",
    role: "CEO & Co-founder",
    bio: "Holding a Master's in Data Science, Ben works to bridge the gap between technical engineering and business goals. He enjoys making complex concepts accessible and turning them into practical value for the team and clients.",
  },
  junaid: {
    name: "Junaid Dar",
    role: "Marketing Partner",
    roleCapitalize: "true",
    bio: "Junaid brings analytical thinking and hands-on marketing execution. With over 10 years of experience working with startups, scaling companies, and Fortune 1000 brands, he specializes in building data-driven growth systems.",
  },
  azeem: {
    name: "Azeem Khan",
    role: "Automation Engineer",
    bio: "Azeem has a knack for designing thoughtful automation workflows that simplify day-to-day operations. He takes the time to understand manual processes and builds reliable systems that help teams work more efficiently.",
  },
  azu: {
    name: "Azu Avalos",
    role: "Customer Success Specialist",
    bio: "Azu serves as the connection between our solutions and our clients' goals. She draws on her industry experience and a genuine care for people to help every partner get the most out of our work together.",
  },
  samuel: {
    name: "Samuel Avila",
    role: "QA Engineer",
    bio: "Sam brings a careful, detail-oriented approach to quality assurance. His thoroughness and dedication to high standards help ensure that the solutions we deliver are reliable and well-tested.",
  },
  steven: {
    name: "Steven Brodson",
    role: "AI & Cyber Security Expert",
    bio: "Steven helps organizations secure AI systems before they fail. He focuses on AI governance, cyber resilience, risk assessment, and practical safeguards for generative AI across enterprise environments.",
  },
};

const teamMembersFr = {
  gregory: {
    name: "Gregory van Duyse",
    role: "PDG et cofondateur",
    bio: "Fort de nombreuses années d'expérience entrepreneuriale, Greg apporte une perspective ancrée sur le leadership et la stratégie. Il aide les entreprises à transformer les capacités de l'IA en croissance concrète et en opérations plus fluides.",
  },
  benjamin: {
    name: "Benjamin Gonzalez M.Sc.",
    role: "PDG et cofondateur",
    bio: "Titulaire d'un master en science des données, Ben comble l'écart entre l'ingénierie technique et les objectifs d'affaires. Il aime rendre les concepts complexes accessibles et les transformer en valeur pratique pour l'équipe et les clients.",
  },
  junaid: {
    name: "Junaid Dar",
    role: "Partenaire marketing",
    roleCapitalize: "true",
    bio: "Junaid combine réflexion analytique et exécution marketing concrète. Avec plus de 10 ans d'expérience auprès de startups, d'entreprises en croissance et de marques du Fortune 1000, il se spécialise dans la construction de systèmes de croissance fondés sur les données.",
  },
  azeem: {
    name: "Azeem Khan",
    role: "Ingénieur en automatisation",
    bio: "Azeem a le talent de concevoir des flux d'automatisation réfléchis qui simplifient les opérations quotidiennes. Il prend le temps de comprendre les processus manuels et bâtit des systèmes fiables qui aident les équipes à travailler plus efficacement.",
  },
  azu: {
    name: "Azu Avalos",
    role: "Spécialiste en réussite client",
    bio: "Azu fait le lien entre nos solutions et les objectifs de nos clients. Elle s'appuie sur son expérience sectorielle et une attention authentique aux personnes pour aider chaque partenaire à tirer le maximum de notre collaboration.",
  },
  samuel: {
    name: "Samuel Avila",
    role: "Ingénieur QA",
    bio: "Sam apporte une approche minutieuse et orientée vers les détails à l'assurance qualité. Sa rigueur et son engagement envers des standards élevés contribuent à garantir que les solutions que nous livrons sont fiables et bien testées.",
  },
  steven: {
    name: "Steven Brodson",
    role: "Expert en IA et cybersécurité",
    bio: "Steven aide les organisations à sécuriser leurs systèmes d'IA avant qu'ils ne défaillent. Il se concentre sur la gouvernance de l'IA, la cyber-résilience, l'évaluation des risques et les garde-fous pratiques pour l'IA générative en environnement d'entreprise.",
  },
};

const teamMembersEs = {
  gregory: {
    name: "Gregory van Duyse",
    role: "CEO y cofundador",
    bio: "Con años de experiencia emprendedora, Greg aporta una perspectiva sólida sobre liderazgo y estrategia. Se enfoca en ayudar a las empresas a convertir las capacidades de IA en crecimiento significativo y operaciones más fluidas.",
  },
  benjamin: {
    name: "Benjamin Gonzalez M.Sc.",
    role: "CEO y cofundador",
    bio: "Con un máster en ciencia de datos, Ben cierra la brecha entre la ingeniería técnica y los objetivos de negocio. Le gusta hacer accesibles los conceptos complejos y convertirlos en valor práctico para el equipo y los clientes.",
  },
  junaid: {
    name: "Junaid Dar",
    role: "Socio de marketing",
    roleCapitalize: "true",
    bio: "Junaid aporta pensamiento analítico y ejecución de marketing práctica. Con más de 10 años de experiencia con startups, empresas en escalamiento y marcas Fortune 1000, se especializa en construir sistemas de crecimiento basados en datos.",
  },
  azeem: {
    name: "Azeem Khan",
    role: "Ingeniero de automatización",
    bio: "Azeem tiene talento para diseñar flujos de automatización bien pensados que simplifican las operaciones diarias. Se toma el tiempo para entender los procesos manuales y construye sistemas confiables que ayudan a los equipos a trabajar con mayor eficiencia.",
  },
  azu: {
    name: "Azu Avalos",
    role: "Especialista en éxito del cliente",
    bio: "Azu es el vínculo entre nuestras soluciones y los objetivos de nuestros clientes. Se apoya en su experiencia en la industria y un genuino interés por las personas para ayudar a cada socio a aprovechar al máximo nuestra colaboración.",
  },
  samuel: {
    name: "Samuel Avila",
    role: "Ingeniero de QA",
    bio: "Sam aporta un enfoque cuidadoso y orientado al detalle en aseguramiento de calidad. Su minuciosidad y dedicación a altos estándares ayudan a garantizar que las soluciones que entregamos sean confiables y bien probadas.",
  },
  steven: {
    name: "Steven Brodson",
    role: "Experto en IA y ciberseguridad",
    bio: "Steven ayuda a las organizaciones a asegurar sus sistemas de IA antes de que fallen. Se enfoca en gobernanza de IA, ciberresiliencia, evaluación de riesgos y salvaguardas prácticas para IA generativa en entornos empresariales.",
  },
};

const teamFr = {
  headingBold: "Rencontrez ",
  headingMuted: "l'équipe",
  intro:
    "Forts d'expériences en leadership exécutif, nous comprenons les défis que vous affrontez. Nous travaillons à vos côtés pour transformer des problèmes complexes en avantages durables et concrets.",
  prev: "Membre précédent",
  next: "Membre suivant",
  viewMember: "Voir {{name}}",
  members: teamMembersFr,
};

const teamEs = {
  headingBold: "Conozca al ",
  headingMuted: "equipo",
  intro:
    "Con experiencia en liderazgo ejecutivo, entendemos los desafíos que enfrenta. Trabajamos junto a usted para convertir problemas complejos en ventajas prácticas y duraderas.",
  prev: "Miembro anterior",
  next: "Siguiente miembro",
  viewMember: "Ver {{name}}",
  members: teamMembersEs,
};

const trustFr = {
  titleBold: "Un partenaire en qui ",
  titleMuted: "vous pouvez avoir confiance.",
  description:
    "Nous aidons les dirigeants visionnaires à naviguer la transformation IA sans complexité, risque ni approximations. Arrêtez les pilotes aléatoires et bâtissez une entreprise qui pense, apprend et s'optimise.",
  photoAlt: "Équipe Leap 41 collaborant autour d'une table",
  bookConsultation: "Réserver une consultation gratuite",
};

const trustEs = {
  titleBold: "Un socio en quien ",
  titleMuted: "puede confiar.",
  description:
    "Ayudamos a líderes visionarios a navegar la transformación de IA sin complejidad, riesgo ni conjeturas. Deje los pilotos aleatorios y construya un negocio que piensa, aprende y se optimiza.",
  photoAlt: "Equipo Leap 41 colaborando alrededor de una mesa",
  bookConsultation: "Reservar una consulta gratuita",
};

for (const lang of ["en", "fr", "es"]) {
  const about = readJson(`src/locales/${lang}/about.json`);
  about.team =
    lang === "en"
      ? {
          headingBold: "Meet ",
          headingMuted: "the team",
          intro:
            "With backgrounds in executive leadership, we understand the challenges you face firsthand. We work alongside you to turn complex problems into lasting, practical advantages.",
          prev: "Previous team member",
          next: "Next team member",
          viewMember: "View {{name}}",
          members: teamMembersEn,
        }
      : lang === "fr"
        ? teamFr
        : teamEs;

  about.trust =
    lang === "en"
      ? {
          titleBold: "A partner you ",
          titleMuted: "can trust.",
          description:
            "We help visionary leaders navigate the AI transformation without the complexity, the risk, or the guesswork. Stop running random pilot projects and start building a business that thinks, learns, and optimizes itself.",
          photoAlt: "Leap 41 team collaborating around a table",
          bookConsultation: "Book a Free Consultation Call",
        }
      : lang === "fr"
        ? trustFr
        : trustEs;

  writeJson(`src/locales/${lang}/about.json`, about);
}

const legalEn = {
  privacy: {
    linkText: "Privacy Policy",
    gaOptOutLabel: "Google Analytics opt-out tool.",
  },
  terms: {
    headingBold: "Terms ",
    headingMuted: "of Services",
    intro: [
      "By accessing this website, you are agreeing to these terms and conditions, so we suggest that you review them carefully.",
      "When we say \"we\", \"us\" or \"our\", we mean Leap AI Solutions (or more commonly known as Leap AI).",
    ],
    sections: [
      {
        heading: "Acceptable use of this website",
        paragraphs: ["We require you to follow several simple rules when accessing or using this website. You must not:"],
        list: [
          "use this website in violation of any law, rule or regulation",
          "interfere with or disrupt this website or any of our computer systems, servers, networks, databases, software, hardware or equipment used by or for this website",
          "interfere with the use or enjoyment of this website by others",
          "introduce code which is disruptive or harmful",
          "attempt to gain unauthorized access to our computer systems, servers, networks, databases, software, hardware or equipment, including to: user-restricted areas of this website; logins and passwords of others; or personal information and personal accounts of others",
        ],
        ordered: true,
      },
      {
        heading: "Privacy",
        privacyLink: true,
        paragraphs: [
          "Your privacy is important to us. If you provide any personal information to us through this website, we will handle it according to what we say in our",
          "",
        ],
      },
      {
        heading: "Copyright & trademarks",
        paragraphs: [
          "The website design, the content on this website and its arrangement is protected by our copyright.",
          "The name, trademarks and official marks of Leap AI may not be reproduced, whether for commercial or non-commercial purposes, without our prior authorization which you must receive in writing from us.",
        ],
      },
      {
        heading: "User contributed content",
        paragraphs: [
          "By submitting your content, you agree to give us a right to do what we want with the content that you submit and to permit others to do the same; in both cases, without the need to give you notice, acknowledgement or payment, subject to terms of our Privacy Policy. You also agree to waive your moral rights as an author under copyright law in the submitted content.",
        ],
      },
      {
        heading: "Password protected information",
        paragraphs: [
          "Portions of this website require a user ID and a password to access and may require you to agree to additional terms and conditions. To apply for a user ID and a password, follow the instructions on the password-protected pages. You alone are responsible for keeping your user ID and password confidential, and for any and all activity that occurs on this Website under your user ID or password. You agree to immediately notify Leap AI of any unauthorized use of your user ID or password or any other breach of security.",
        ],
      },
      {
        heading: "Links to other websites and social media platforms",
        paragraphs: [
          "You may see links on this website to other websites and some widely used social media platforms. We have included them because they may be of interest to you. Just to be clear, providing a link to them doesn't mean that we endorse or recommend them to you.",
          "Also, since these other websites and social media platforms are controlled and maintained by other people, we can't be sure that the link will still work when you click on it or that the service or content is useful, appropriate, virus-free or reliable. Therefore, you need to decide for yourself whether you want to follow any link or to agree to receive or rely on any service or content that is made available to you.",
        ],
      },
      {
        heading: "Your privacy and third party sites",
        paragraphs: [
          "Any information that you provide to or through a social media platform or other website is not collected or controlled by Leap AI. Social media platforms or other websites are not bound by our Privacy Policy. You should review the privacy policies of any linked website or social media platform before providing any personal or other information. Others may not comply with the same privacy laws, policies and practices that we do.",
        ],
      },
      {
        heading: "Warranty disclaimer",
        paragraphs: [
          "USE OF THIS WEBSITE AND ITS CONTENTS IS AT YOUR OWN RISK. THIS WEBSITE AND ALL OF ITS CONTENT ARE PROVIDED \"AS IS\". YOU MUST NOT RELY ON ANY CONTENT PUBLISHED ON OR LINKED TO THIS WEBSITE WITHOUT FIRST MAKING YOUR OWN ENQUIRIES TO VERIFY IT IS ACCURATE, CURRENT AND COMPLETE. WE DO NOT MAKE, AND EXPRESSLY DISCLAIM, ANY REPRESENTATIONS, WARRANTIES, COVENANTS AND CONDITIONS, EXPRESS OR IMPLIED, ARISING OUT OF OPERATION OF LAW, COURSE OF PERFORMANCE, COURSE OF DEALING, USAGE OF TRADE OR OTHERWISE, INCLUDING ANY EXPRESS OR IMPLIED WARRANTIES AND CONDITIONS OF: MERCHANTABILITY; MERCHANTABLE QUALITY; FITNESS FOR A PARTICULAR PURPOSE; NON-INFRINGEMENT; SAFETY; QUALITY; FREEDOM FROM DEFECTS OR THAT DEFECTS WILL BE CORRECTED; UNINTERRUPTED, VIRUS-FREE OR ERROR-FREE USE OF THIS WEBSITE; OR ACCURACY, CURRENCY, RELIABILITY, COMPLETENESS OR APPROPRIATENESS RELATING TO THE CONTENT OF THIS WEBSITE.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "Under no circumstances will Leap AI or its directors, employees, agents and independent contractors have any responsibility or liability for any loss or damage whatsoever (including without limitation direct, indirect, special, incidental, consequential, punitive, exemplary or other damages, and including without limitation to any loss of profit, costs, expenses, harm to business, business interruption, reputation, loss of information or programs or data, loss of savings, loss of revenue, loss of goodwill, loss of tangible or intangible property, legal fees or legal costs, wasted management or office time or damages of any kind whatsoever), whether based in contract, tort, negligence or any other legal basis, arising out of or in connection with this website, any linked website or linked social media platform (including without limitation any damages suffered as a result of the use, inability to use, failure of, or any omissions or inaccuracies in, this website, any linked websites or linked social media platforms, or any of the services or content of the foregoing), even if Leap AI has been specifically advised of the possibility of such damage or loss, or if such damage or loss was foreseeable.",
        ],
      },
      {
        heading: "General",
        paragraphs: [
          "Leap AI reserves the right to supplement, remove or modify these terms and conditions at any time and from time to time without notice. Please check this website regularly for any changes. If you continue to use this website following a change to these terms and conditions, you will be deemed to have accepted the changes.",
          "If any term or condition set out in these terms and conditions is held to be invalid, unenforceable or illegal for any reason, the remaining terms and conditions will continue in full force.",
          "The website's content and use, and these terms and conditions are governed by the laws of the Province of Alberta, without giving effect to any conflict of law principles or rules. These terms and conditions are deemed to be entered into by you in the Province of Alberta.",
          "Leap AI maintains and controls this website from the Province of Alberta, Canada. Leap AI makes no representation that this website is appropriate or available for use outside Canada. Access to this website from territories where the website's contents are illegal is prohibited. If you access this website from outside Canada, you are responsible for complying with all local laws.",
        ],
      },
    ],
  },
  privacyPolicy: {
    headingBold: "Privacy ",
    headingMuted: "Policy",
    sections: [
      {
        heading: "Our commitment",
        paragraphs: [
          "We are committed to protecting your privacy. This Privacy Statement explains our current practices regarding what information we may collect, use, and secure your personal information when you visit our website.",
        ],
      },
      {
        heading: "Collection",
        paragraphs: [
          "When you browse our website, limited amounts of standard information are automatically collected for traffic monitoring and statistical purposes. The information is analyzed for operational trends, performance, and for ways to improve our website. We cannot identify you from this information. See \"Analytics & Cookies\" below.",
        ],
      },
      {
        heading: "Use",
        paragraphs: [
          "We only use personal information for the purpose it has been collected, or for a consistent purpose, or any other use specifically authorized by law.",
        ],
      },
      {
        heading: "Disclosure",
        paragraphs: ["We do not disclose personal information to anyone."],
      },
      {
        heading: "Analytics & Cookies",
        gaOptOutLink: true,
        paragraphs: [
          "In order to serve you better, we use Google Analytics to help analyse the use of our website. These tools use cookies to collect and generate information about your visits to our site (including your IP address) that is transmitted to their servers in an anonymous form for processing. We study patterns of website activity so we can improve the experience of visitors to our site.",
          "The use of these tools does not allow us or our analytics service provider to identify individuals.",
          "You can opt-out of analytics activity by setting your browser to notify you when a cookie is sent and block analytics cookies if desired. Please consult your browser's Help Menu for instructions. Visiting our website with analytics cookies disabled will have no significant impact on your browsing experience. Google currently offers a free ",
        ],
      },
      {
        heading: "How to unsubscribe",
        paragraphs: [
          "If you do not want to continue to receive e-mail from Leap AI, please note that every time we send you an email, we will give you the option to unsubscribe from our e-mail list, so you'll be able to stop receiving our e-mails at any time. Your email address will be immediately removed from our email list.",
        ],
      },
      {
        heading: "Who to contact?",
        emailLink: true,
        paragraphs: ["Questions or comments regarding these practices may be directed to:", ""],
      },
      {
        heading: "Security",
        paragraphs: [
          "Our security practices are continually evolving to ensure that the integrity and confidentiality of information and systems are maintained. We use up-to-date security safeguards to protect our network and website from misuse, alteration, copying, disclosure, destruction, monitoring or unauthorized sharing of information and damage.",
        ],
      },
    ],
  },
};

const legalFr = JSON.parse(JSON.stringify(legalEn));
legalFr.terms.headingBold = "Conditions ";
legalFr.terms.headingMuted = "d'utilisation";
legalFr.terms.intro = [
  "En accédant à ce site, vous acceptez ces conditions. Nous vous invitons à les lire attentivement.",
  "Lorsque nous disons « nous » ou « notre », nous désignons Leap AI Solutions (plus couramment Leap AI).",
];
legalFr.privacy.linkText = "Politique de confidentialité";
legalFr.privacy.gaOptOutLabel = "outil de désactivation de Google Analytics.";
legalFr.privacyPolicy.headingBold = "Politique de ";
legalFr.privacyPolicy.headingMuted = "confidentialité";

const legalEs = JSON.parse(JSON.stringify(legalEn));
legalEs.terms.headingBold = "Términos ";
legalEs.terms.headingMuted = "de servicio";
legalEs.terms.intro = [
  "Al acceder a este sitio web, acepta estos términos y condiciones. Le recomendamos revisarlos con atención.",
  "Cuando decimos «nosotros» o «nuestro», nos referimos a Leap AI Solutions (más conocido como Leap AI).",
];
legalEs.privacy.linkText = "Política de privacidad";
legalEs.privacy.gaOptOutLabel = "herramienta de exclusión de Google Analytics.";
legalEs.privacyPolicy.headingBold = "Política de ";
legalEs.privacyPolicy.headingMuted = "privacidad";

for (const [lang, data] of Object.entries({ en: legalEn, fr: legalFr, es: legalEs })) {
  writeJson(`src/locales/${lang}/legal.json`, data);
}

for (const lang of ["en", "fr", "es"]) {
  const meta = readJson(`src/locales/${lang}/meta.json`);
  meta.terms = {
    title: lang === "fr" ? "Conditions d'utilisation | Leap 41" : lang === "es" ? "Términos de servicio | Leap 41" : "Terms of Services | Leap 41",
    description:
      lang === "fr"
        ? "Consultez les conditions d'utilisation du site et des services Leap AI."
        : lang === "es"
          ? "Lea los términos y condiciones del sitio web y los servicios de Leap AI."
          : "Read the terms and conditions for using the Leap AI website and services.",
  };
  meta.privacy = {
    title: lang === "fr" ? "Politique de confidentialité | Leap 41" : lang === "es" ? "Política de privacidad | Leap 41" : "Privacy Policy | Leap 41",
    description:
      lang === "fr"
        ? "Découvrez comment Leap AI collecte, utilise et protège vos informations personnelles."
        : lang === "es"
          ? "Conozca cómo Leap AI recopila, utiliza y protege su información personal."
          : "Learn how Leap AI collects, uses, and protects your personal information.",
  };
  writeJson(`src/locales/${lang}/meta.json`, meta);
}

console.log("Wrote about team/trust, legal.json, and meta terms/privacy for en, fr, es");
