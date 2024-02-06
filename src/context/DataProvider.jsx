/**
 * The external imports
 */
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { FaWhatsappSquare } from "react-icons/fa";

/**
 * The internal imports
 */
import {
  css,
  figma,
  html,
  js,
  pgSQL,
  react,
  ruby,
  codeTogether,
  discordSrv,
  education,
  ue5,
  medecineChinoise,
  chocolaterie,
  palworld,
  glaceArt,
  accessibility,
} from "../assets/images";

export const DataContext = createContext(); // Create a context object and give provider

export default function DataProvider(props) {
  const [owner] = useState({
    firstname: "Simon",
    lastname: "Despres",
    age: "28 ans",
    address: "32 Bis rue de l'Etang, 25560 Frasne",
    address2: "Doubs, France",
    phone: "+33 6 14 42 17 80",
    email: "simondprs62790@gmail.com",
    nationality: "Française",
    languages: "Français, Anglais",
  });

  const skillData = [
    {
      id: 1,
      name: "html",
      logo: (
        <img
          src={html}
          alt="html"
          className="max-w-36 rounded-t-lg max-h-2/3 bg-contain"
        />
      ),
    },
    {
      id: 2,
      name: "css",
      logo: (
        <img
          src={css}
          alt="css"
          className="rounded-t-lg max-h-2/3 bg-contain"
        />
      ),
    },
    {
      id: 3,
      name: "javascript",
      logo: (
        <img
          src={js}
          alt="javascript"
          className="rounded-t-lg max-h-2/3 bg-contain"
        />
      ),
    },
    {
      id: 4,
      name: "Figma",
      logo: (
        <img
          src={figma}
          alt="figma"
          className="rounded-t-lg max-h-2/3 bg-contain"
        />
      ),
    },
    {
      id: 5,
      name: "Ruby on rails",
      logo: (
        <img
          src={ruby}
          alt="ruby on rails"
          className="rounded-t-lg max-h-2/3 bg-contain"
        />
      ),
    },
    {
      id: 6,
      name: "PostgreSQL",
      logo: (
        <img
          src={pgSQL}
          alt="postgreSQL"
          className="rounded-t-lg max-h-2/3 bg-contain"
        />
      ),
    },
    {
      id: 7,
      name: "React",
      logo: (
        <img
          src={react}
          alt="react"
          className="animate-spin-slow rounded-t-lg max-h-2/3 bg-contain"
        />
      ),
    },
  ];

  const available = () => {
    return <span className="text-[#41984f] font-bold text-xl">Disponible</span>;
  };

  const aboutMe = [
    {
      id: 1,
      title: "Prénom :",
      value: owner.firstname,
    },
    {
      id: 2,
      title: "Nom de famille :",
      value: owner.lastname,
    },
    {
      id: 3,
      title: "Âge :",
      value: owner.age,
    },
    {
      id: 4,
      title: "Nationalité :",
      value: owner.nationality,
    },
    {
      id: 5,
      title: "Indépendant :",
      value: available(),
    },
    {
      id: 6,
      title: "Adresse :",
      value: owner.address2,
    },
    {
      id: 7,
      title: "Téléphone :",
      value: owner.phone,
    },
    {
      id: 8,
      title: "Email :",
      value: owner.email,
    },
    {
      id: 9,
      title: "What's App :",
      value: (
        <a
          href="https://wa.me/33614421780"
          rel="noreferrer"
          target="_blank"
          className="text-5xl text-[#2fd04a] "
        >
          <FaWhatsappSquare />
        </a>
      ),
    },
    {
      id: 10,
      title: "Langue :",
      value: owner.languages,
    },
  ];

  const blogData = [
    {
      id: 1,
      title: "Comment j'ai appris à coder",
      catchphrase: "Mon parcours pour devenir développeur web",
      image: (
        <img
          src={codeTogether}
          alt="travail a plusieur"
          className="object-cover duration-300 ease-in-out"
        />
      ),
      link: "/blog/mes-debuts-developpeur-web",
      subTitle:
        "De la spatule coudée au regex, mon parcours de reconvertion dans le développeur web.",
      text: "Tout a commencé au début de l'année 2023. J'ai découvert le développement web grâce à un Youtuber du nom de BenjaminCode. J'ai adoré écouter ses histoires. Dans l'une d'elles, il prend son frère par la main et décide de lui apprendre à coder. Il commence une formation dans l'école mondialement connue : Le Wagon. Après avoir suivi l'aventure de son frère, je me suis reconnu en lui et j'ai décidé de tenter l'expérience du développement web, du moins apprendre quelques notions de base pour commencer. Reste a savoir si ce métier pourrait me plaire, moi qui n'aimais pas me lever tous les matins pour faire le métier que mes parents m'avaient imposé depuis mon adolescence : pâtissier. Après 10 longues années de pâtisserie, chocolaterie, glacerie, boulangerie, traiteur, je décide de rendre mon tablier avec le regard fixé sur l'avenir. Après quelques semaines à noter toutes les informations utiles que je trouvais sur les langages HTML et CSS, j'ai été épaulé par ma compagne pour me lancer dans une formation. Sans hésitation, je savais déjà vers quelle école de formation me tourner. Par conséquent, j'ai suivi une formation intensive de 2 mois pour apprendre les bases du développement web avec Le Wagon, à Lausanne. HTML, CSS, JavaScript, Ruby on Rails, PostgreSQL, Figma, Git, GitHub, Heroku, et bien d'autres outils. J'ai adoré cette formation, j'ai appris énormément de choses, j'ai rencontré des personnes formidables, j'ai découvert un monde que je ne connaissais pas, qui me passionnait et qui me correspondait, avec beaucoup de similitudes avec la pâtisserie. J'ai appris à coder, à créer des sites web, à travailler en équipe, à me remettre en question, à apprendre de mes erreurs, à être curieux, à être autonome, à être créatif, à être rigoureux, à être patient (très patient...). J'ai appris à être développeur web.",
    },
    {
      id: 2,
      title: "Créer un jeu vidéo sur Unreal Engine 5 en 2024",
      catchphrase:
        "Explorez le monde fascinant de la création de jeux vidéo avec Unreal Engine 5. Une aventure captivante et ludique.",
      image: (
        <img
          src={ue5}
          alt="fond d'écran jeux vidéo"
          className="rounded-t-lg w-full object-cover duration-300 ease-in-out"
        />
      ),
      link: "/blog/jeu-unreal-engine-5",
      subTitle:
        "Découvrez les outils de développement et donnez vie à vos idées.",
      text: "Plongez dans l'univers de la création de jeux vidéo avec Unreal Engine 5 en 2024. Explorez les fonctionnalités de pointe de ce moteur de jeu révolutionnaire. De la conception des personnages à la programmation du gameplay, découvrez comment transformer vos idées en expériences interactives captivantes.",
    },
    {
      id: 3,
      title: "Comment avoir de l'audience sur son serveur Discord",
      catchphrase:
        "Découvrez des stratégies efficaces pour augmenter l'audience de votre serveur Discord et créer une communauté florissante.",
      image: (
        <img
          src={discordSrv}
          alt="logo discord"
          className="rounded-t-lg w-full object-cover duration-300 ease-in-out"
        />
      ),
      link: "/blog/audience-discord",
      subTitle: "De la promotion intelligente à l'engagement communautaire.",
      text: "Vous avez créé un serveur Discord, mais comment attirer des membres ? Explorez des stratégies éprouvées pour augmenter l'audience de votre serveur. De la promotion intelligente sur les réseaux sociaux à l'engagement actif avec votre communauté, découvrez comment faire de votre serveur Discord un lieu animé et accueillant.",
    },
    {
      id: 4,
      title:
        "Tout ce qu'il faut savoir sur l'accessibilité dans le développement web",
      catchphrase:
        "Explorez les principes fondamentaux pour rendre vos sites web accessibles à tous, quel que soit leur niveau d'aptitude.",
      image: (
        <img
          src={accessibility}
          alt="dessin sur l'accessibilité"
          className="rounded-t-lg w-full object-cover duration-300 ease-in-out"
        />
      ),
      link: "/blog/accessibilite-developpement-web",
      subTitle: "Créez des sites inclusifs pour tous les utilisateurs.",
      text: "L'accessibilité web est essentielle. Explorez les principes fondamentaux et découvrez comment rendre vos sites web accessibles à tous, qu'ils aient des besoins spécifiques ou non. Créez des expériences en ligne inclusives et accessibles à tous.",
    },
    {
      id: 5,
      title: "PalWorld fait polémique",
      catchphrase:
        "Découvrez les controverses entourant le jeu PalWorld et explorez les différentes perspectives de cette polémique.",
      image: (
        <img
          src={palworld}
          alt="familier avec une arme a feu"
          className="rounded-t-lg w-full object-cover duration-300 ease-in-out"
        />
      ),
      link: "/blog/palworld-polemique",
      subTitle: "Analyse approfondie des opinions divergentes sur PalWorld.",
      text: "PalWorld, le jeu qui a suscité de nombreuses discussions. Explorez les controverses qui l'entourent, des critiques élogieuses aux préoccupations soulevées par la communauté. Plongez dans une analyse approfondie des différentes perspectives et formez votre propre opinion sur cette polémique.",
    },
    {
      id: 6,
      title: "Le secret du maître chocolatier : la courbe de température",
      catchphrase:
        "Découvrez l'importance cruciale de la courbe de température dans l'art délicat de la chocolaterie.",
      image: (
        <img
          src={chocolaterie}
          alt="entreprise liloise réputé"
          className="rounded-t-lg w-full object-cover duration-300 ease-in-out"
        />
      ),
      link: "/blog/secret-maitre-chocolatier",
      subTitle: "Un voyage au cœur de la précision thermique en chocolaterie.",
      text: "Derrière chaque délicieuse praline se cache un secret : la courbe de température. Explorez l'importance cruciale de cette courbe dans l'art délicat de la chocolaterie. Plongez dans un voyage au cœur de la précision thermique et découvrez comment les maîtres chocolatiers atteignent la perfection.",
    },
    {
      id: 7,
      title: "Sculpture sur glace ou conception de l'espace en 3D",
      catchphrase:
        "Comparez deux formes d'art uniques : la sculpture sur glace et la conception d'espaces en 3D, et découvrez leurs similitudes surprenantes.",
      image: (
        <img
          src={glaceArt}
          alt="sculpture sur glace"
          className="rounded-t-lg w-full object-cover duration-300 ease-in-out"
        />
      ),
      link: "/blog/sculpture-glace-conception-3D",
      subTitle: "Un regard comparatif sur la créativité gelée et numérique.",
      text: "La créativité peut prendre différentes formes, de la sculpture sur glace à la conception d'espaces en 3D. Comparez ces deux formes d'art uniques et découvrez leurs similitudes surprenantes. Explorez comment l'imagination humaine s'exprime de manière éclatante dans des médiums aussi différents.",
    },
    {
      id: 8,
      title: "La kinésiologie a travers la médecine chinoise",
      catchphrase:
        "Explorez les liens entre la kinésiologie et la médecine chinoise, et découvrez comment ces pratiques contribuent au bien-être physique et mental.",
      image: (
        <img
          src={medecineChinoise}
          alt="médecine chinoise"
          className="rounded-t-lg w-full object-cover duration-300 ease-in-out"
        />
      ),
      link: "/blog/kinesiologie-medecine-chinoise",
      subTitle: "Une plongée profonde dans l'harmonie du corps et de l'esprit.",
      text: "La quête du bien-être nous conduit à explorer des méthodes telles que la kinésiologie et la médecine chinoise. Plongez dans une analyse approfondie des liens entre ces pratiques et découvrez comment elles contribuent à l'harmonie du corps et de l'esprit.",
    },
    {
      id: 9,
      title: "L'éducation positive chez nos animaux de compagnie",
      catchphrase:
        "Découvrez comment l'éducation positive peut renforcer le lien entre les propriétaires et leurs compagnons à quatre pattes.",
      image: (
        <img
          src={education}
          alt="éducation positive"
          className="rounded-t-lg w-full object-cover duration-300 ease-in-out"
        />
      ),
      link: "/blog/education-positive-animaux-compagnie",
      subTitle: "Créer une relation harmonieuse avec nos amis à fourrure.",
      text: "L'éducation positive n'est pas réservée aux humains. Explorez comment cette approche peut renforcer le lien entre les propriétaires et leurs compagnons à quatre pattes. Découvrez des techniques et des conseils pour créer une relation harmonieuse et épanouissante avec nos amis à fourrure.",
    },
  ];

  return (
    <DataContext.Provider value={{ owner, skillData, aboutMe, blogData }}>
      {props.children}
    </DataContext.Provider>
  );
}

DataContext.propTypes = {
  children: PropTypes.node,
};
