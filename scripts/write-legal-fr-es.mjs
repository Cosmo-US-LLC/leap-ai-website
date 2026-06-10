import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function writeJson(rel, data) {
  fs.writeFileSync(path.join(root, rel), `${JSON.stringify(data, null, 2)}\n`);
}

const legalFr = {
  privacy: {
    linkText: "Politique de confidentialité",
    gaOptOutLabel: "outil de désactivation de Google Analytics.",
  },
  terms: {
    headingBold: "Conditions ",
    headingMuted: "d'utilisation",
    intro: [
      "En accédant à ce site web, vous acceptez les présentes conditions d'utilisation. Nous vous invitons à les lire attentivement.",
      "Lorsque nous disons « nous », « notre » ou « nos », nous désignons Leap AI Solutions (plus couramment appelé Leap AI).",
    ],
    sections: [
      {
        heading: "Utilisation acceptable de ce site",
        paragraphs: [
          "Vous devez respecter plusieurs règles simples lors de l'accès ou de l'utilisation de ce site. Vous ne devez pas :",
        ],
        list: [
          "utiliser ce site en violation d'une loi, d'un règlement ou d'une norme",
          "perturber ou interrompre ce site ou l'un de nos systèmes informatiques, serveurs, réseaux, bases de données, logiciels, matériels ou équipements utilisés par ou pour ce site",
          "nuire à l'utilisation ou à la jouissance de ce site par d'autres personnes",
          "introduire du code perturbateur ou nuisible",
          "tenter d'obtenir un accès non autorisé à nos systèmes informatiques, serveurs, réseaux, bases de données, logiciels, matériels ou équipements, notamment aux zones restreintes de ce site, aux identifiants et mots de passe d'autrui, ou aux renseignements personnels et comptes personnels d'autrui",
        ],
        ordered: true,
      },
      {
        heading: "Confidentialité",
        privacyLink: true,
        paragraphs: [
          "Votre vie privée est importante pour nous. Si vous nous fournissez des renseignements personnels par l'intermédiaire de ce site, nous les traiterons conformément à notre",
          "",
        ],
      },
      {
        heading: "Droit d'auteur et marques de commerce",
        paragraphs: [
          "La conception du site, le contenu de ce site et son agencement sont protégés par notre droit d'auteur.",
          "Le nom, les marques de commerce et les marques officielles de Leap AI ne peuvent être reproduits, à des fins commerciales ou non commerciales, sans notre autorisation préalable écrite.",
        ],
      },
      {
        heading: "Contenu fourni par les utilisateurs",
        paragraphs: [
          "En soumettant votre contenu, vous nous accordez le droit d'utiliser le contenu soumis comme nous l'entendons et d'autoriser d'autres personnes à faire de même, dans les deux cas sans obligation de vous aviser, de vous reconnaître ou de vous rémunérer, sous réserve des termes de notre Politique de confidentialité. Vous renoncez également à vos droits moraux d'auteur sur le contenu soumis.",
        ],
      },
      {
        heading: "Informations protégées par mot de passe",
        paragraphs: [
          "Certaines parties de ce site nécessitent un identifiant et un mot de passe et peuvent exiger l'acceptation de conditions supplémentaires. Pour obtenir un identifiant et un mot de passe, suivez les instructions des pages protégées. Vous êtes seul responsable de la confidentialité de votre identifiant et de votre mot de passe, ainsi que de toute activité sur ce site sous votre identifiant ou mot de passe. Vous acceptez d'aviser immédiatement Leap AI de toute utilisation non autorisée de votre identifiant ou mot de passe ou de toute autre faille de sécurité.",
        ],
      },
      {
        heading: "Liens vers d'autres sites et plateformes de médias sociaux",
        paragraphs: [
          "Vous pouvez voir sur ce site des liens vers d'autres sites et certaines plateformes de médias sociaux largement utilisées. Nous les avons inclus parce qu'ils peuvent vous intéresser. Le fait de fournir un lien ne signifie pas que nous les approuvons ou les recommandons.",
          "Comme ces autres sites et plateformes sont contrôlés et maintenus par d'autres personnes, nous ne pouvons pas garantir que le lien fonctionnera toujours lorsque vous cliquerez dessus, ni que le service ou le contenu sera utile, approprié, exempt de virus ou fiable. Vous devez donc décider vous-même si vous souhaitez suivre un lien ou accepter de recevoir ou de vous fier à un service ou contenu mis à votre disposition.",
        ],
      },
      {
        heading: "Votre vie privée et les sites tiers",
        paragraphs: [
          "Les renseignements que vous fournissez à ou par l'intermédiaire d'une plateforme de médias sociaux ou d'un autre site ne sont pas recueillis ni contrôlés par Leap AI. Ces plateformes ou sites ne sont pas liés par notre Politique de confidentialité. Vous devriez consulter les politiques de confidentialité de tout site ou plateforme liée avant de fournir des renseignements personnels ou autres. D'autres entités peuvent ne pas respecter les mêmes lois, politiques et pratiques en matière de confidentialité que nous.",
        ],
      },
      {
        heading: "Exclusion de garantie",
        paragraphs: [
          "L'UTILISATION DE CE SITE ET DE SON CONTENU EST À VOS PROPRES RISQUES. CE SITE ET TOUT SON CONTENU SONT FOURNIS « TELS QUELS ». VOUS NE DEVEZ PAS VOUS FIER À UN CONTENU PUBLIÉ SUR OU LIÉ À CE SITE SANS D'ABORD VÉRIFIER PAR VOS PROPRES MOYENS QU'IL EST EXACT, À JOUR ET COMPLET. NOUS NE FORMULONS AUCUNE DÉCLARATION NI GARANTIE, EXPRESSE OU IMPLICITE, ET NOUS LES EXCLUONS EXPRESSÉMENT, DÉCOULANT DE LA LOI, DE L'EXÉCUTION, DES USAGES DU COMMERCE OU AUTREMENT, NOTAMMENT EN MATIÈRE DE QUALITÉ MARCHANDE, D'ADÉQUATION À UN USAGE PARTICULIER, DE NON-CONTREFAÇON, DE SÉCURITÉ, D'ABSENCE DE DÉFAUTS, D'UTILISATION ININTERROMPUE, SANS VIRUS OU SANS ERREUR, OU D'EXACTITUDE, D'ACTUALITÉ, DE FIABILITÉ, D'EXHAUSTIVITÉ OU DE PERTINENCE DU CONTENU DE CE SITE.",
        ],
      },
      {
        heading: "Limitation de responsabilité",
        paragraphs: [
          "En aucun cas Leap AI, ses administrateurs, employés, agents ou entrepreneurs indépendants ne pourront être tenus responsables de quelque perte ou dommage que ce soit (y compris, sans limitation, les dommages directs, indirects, spéciaux, accessoires, consécutifs, punitifs, exemplaires ou autres, ainsi que toute perte de profit, de coûts, de dépenses, de préjudice commercial, d'interruption d'activité, de réputation, d'information ou de programmes ou données, d'économies, de revenus, de clientèle, de biens corporels ou incorporels, d'honoraires ou frais juridiques, de temps de gestion ou de bureau gaspillé, ou de dommages de toute nature), que ce soit en vertu d'un contrat, d'un délit, d'une négligence ou de toute autre base juridique, découlant de ou lié à ce site, à tout site lié ou plateforme de médias sociaux liée (y compris les dommages résultant de l'utilisation, de l'impossibilité d'utiliser, de l'échec ou d'omissions ou inexactitudes sur ce site, les sites liés ou plateformes liées, ou les services ou contenus qui en découlent), même si Leap AI a été avisée de la possibilité de tels dommages ou pertes, ou si de tels dommages ou pertes étaient prévisibles.",
        ],
      },
      {
        heading: "Dispositions générales",
        paragraphs: [
          "Leap AI se réserve le droit de compléter, supprimer ou modifier ces conditions à tout moment et de temps à autre, sans préavis. Veuillez consulter régulièrement ce site pour prendre connaissance des changements. Si vous continuez à utiliser ce site après une modification de ces conditions, vous serez réputé les avoir acceptées.",
          "Si une disposition de ces conditions est jugée invalide, inapplicable ou illégale pour quelque raison que ce soit, les autres dispositions demeureront pleinement en vigueur.",
          "Le contenu et l'utilisation du site, ainsi que ces conditions, sont régis par les lois de la province de l'Alberta, sans égard aux principes de conflit de lois. Ces conditions sont réputées conclues par vous en Alberta.",
          "Leap AI maintient et contrôle ce site depuis la province de l'Alberta, au Canada. Leap AI ne déclare pas que ce site est approprié ou disponible hors du Canada. L'accès à ce site depuis des territoires où son contenu est illégal est interdit. Si vous accédez à ce site hors du Canada, vous êtes responsable du respect des lois locales applicables.",
        ],
      },
    ],
  },
  privacyPolicy: {
    headingBold: "Politique de ",
    headingMuted: "confidentialité",
    sections: [
      {
        heading: "Notre engagement",
        paragraphs: [
          "Nous nous engageons à protéger votre vie privée. La présente déclaration explique nos pratiques actuelles concernant les renseignements que nous pouvons recueillir, utiliser et protéger lorsque vous visitez notre site web.",
        ],
      },
      {
        heading: "Collecte",
        paragraphs: [
          "Lorsque vous naviguez sur notre site, des renseignements standard limités sont automatiquement recueillis à des fins de surveillance du trafic et de statistiques. Ces renseignements sont analysés pour identifier les tendances opérationnelles, la performance et les moyens d'améliorer notre site. Nous ne pouvons pas vous identifier à partir de ces renseignements. Voir « Analytique et témoins » ci-dessous.",
        ],
      },
      {
        heading: "Utilisation",
        paragraphs: [
          "Nous n'utilisons les renseignements personnels qu'aux fins pour lesquelles ils ont été recueillis, à des fins compatibles, ou à toute autre fin expressément autorisée par la loi.",
        ],
      },
      {
        heading: "Communication",
        paragraphs: ["Nous ne communiquons de renseignements personnels à personne."],
      },
      {
        heading: "Analytique et témoins",
        gaOptOutLink: true,
        paragraphs: [
          "Afin de mieux vous servir, nous utilisons Google Analytics pour analyser l'utilisation de notre site. Ces outils utilisent des témoins (cookies) pour recueillir et générer des renseignements sur vos visites (y compris votre adresse IP) transmis à leurs serveurs sous forme anonyme pour traitement. Nous étudions les habitudes d'activité afin d'améliorer l'expérience des visiteurs.",
          "L'utilisation de ces outils ne nous permet pas, ni à notre fournisseur d'analytique, d'identifier des individus.",
          "Vous pouvez refuser l'analytique en configurant votre navigateur pour qu'il vous avise lorsqu'un témoin est envoyé et bloquer les témoins d'analytique si vous le souhaitez. Consultez le menu d'aide de votre navigateur pour les instructions. Visiter notre site avec les témoins d'analytique désactivés n'aura pas d'impact significatif sur votre navigation. Google offre actuellement gratuitement un ",
        ],
      },
      {
        heading: "Comment se désabonner",
        paragraphs: [
          "Si vous ne souhaitez plus recevoir de courriels de Leap AI, notez que chaque courriel que nous vous envoyons comprendra une option pour vous désabonner de notre liste, afin que vous puissiez cesser de recevoir nos messages à tout moment. Votre adresse courriel sera immédiatement retirée de notre liste.",
        ],
      },
      {
        heading: "Qui contacter ?",
        emailLink: true,
        paragraphs: ["Les questions ou commentaires concernant ces pratiques peuvent être adressés à :", ""],
      },
      {
        heading: "Sécurité",
        paragraphs: [
          "Nos pratiques de sécurité évoluent continuellement pour assurer l'intégrité et la confidentialité des renseignements et des systèmes. Nous utilisons des mesures de protection à jour pour protéger notre réseau et notre site contre l'utilisation abusive, l'altération, la copie, la divulgation, la destruction, la surveillance ou le partage non autorisé de renseignements et les dommages.",
        ],
      },
    ],
  },
};

const legalEs = {
  privacy: {
    linkText: "Política de privacidad",
    gaOptOutLabel: "herramienta de exclusión de Google Analytics.",
  },
  terms: {
    headingBold: "Términos ",
    headingMuted: "de servicio",
    intro: [
      "Al acceder a este sitio web, usted acepta estos términos y condiciones. Le recomendamos revisarlos con atención.",
      "Cuando decimos «nosotros», «nos» o «nuestro», nos referimos a Leap AI Solutions (más conocido como Leap AI).",
    ],
    sections: [
      {
        heading: "Uso aceptable de este sitio web",
        paragraphs: [
          "Debe seguir varias reglas simples al acceder o utilizar este sitio web. No debe:",
        ],
        list: [
          "utilizar este sitio web en violación de cualquier ley, norma o reglamento",
          "interferir o interrumpir este sitio web o cualquiera de nuestros sistemas informáticos, servidores, redes, bases de datos, software, hardware o equipos utilizados por o para este sitio",
          "interferir con el uso o disfrute de este sitio web por parte de otros",
          "introducir código disruptivo o dañino",
          "intentar obtener acceso no autorizado a nuestros sistemas informáticos, servidores, redes, bases de datos, software, hardware o equipos, incluidas áreas restringidas de este sitio, credenciales de otros usuarios o información personal y cuentas personales de terceros",
        ],
        ordered: true,
      },
      {
        heading: "Privacidad",
        privacyLink: true,
        paragraphs: [
          "Su privacidad es importante para nosotros. Si nos proporciona información personal a través de este sitio web, la trataremos conforme a lo indicado en nuestra",
          "",
        ],
      },
      {
        heading: "Derechos de autor y marcas registradas",
        paragraphs: [
          "El diseño del sitio web, el contenido de este sitio y su disposición están protegidos por nuestros derechos de autor.",
          "El nombre, las marcas comerciales y las marcas oficiales de Leap AI no pueden reproducirse, con fines comerciales o no comerciales, sin nuestra autorización previa por escrito.",
        ],
      },
      {
        heading: "Contenido aportado por usuarios",
        paragraphs: [
          "Al enviar su contenido, usted nos otorga el derecho de hacer lo que consideremos oportuno con el contenido enviado y de permitir que otros hagan lo mismo; en ambos casos, sin necesidad de avisarle, reconocerle o pagarle, sujeto a los términos de nuestra Política de privacidad. También acepta renunciar a sus derechos morales de autor sobre el contenido enviado.",
        ],
      },
      {
        heading: "Información protegida con contraseña",
        paragraphs: [
          "Partes de este sitio web requieren un ID de usuario y una contraseña para acceder y pueden exigir la aceptación de términos y condiciones adicionales. Para solicitar un ID de usuario y una contraseña, siga las instrucciones en las páginas protegidas. Usted es el único responsable de mantener confidenciales su ID de usuario y contraseña, y de toda actividad que ocurra en este sitio bajo su ID o contraseña. Acepta notificar de inmediato a Leap AI cualquier uso no autorizado de su ID o contraseña o cualquier otra violación de seguridad.",
        ],
      },
      {
        heading: "Enlaces a otros sitios web y plataformas de redes sociales",
        paragraphs: [
          "Puede ver enlaces en este sitio web a otros sitios y a algunas plataformas de redes sociales ampliamente utilizadas. Los hemos incluido porque pueden ser de su interés. Proporcionar un enlace no significa que los respaldemos o recomendemos.",
          "Como esos otros sitios y plataformas son controlados y mantenidos por otras personas, no podemos garantizar que el enlace seguirá funcionando cuando haga clic, ni que el servicio o contenido sea útil, apropiado, libre de virus o confiable. Por lo tanto, debe decidir por sí mismo si desea seguir cualquier enlace o aceptar recibir o confiar en cualquier servicio o contenido disponible.",
        ],
      },
      {
        heading: "Su privacidad y sitios de terceros",
        paragraphs: [
          "Cualquier información que proporcione a o a través de una plataforma de redes sociales u otro sitio web no es recopilada ni controlada por Leap AI. Esas plataformas u otros sitios no están sujetos a nuestra Política de privacidad. Debe revisar las políticas de privacidad de cualquier sitio o plataforma vinculada antes de proporcionar información personal u otra. Otros pueden no cumplir las mismas leyes, políticas y prácticas de privacidad que nosotros.",
        ],
      },
      {
        heading: "Exención de garantías",
        paragraphs: [
          "EL USO DE ESTE SITIO WEB Y SU CONTENIDO ES BAJO SU PROPIO RIESGO. ESTE SITIO WEB Y TODO SU CONTENIDO SE PROPORCIONAN «TAL CUAL». NO DEBE CONFIAR EN NINGÚN CONTENIDO PUBLICADO EN O VINCULADO A ESTE SITIO WEB SIN VERIFICAR PRIMERO POR SUS PROPIOS MEDIOS QUE ES EXACTO, ACTUAL Y COMPLETO. NO OTORGAMOS NI RENUNCIAMOS EXPRESAMENTE A DECLARACIONES, GARANTÍAS, PACTOS Y CONDICIONES, EXPRESOS O IMPLÍCITOS, DERIVADOS DE LA LEY, DEL CUMPLIMIENTO, DE LOS USOS COMERCIALES O DE OTRO MODO, INCLUIDAS GARANTÍAS Y CONDICIONES IMPLÍCITAS DE COMERCIABILIDAD, CALIDAD COMERCIAL, IDONEIDAD PARA UN FIN PARTICULAR, NO INFRACCIÓN, SEGURIDAD, CALIDAD, AUSENCIA DE DEFECTOS, USO ININTERRUMPIDO, LIBRE DE VIRUS O ERRORES, O EXACTITUD, ACTUALIDAD, FIABILIDAD, INTEGRIDAD O PERTINENCIA DEL CONTENIDO DE ESTE SITIO WEB.",
        ],
      },
      {
        heading: "Limitación de responsabilidad",
        paragraphs: [
          "Bajo ninguna circunstancia Leap AI, sus directores, empleados, agentes o contratistas independientes tendrán responsabilidad alguna por pérdida o daño de cualquier tipo (incluidos, sin limitación, daños directos, indirectos, especiales, incidentales, consecuentes, punitivos, ejemplares u otros, y cualquier pérdida de beneficios, costos, gastos, perjuicio comercial, interrupción del negocio, reputación, información o programas o datos, ahorros, ingresos, fondo de comercio, bienes tangibles o intangibles, honorarios o costos legales, tiempo de gestión u oficina desperdiciado, o daños de cualquier naturaleza), ya sea por contrato, agravio, negligencia u otra base legal, derivados de o relacionados con este sitio web, cualquier sitio vinculado o plataforma de redes sociales vinculada (incluidos daños sufridos por el uso, la imposibilidad de uso, fallas u omisiones o inexactitudes en este sitio, sitios vinculados o plataformas vinculadas, o servicios o contenidos de los mismos), incluso si Leap AI fue advertida de la posibilidad de dicho daño o pérdida, o si era previsible.",
        ],
      },
      {
        heading: "Disposiciones generales",
        paragraphs: [
          "Leap AI se reserva el derecho de complementar, eliminar o modificar estos términos y condiciones en cualquier momento y de vez en cuando sin previo aviso. Consulte este sitio web regularmente para conocer cambios. Si continúa utilizando este sitio tras un cambio en estos términos, se considerará que acepta los cambios.",
          "Si alguna disposición de estos términos se considera inválida, inaplicable o ilegal por cualquier motivo, las disposiciones restantes continuarán en pleno vigor.",
          "El contenido y uso del sitio web, y estos términos y condiciones, se rigen por las leyes de la provincia de Alberta, sin dar efecto a principios de conflicto de leyes. Se considera que estos términos se celebran por usted en Alberta.",
          "Leap AI mantiene y controla este sitio web desde la provincia de Alberta, Canadá. Leap AI no declara que este sitio sea apropiado o esté disponible fuera de Canadá. Se prohíbe el acceso desde territorios donde el contenido del sitio sea ilegal. Si accede desde fuera de Canadá, es responsable de cumplir todas las leyes locales.",
        ],
      },
    ],
  },
  privacyPolicy: {
    headingBold: "Política de ",
    headingMuted: "privacidad",
    sections: [
      {
        heading: "Nuestro compromiso",
        paragraphs: [
          "Estamos comprometidos con la protección de su privacidad. Esta declaración explica nuestras prácticas actuales respecto a la información que podemos recopilar, usar y proteger cuando visita nuestro sitio web.",
        ],
      },
      {
        heading: "Recopilación",
        paragraphs: [
          "Al navegar por nuestro sitio web, se recopila automáticamente una cantidad limitada de información estándar con fines de monitoreo de tráfico y estadísticas. La información se analiza para identificar tendencias operativas, rendimiento y formas de mejorar nuestro sitio. No podemos identificarle a partir de esta información. Vea «Analítica y cookies» más abajo.",
        ],
      },
      {
        heading: "Uso",
        paragraphs: [
          "Solo utilizamos información personal para el fin para el que fue recopilada, para un fin compatible o para cualquier otro uso expresamente autorizado por la ley.",
        ],
      },
      {
        heading: "Divulgación",
        paragraphs: ["No divulgamos información personal a nadie."],
      },
      {
        heading: "Analítica y cookies",
        gaOptOutLink: true,
        paragraphs: [
          "Para servirle mejor, utilizamos Google Analytics para analizar el uso de nuestro sitio web. Estas herramientas usan cookies para recopilar y generar información sobre sus visitas (incluida su dirección IP) transmitida a sus servidores de forma anónima para su procesamiento. Estudiamos patrones de actividad para mejorar la experiencia de los visitantes.",
          "El uso de estas herramientas no nos permite, ni a nuestro proveedor de analítica, identificar individuos.",
          "Puede optar por no participar en la analítica configurando su navegador para que le notifique cuando se envíe una cookie y bloquear las cookies de analítica si lo desea. Consulte el menú de ayuda de su navegador para instrucciones. Visitar nuestro sitio con las cookies de analítica desactivadas no tendrá un impacto significativo en su experiencia. Google ofrece actualmente de forma gratuita una ",
        ],
      },
      {
        heading: "Cómo darse de baja",
        paragraphs: [
          "Si no desea seguir recibiendo correos electrónicos de Leap AI, tenga en cuenta que cada correo que le enviemos incluirá la opción de darse de baja de nuestra lista, para que pueda dejar de recibir nuestros correos en cualquier momento. Su dirección de correo se eliminará de inmediato de nuestra lista.",
        ],
      },
      {
        heading: "¿A quién contactar?",
        emailLink: true,
        paragraphs: ["Las preguntas o comentarios sobre estas prácticas pueden dirigirse a:", ""],
      },
      {
        heading: "Seguridad",
        paragraphs: [
          "Nuestras prácticas de seguridad evolucionan continuamente para garantizar la integridad y confidencialidad de la información y los sistemas. Utilizamos salvaguardas actualizadas para proteger nuestra red y sitio web contra uso indebido, alteración, copia, divulgación, destrucción, monitoreo o intercambio no autorizado de información y daños.",
        ],
      },
    ],
  },
};

writeJson("src/locales/fr/legal.json", legalFr);
writeJson("src/locales/es/legal.json", legalEs);
console.log("Wrote full FR/ES legal.json");
