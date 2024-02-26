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
  alixShibaSm,
  alixShibaMd,
  alixShibaLg,
  heliciaSm,
  heliciaMd,
  heliciaLg,
  montQAngelsSm,
  montQAngelsMd,
  montQAngelsLg,
  maquetteSm,
  maquetteMd,
  maquetteLg,
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
    languages: "Français maternel, Anglais B1",
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
      title: "Adresse :",
      value: owner.address2,
    },
    {
      id: 6,
      title: "Téléphone :",
      value: owner.phone,
    },
    {
      id: 7,
      title: "Email :",
      value: owner.email,
    },
    {
      id: 8,
      title: "Langue :",
      value: owner.languages,
    },
    {
      id: 9,
      title: "WhatsApp :",
      value: (
        <a
          href="https://wa.me/33614421780"
          rel="noreferrer"
          target="_blank"
          className="text-5xl text-whatsappColor hover:scale-110 transform duration-300 ease-in-out"
        >
          <FaWhatsappSquare />
        </a>
      ),
    },
  ];

  const blogData = [
    {
      id: 1,
      link: "mes-debuts-developpeur-web",
      span1: "mes debuts",
      span2: "de web",
      shadow: "developpeur",
      title: "Comment j'ai appris à coder",
      catchphrase: "Mon parcours pour devenir développeur web",
      image: (
        <img
          src={codeTogether}
          alt="travail a plusieurs"
          className="w-full object-cover duration-300 ease-in-out"
        />
      ),
      subTitle:
        "De la spatule coudée au regex, mon parcours de reconvertion dans le développeur web.",
      text: (
        <>
          <p>
            Tout a commencé au début de l'année 2023. J'ai découvert le
            développement web grâce à un YouTuber du nom de BenjaminCode. J'ai
            adoré écouter ses histoires. Dans l'une d'elles, il prend son frère
            par la main et décide de lui apprendre à coder. Il commence une
            formation dans l'école mondialement connue :{" "}
            <span className="underline">Le Wagon</span>.
          </p>
          <br />
          <p>
            Après avoir suivi l'aventure de son frère, je me suis reconnu en lui
            et j'ai décidé de tenter l'expérience du développement web, du moins
            apprendre quelques notions de base pour "tâter le terrain".
          </p>
          <br />
          <p>
            Reste a savoir si ce métier pourrait me plaire, moi qui n'aimais pas
            me lever tous les matins pour faire le métier que mes parents
            m'avaient imposé depuis mon adolescence : pâtissier.
          </p>
          <p>
            Après 10 longues années de pâtisserie, chocolaterie, glacerie,
            boulangerie, traiteur, je décide de rendre mon tablier avec le
            regard fixé sur l'avenir.
          </p>
          <p>
            Quelques semaines plus tard à noter toutes les informations utiles
            que je trouvais sur les langages HTML et CSS, j'ai été épaulé par ma
            compagne pour me lancer dans une formation. Sans hésitation, je
            savais déjà vers quelle école de formation me tourner.
          </p>
          <br />
          <p>
            Par conséquent, j'ai suivi une formation intensive de 2 mois pour
            apprendre les bases du développement web avec Le Wagon, à Lausanne.
          </p>
          <p>
            HTML, CSS, JavaScript, Ruby on Rails, PostgreSQL, Figma, Git,
            GitHub, Heroku, et bien d'autres outils.
          </p>
          <p>
            J'ai adoré cette formation, j'ai appris énormément de choses, j'ai
            rencontré des personnes formidables, j'ai découvert un monde que je
            ne connaissais pas, qui me passionnait et qui me correspondait, avec
            beaucoup de similitudes avec la pâtisserie.
          </p>
          <br />
          <p>
            J'ai appris à coder, à créer des sites web, à travailler en équipe,
            à me remettre en question, à apprendre de mes erreurs, à être
            curieux, à être autonome, à être créatif, à être rigoureux, à être
            patient (très patient...). J'ai appris à être développeur web.
          </p>
        </>
      ),
    },
    {
      id: 2,
      link: "jeu-unreal-engine-5",
      span1: "jeux",
      span2: "vidéo",
      shadow: "création",
      title: "Créer un jeu vidéo sur Unreal Engine 5 en 2024",
      catchphrase:
        "Explorez le monde fascinant de la création de jeux vidéo avec Unreal Engine 5. Une aventure captivante et ludique.",
      image: (
        <img
          src={ue5}
          alt="fond d'écran jeux vidéo"
          className="w-full object-cover duration-300 ease-in-out"
        />
      ),
      subTitle:
        "Découvrez les outils de développement et donnez vie à vos idées.",
      text: (
        <>
          <p>
            En 2024, se lancer dans la création d'un jeu vidéo sur Unreal Engine
            5 s'est révélé être une aventure aussi accessible que gratifiante.
            Avec une passion pour les jeux vidéo et la programmation, je me suis
            lancé dans ce projet avec pour objectif d'apprendre les bases du
            développement de jeux.
          </p>
          <br />

          <p>
            Ce qui distingue Unreal Engine 5 et le rend particulièrement
            attrayant, c'est son accessibilité pour les débutants. La simplicité
            avec laquelle on peut aborder ses fonctionnalités offre une
            expérience d'apprentissage fluide et intuitive. Les outils visuels
            mis à disposition par les développeurs facilitent grandement la
            création de jeux, même pour ceux qui sont nouveaux dans le domaine.
          </p>
          <p>
            Grâce aux nombreux tutoriels gratuits disponibles en ligne, j'ai pu
            rapidement apprendre comment fonctionne le viewport et j'ai créer
            mon propre petit jeu vidéo 2D en quelques heures. Bien que ce ne
            soit pas un jeu de grande envergure!
          </p>
          <br />

          <p>
            Unreal Engine 5 propose également une bibliothèque d'assets
            gratuits, permettant de construire plus rapidement sans avoir à
            créer chaque élément de zéro. Cela permet de se concentrer davantage
            sur la création du jeu plutôt que sur la conception de chaque
            détail, une fonctionnalité particulièrement apprécié par les
            développeurs novices.
          </p>
          <p>
            Passons maintenant aux blueprints, un élément clé d'Unreal Engine 5.
            Les blueprints sont essentiellement des diagrammes visuels qui
            permettent de créer du code sans avoir à écrire une seule ligne.
            Cette approche visuelle simplifie considérablement le processus de
            programmation, idéale pour implémenter des animations a des
            personnes, qui sont tous deux trouvables en grands nombres
            gratuitement sur internet.
          </p>
          <p>
            En parlant de programmation, les conventions de nommage jouent un
            rôle crucial dans le développement de jeux. Elles permettent une
            organisation claire du code, facilitant la collaboration avec
            d'autres développeurs et assurant une maintenance plus facile du
            projet au fil du temps.
          </p>

          <p>
            Chaque semaine, Unreal Engine 5 propose de nouveaux assets gratuits
            sur son store, permettant aux développeurs d'accéder à une variété
            toujours croissante de ressources.
          </p>

          <p>
            Les nombreux tutoriels gratuits disponibles sur internet offrent une
            ressource inestimable pour les développeurs de jeux vidéo. Ces
            guides couvrent une gamme variée de sujets, de la modélisation 3D à
            l'animation, offrant aux créateurs une chance d'explorer différents
            aspects du développement de jeux.
          </p>

          <p>
            La création d'un jeu vidéo implique une diversité de métiers, allant
            de la conception artistique à la programmation en passant par la
            conception sonore et j'en passe. Cette variété de compétences
            nécessaires fait du développement de jeux vidéo un domaine riche et
            stimulant pour ceux qui souhaitent explorer différents aspects
            créatifs.
          </p>
          <br />

          <p>
            Enfin, il est fascinant de constater la part de marché énorme que
            détiennent les jeux vidéo dans le secteur des loisirs au sein d'un
            foyer. De nos jours, les jeux vidéo occupent une place importante
            dans la vie quotidienne, offrant un divertissement interactif et
            engageant pour les joueurs de tous âges.
          </p>
        </>
      ),
    },
    {
      id: 3,
      link: "audience-discord",
      span1: "audience",
      span2: "discord",
      shadow: "dynamisme",
      title: "Comment avoir de l'audience sur son serveur Discord",
      catchphrase:
        "Découvrez des stratégies efficaces pour augmenter l'audience de votre serveur Discord et créer une communauté florissante.",
      image: (
        <img
          src={discordSrv}
          alt="logo discord"
          className="w-full object-cover duration-300 ease-in-out"
        />
      ),
      subTitle: "De la promotion intelligente à l'engagement communautaire.",
      text: (
        <>
          <p>
            Vous avez créé un serveur Discord passionnant, mais vous vous
            demandez comment attirer davantage de membres et construire une
            communauté florissante ? Pas de panique, il existe des stratégies
            efficaces pour augmenter l'audience de votre serveur Discord et
            créer une atmosphère dynamique et engageante.
          </p>
          <br />

          <p>
            La première étape pour développer votre communauté Discord est de
            définir clairement le thème et l'objectif de votre serveur. Les
            membres potentiels doivent comprendre rapidement ce qu'ils peuvent
            attendre en rejoignant votre communauté. Assurez-vous que le nom, la
            description et la catégorisation de votre serveur reflètent son
            contenu de manière claire et attractive.
          </p>
          <br />

          <p>
            L'engagement actif est essentiel pour créer une atmosphère vibrante.
            Encouragez les membres à participer aux discussions, à partager
            leurs idées et à interagir les uns avec les autres. Des canaux
            spécifiques pour les conversations, les questions et les suggestions
            peuvent aider à canaliser les discussions et à rendre votre serveur
            plus convivial.
          </p>
          <br />

          <p>
            N'hésitez pas à organiser des événements réguliers pour maintenir
            l'enthousiasme au sein de votre communauté. Que ce soit des séances
            de jeu, des concours, des sessions de questions-réponses ou des
            événements spéciaux, ces activités renforceront les liens entre les
            membres et attireront de nouveaux participants.
          </p>
          <br />

          <p>
            Utilisez les réseaux sociaux tels que YouTube et Twitch pour
            promouvoir votre serveur Discord. Créez des publications attrayantes
            avec des invitations personnalisées et partagez des moments forts de
            votre communauté. Les médias sociaux sont un excellent moyen
            d'atteindre un public plus large et de diriger de nouveaux membres
            vers votre serveur.
          </p>
          <br />

          <p>
            Mettez en avant des fonctionnalités exclusives et des avantages pour
            les membres actifs. Les rôles spéciaux, les badges ou même des
            récompenses peuvent encourager l'engagement continu. Assurez-vous
            que vos membres ressentent qu'ils font partie intégrante de quelque
            chose de spécial en restant actifs sur votre serveur.
          </p>
          <br />

          <p>
            Enfin, écoutez les retours de vos membres et ajustez votre serveur
            en conséquence. Les communautés prospères sont celles qui évoluent
            avec les besoins de leurs membres. Soyez ouvert aux suggestions,
            résolvez les problèmes rapidement et créez un environnement où
            chacun se sent écouté et valorisé.
          </p>
        </>
      ),
    },
    {
      id: 4,
      link: "accessibilite-developpement-web",
      span1: "acces",
      span2: "pour tous",
      shadow: "accessibilité",
      title:
        "Tout ce qu'il faut savoir sur l'accessibilité dans le développement web",
      catchphrase:
        "Explorez les principes fondamentaux pour rendre vos sites web accessibles à tous, quel que soit leur niveau d'aptitude.",
      image: (
        <img
          src={accessibility}
          alt="dessin sur l'accessibilité"
          className="w-full object-cover duration-300 ease-in-out"
        />
      ),
      subTitle: "Créez des sites inclusifs pour tous les utilisateurs.",
      text: (
        <>
          <p>
            L'accessibilité dans le développement web est bien plus qu'une
            simple pratique, c'est un impératif. Créer des sites web accessibles
            à tous, peu importe leur niveau d'aptitude, est essentiel pour
            garantir une expérience en ligne inclusive. Explorez avec nous les
            principes fondamentaux de l'accessibilité et découvrez comment
            rendre vos sites web plus accueillants et utilisables pour un public
            diversifié.
          </p>
          <br />

          <p>
            L'une des premières étapes pour garantir l'accessibilité est de
            créer une structure de page claire et logique. Utilisez des balises
            HTML appropriées pour structurer votre contenu, et assurez-vous que
            la navigation peut s'effectuer facilement à l'aide d'un clavier. Une
            structure bien pensée facilite la compréhension et la navigation
            pour tous les utilisateurs.
          </p>
          <br />

          <p>
            Les médias, tels que les images et les vidéos, sont des éléments
            incontournables du web. Cependant, veillez à les rendre accessibles.
            Ajoutez des textes alternatifs descriptifs pour les images et
            proposez des sous-titres pour les vidéos. Cela garantit que les
            utilisateurs malvoyants ou malentendants peuvent également
            bénéficier pleinement de votre contenu.
          </p>
          <br />

          <p>
            Pensez à la taille du texte et à son contraste. Un texte trop petit
            ou des couleurs de fond et de texte trop similaires peuvent rendre
            la lecture difficile pour certaines personnes. Offrez des options
            pour ajuster la taille du texte et assurez-vous que le contraste est
            suffisant pour une lisibilité optimale.
          </p>
          <br />

          <p>
            L'utilisation de formulaires sur les sites web est courante, mais
            ils peuvent présenter des défis d'accessibilité. Ajoutez des
            étiquettes explicites aux champs de formulaire, facilitez la
            navigation avec la touche Tab, et assurez-vous que les erreurs de
            saisie sont clairement expliquées. Ces petites attentions rendent
            les interactions plus fluides pour tous les utilisateurs.
          </p>
          <br />

          <p>
            Les technologies d'assistance, telles que les lecteurs d'écran, sont
            fréquemment utilisées par les personnes ayant des déficiences
            visuelles. Testez votre site avec ces technologies pour vous assurer
            qu'il est interprété de manière précise. Des balises correctement
            structurées et des informations explicites facilitent cette
            expérience.
          </p>
          <br />

          <p>
            En embrassant les principes fondamentaux de l'accessibilité dans le
            développement web, vous contribuez à créer un espace en ligne plus
            ouvert, inclusif et accessible à tous. Adoptez ces pratiques dès le
            début de votre processus de développement et offrez une expérience
            web positive et équitable.
          </p>
        </>
      ),
    },
    {
      id: 5,
      link: "palworld-polemique",
      span1: "pal",
      span2: "wolrd",
      shadow: "polémique",
      title: "PalWorld fait polémique",
      catchphrase:
        "Découvrez les controverses entourant le jeu PalWorld et explorez les différentes perspectives de cette polémique.",
      image: (
        <img
          src={palworld}
          alt="familier avec une arme a feu"
          className="w-full object-cover object-top duration-300 ease-in-out"
        />
      ),
      subTitle: "Analyse approfondie des opinions divergentes sur PalWorld.",
      text: (
        <>
          <p>
            Découvrez les tumultes entourant le jeu PalWorld, où l'univers de
            Pokémon rencontre une dose de réalisme surprenante. Plongeons dans
            les controverses qui ont émergé autour de ce jeu et explorons les
            différentes perspectives qui alimentent cette polémique.
          </p>
          <br />

          <p>
            Dans l'étrange monde de PalWorld, l'expérience de jeu oscille entre
            le sentiment nostalgique de Pokémon et une dose inattendue de
            réalisme sadique. Imaginez capturer des animaux en peluche
            semblables à des Pokémon, les transformer en armes, puis les envoyer
            dans un camp de travail. Une expérience de jeu à la fois fébrile et
            étonnamment captivante.
          </p>
          <br />

          <p>
            Se baladant avec mon fidèle Foxparks, une créature renarde qui
            semble tout droit sortie de l'univers Pokémon, je me retrouve dans
            une forêt paisible. Soudain, un groupe de pengullets, ressemblant
            étrangement à des pingouins, apparaît. Ils manquent à ma collection,
            alors j'utilise Foxparks comme un lance-flammes improvisé pour les
            affaiblir. Une fois vulnérables, je les capture à l'aide d'une Pal
            Sphère, une Pokéball revisitée.
          </p>
          <br />

          <p>
            "PalWorld" peut sembler un clone audacieux de Pokémon à première
            vue, mais il se révèle être un mod pour adultes avec des éléments de
            survie. Bien que le cœur du jeu soit la capture de "Pals", le jeu
            pousse la schizophrénie de Pokémon à l'absurde. Avec plus de cinq
            millions d'exemplaires vendus en quelques jours sur Steam,
            "PalWorld" a clairement touché une corde sensible.
          </p>
          <br />

          <p>
            La capture de Pals dans PalWorld n'est pas une simple bataille au
            tour par tour. C'est une expérience explicite et parfois brutale.
            Équipé d'une batte de baseball, je m'engage physiquement dans les
            combats, capturant mes Pals d'une manière plus immersive. Bien que
            la ressemblance avec Pokémon soit évidente, PalWorld pousse ces
            mécaniques à un niveau plus réaliste et parfois dérangeant.
          </p>
          <br />

          <p>
            Les Pals ne sont pas simplement des compagnons de combat, mais aussi
            des travailleurs dans ma base. Certains cultivent des champs,
            d'autres transportent des matériaux. Cependant, l'aspect de gestion
            du travail prend une tournure curieusement sombre. La création d'une
            chaire me permet d'encourager mes Pals à travailler plus
            intensément, avec des conséquences sur leur santé mentale et leur
            bien-être.
          </p>
          <br />
          <p>
            L'esthétique visuelle de PalWorld mérite également d'être saluée.
            Avec des graphismes attrayants et colorés, le jeu offre un monde
            vibrant et captivant. Cela contraste souvent avec les critiques
            adressées au dernier jeu Pokémon, produit par une entreprise
            milliardaire, qui a suscité des interrogations sur ses choix
            graphiques douteux. PalWorld se distingue par son attention aux
            détails graphiques, créant une expérience visuelle immersive pour
            les joueurs.
          </p>
          <br />

          <p>
            Du côté juridique, les avocats de Pokémon scrutent attentivement
            chaque aspect de PalWorld. Avec des similitudes évidentes entre les
            deux jeux, l'équipe juridique de Pokémon est prête à sanctionner
            tout débordement ou utilisation non autorisée d'éléments rappelant
            l'univers Pokémon. La polémique entourant PalWorld soulève des
            questions importantes sur les limites de l'inspiration et de
            l'appropriation dans l'industrie du jeu vidéo, faisant de cette
            confrontation entre PalWorld et Pokémon un sujet suivi de près dans
            le monde du gaming.
          </p>
          <br />

          <p>
            Malgré les préoccupations éthiques, "PalWorld" offre une approche de
            jeu rafraîchissante et différente. Les Pals sont à la fois des
            compagnons et des employés, contribuant à l'exploration du monde
            ouvert du jeu. Bien que le contenu actuel soit encore en
            développement, l'expérience unique et légèrement sadique de
            "PalWorld" promet d'évoluer vers quelque chose d'encore plus
            captivant.
          </p>
        </>
      ),
    },
    {
      id: 6,
      link: "secret-maitre-chocolatier",
      span1: "secret du",
      span2: "chocolatier",
      shadow: "gourmandise",
      title: "Le secret du maître chocolatier : la courbe de température",
      catchphrase:
        "Découvrez l'importance cruciale de la courbe de température dans l'art délicat de la chocolaterie.",
      image: (
        <img
          src={chocolaterie}
          alt="entreprise lilloise réputée"
          className="w-full object-cover duration-300 ease-in-out"
        />
      ),
      subTitle: "Un voyage au cœur de la chocolaterie.",
      text: (
        <>
          <p>
            Bienvenue dans l'univers raffiné de la chocolaterie, où la maîtrise
            de l'art exige non seulement une passion pour le cacao, mais aussi
            une compréhension approfondie des subtilités de la courbe de
            température. Chaque type de chocolat - noir, au lait et blanc -
            réclame son propre ballet thermique, orchestrant une danse délicate
            entre chaleur et refroidissement.
          </p>
          <br />
          <p>
            En débutant par le chocolat noir, la courbe de température initie
            son crescendo à 50°C, faisant fondre parfaitement les molécules du
            chocolat. Puis, une descente à 27°C permet au chocolat d'amorcer la
            cristallisation, façonnant une structure stable rapidement. Une
            remontée à 32°C, permettant de travailler la texture pour les
            différentes utilisations, donnant au chocolat noir son éclat satiné
            et son craquant caractéristique.
          </p>
          <p>
            Le chocolat au lait et blanc ont aussi une courbe de température qui
            leur est propre.
          </p>
          <br />
          <p>
            Au-delà de la courbe de température, la composition du chocolat,
            notamment la quantité de beurre de cacao, dicte les températures
            exactes à respecter. Chaque note thermique influence la texture, la
            brillance et la saveur du chocolat, transformant cet art culinaire
            en une expérience sensorielle exquise.
          </p>
          <p>
            Plongeons maintenant dans le monde captivant de l'agriculture des
            fèves de cacao, l'ingrédient magique à la base de toute création
            chocolatière. L'histoire commence dans les plantations tropicales,
            où les cacaoyers prospèrent sous des conditions climatiques
            spécifiques. Ces arbres fragiles nécessitent une attention
            minutieuse, des températures constantes et une humidité bien dosée
            pour donner naissance aux cabosses contenant les précieuses fèves.
          </p>
          <br />
          <p>
            La croissance des cacaoyers est un processus délicat qui prend
            plusieurs années. Les cultivateurs experts veillent à fournir un
            équilibre parfait de nutriments au sol, souvent enrichi par des
            pratiques agricoles durables. La récolte des cabosses requiert une
            habileté particulière pour ne pas endommager les fèves à
            l'intérieur. Une fois récoltées, les fèves subissent un processus de
            fermentation, essentiel pour développer les arômes complexes du
            cacao.
          </p>
        </>
      ),
    },
    {
      id: 7,
      link: "sculpture-glace-conception-3D",
      span1: "oeuvre",
      span2: "d'art",
      shadow: "glace",
      title: "Sculpture sur glace ou conception de l'espace en 3D",
      catchphrase:
        "Comparez deux formes d'art uniques : la sculpture sur glace et la conception d'espaces en 3D, et découvrez leurs similitudes surprenantes.",
      image: (
        <img
          src={glaceArt}
          alt="sculpture sur glace"
          className="w-full object-cover duration-300 ease-in-out"
        />
      ),
      subTitle: "Un regard comparatif sur la créativité gelée et numérique.",
      text: (
        <>
          <p>
            Plongeons dans le monde captivant de la sculpture sur glace, une
            forme d'art éphémère qui allie habileté technique et créativité. En
            tant qu'ancien pâtissier, je me suis aventuré dans le domaine de la
            sculpture sur glace, découvrant les subtilités de la création
            artistique dans un matériau aussi délicat que solide.
          </p>
          <br />
          <p>
            Tout commence avec des blocs de glace d'une clarté remarquable,
            obtenus grâce à un processus de congélation progressif en mouvement
            constant. C'est ce procédé qui confère aux sculptures sur glace une
            translucidité parfaite.
          </p>
          <br />
          <p>
            En tant qu'apprenti sculpteur sur glace, la première étape a été de
            comprendre l'importance de la qualité de la glace. Des blocs
            soigneusement préparés sont essentiels pour offrir la résistance
            nécessaire à la sculpture tout en permettant une précision dans les
            détails. Les outils du sculpteur, des ciseaux spéciaux aux
            tronçonneuses de glace, deviennent des extensions de la créativité,
            permettant de donner vie à des formes extraordinaires.
          </p>
          <br />
          <p>
            Créer des formes détaillées et expressives à partir d'un bloc froid
            et transparent requiert une patience infinie et une compréhension
            intuitive des propriétés de la glace. Les artistes expérimentés dans
            ce domaine transcendent les limitations de leur matériau, créant des
            œuvres qui semblent presque magiques.
          </p>
          <br />
          <p>
            Les jeux de lumière et de transparence sont au cœur de cette
            discipline. Chaque coupe, chaque entaille façonne la manière dont la
            lumière interagit avec la glace, créant des reflets et des ombres
            qui donnent vie à la sculpture. En tant que novice, on apprend à
            apprivoiser ces éléments pour ajouter une dimension artistique à mes
            créations.
          </p>
          <br />
          <p>
            C'est un art qui célèbre la beauté éphémère, où chaque œuvre est
            destinée à fondre et à disparaître.
          </p>
        </>
      ),
    },
    {
      id: 8,
      link: "kinesiologie-medecine-chinoise",
      span1: "bien-",
      span2: "être",
      shadow: "harmonie",
      title: "La kinésiologie a travers la médecine chinoise",
      catchphrase:
        "Explorez les liens entre la kinésiologie et la médecine chinoise, et découvrez comment ces pratiques contribuent au bien-être physique et mental.",
      image: (
        <img
          src={medecineChinoise}
          alt="médecine chinoise"
          className="w-full object-cover duration-300 ease-in-out"
        />
      ),
      subTitle: "Une plongée profonde dans l'harmonie du corps et de l'esprit.",
      text: (
        <>
          <p>
            Explorez les liens profonds entre la kinésiologie et la médecine
            chinoise, deux approches complémentaires qui œuvrent ensemble pour
            favoriser le bien-être physique et mental. La kinésiologie, inspirée
            par la médecine chinoise, se distingue par sa spécialisation dans la
            libération émotionnelle et la compréhension de l'inconscient.
          </p>
          <br />

          <p>
            Dans le cadre de la kinésiologie, l'approche basée sur la médecine
            chinoise s'articule autour des cinq éléments fondamentaux : le bois,
            le feu, la terre, le métal et l'eau. Ces éléments, essentiels dans
            la médecine chinoise traditionnelle, représentent différentes
            énergies et aspects de la vie. Lors d'une séance, le praticien de la
            kinésiologie explore ces éléments pour comprendre les déséquilibres
            énergétiques et émotionnels de la personne.
          </p>
          <br />

          <p>
            À l'image de la kinésiologie animale, où le lien entre le praticien
            et l'animal est établi par l'inconsient de l'ame et/ou le toucher,
            la méthode s'applique également aux humains. La séance commence par
            une connexion énergétique, permettant au praticien de ressentir et
            d'interagir avec les énergies circulant dans le corps. À travers des
            tests musculaires par exemples, il sollicite l'autorisation de
            travailler avec la personne et identifie les problématiques
            émotionnelles prêtes à être libérées.
          </p>
          <br />

          <p>
            Contrairement à une approche focalisée sur les symptômes, la
            kinésiologie se concentre sur l'origine des problèmes. Par exemple,
            dans le cas d'une réactivité envers les congénères, le praticien ne
            se contente pas de traiter la réactivité elle-même, mais cherche à
            comprendre l'événement déclencheur qui a créé un blocage émotionnel.
            Cette démarche alignée avec la médecine chinoise permet d'aller à la
            source du problèmes.
          </p>
          <br />

          <p>
            Imaginons Tobby, un chien de 3 ans réactif envers ses congénères
            depuis un an. Une séance de kinésiologie révèle un événement
            originel : une mauvaise expérience durant son enfance canine, où il
            été le benjamin, chahuté et rabéssé par ses frères et sœurs.
            Associant cette expérience à la peur et au manque de confiance,
            Tobby a développé des blocages émotionnels. Grâce à la kinésiologie,
            ces blocages sont libérés, permettant à Tobby de se souvenir de
            l'événement sans vivre les émotions négatives associées. Il peut
            ainsi entamer un processus de reconstruction émotionnelle et évoluer
            positivement.
          </p>
          <br />

          <p>
            En conclusion, la kinésiologie à travers la médecine chinoise offre
            une approche holistique qui va au-delà des symptômes, cherchant à
            comprendre et à libérer les blocages énergétiques et émotionnels à
            la source. Cette méthode unique contribue à l'épanouissement
            physique et mental, alignant l'individu avec les principes
            fondamentaux des cinq éléments et favorisant un équilibre
            harmonieux.
          </p>
        </>
      ),
    },
    {
      id: 9,
      link: "education-positive-animaux-compagnie",
      span1: "education",
      span2: "positive",
      shadow: "compagnon",
      title: "L'éducation positive chez nos animaux de compagnie",
      catchphrase:
        "Découvrez comment l'éducation positive peut renforcer le lien entre les propriétaires et leurs compagnons à quatre pattes.",
      image: (
        <img
          src={education}
          alt="éducation positive"
          className="w-full object-cover duration-300 ease-in-out"
        />
      ),
      subTitle: "Créer une relation harmonieuse avec nos amis à fourrure.",
      text: (
        <>
          <p>
            L'éducation positive pour nos animaux de compagnie repose sur la
            bienveillance et la confiance mutuelle, créant ainsi les fondements
            d'une relation épanouissante. Les approches positives, telles que le
            jeu, les ballades et le temps passé avec eux, sont autant de moyens
            de renforcer le lien unique qui unit les propriétaires à leurs
            animaux de compagnies.
          </p>
          <br />

          <p>
            Les jeux interactifs occupent une place centrale dans l'éducation
            positive. Au-delà du simple divertissement, ces moments ludiques se
            révèlent être de puissants outils pour renforcer la complicité. Que
            ce soit à travers des jouets stimulants, des séances de dressage
            ludiques avec des friandises adaptées à leurs goûts. A vous de
            découvrir leurs goût (le mien adore finir le trognon de ma pomme),
            les jeux deviennent des instants privilégiés pour créer des
            souvenirs durables.
          </p>
          <br />

          <p>
            Les ballades régulières, bien plus qu'un exercice physique,
            représentent une opportunité unique de bâtir la confiance et
            d'explorer le monde ensemble. Le temps passé en extérieur stimule
            les sens de nos compagnons, favorisant un équilibre émotionnel et
            physique. Les balades sont des moments de plaisir et de liberté pour
            eux, où ils peuvent exprimer leur nature sans entraves.
          </p>
          <br />

          <p>
            Impliquer nos animaux dans notre quotidien renforce le lien
            émotionnel. Des séances de câlins, des moments de détente partagés
            sur le canapé ou leur intégration à nos activités quotidiennes
            contribuent à établir une connexion profonde basée sur l'amour et le
            respect.
          </p>
          <br />

          <p>
            L'éducation positive vise à accroître le bien-être de nos compagnons
            et à réduire le stress qu'ils peuvent ressentir. Cette approche
            s'avère particulièrement efficace pour atténuer des comportements
            indésirables tels que les aboiements excessifs ou les tensions entre
            congénères. En abordant ces pratiques avec respect et engagement,
            les propriétaires peuvent cultiver une relation durable basée sur le
            bien-être, la confiance et l'affection partagée.
          </p>
        </>
      ),
    },
  ];
  const categorysWork = ["Tous", "Site Web", "App Web", "Maquette"];

  const portfolioData = [
    {
      title: "GoReconnect",
      category: categorysWork[1],
      techStack: "HTML, CSS, JavaScript, React.JS, Netlify et GitHub.",
      subTitle:
        "Création d'un site de prestation de service et identitée visuelle.",
      description: (
        <>
          <p>
            GoReconnect est un site web mettant en avant les prestations de
            service de <strong>Alix, kinésiologue animalière</strong>.
          </p>
          <p>
            L'objectif de ce projet était de créer une{" "}
            <strong>identité numérique</strong> correspondant à l'image que
            souhaite exprimer la cliente. Le site permet aux utilisateurs de{" "}
            <strong>prendre rendez-vous</strong> en ligne, enregistrer les
            informations de leurs animaux pour gagner du temps lors des
            prochaines prise de rendez-vous.
          </p>
          <p>
            Les utilisateurs pourront en apprendre plus sur la kinésiologie
            grace à une page dédiée. Ils pourront <strong>liker</strong>,{" "}
            <strong>commenter</strong> et <strong>partager</strong> les articles
            qu'écrit Alix sur son blog. Le site web a été conçu avec une
            approche mobile-first et en étant orienté sur le référencement
            naturel (SEO) afin d'augmenter sa visibilité sur les moteurs de
            recherche.
          </p>
        </>
      ),
      features: [
        "Agenda connecter à Google Agenda",
        "API Google Maps",
        "Création de compte utilisateur",
        "Formulaire Dynamique",
        "Mail automatisé",
        "Paiement en ligne",
        "Intégration de contenu (blog)",
        "Like, commente et partage des articles",
        "SEO",
      ],
      image: (
        <img
          srcSet={`
            ${alixShibaSm} 460w,
            ${alixShibaMd} 690w,
            ${alixShibaLg} 900w
          `}
          sizes="
            (max-width: 460px) 460px,
            (max-width: 690px) 690px,
            900px
          "
          src={alixShibaLg}
          alt="kinésiologue animaliere alix"
          className="object-cover"
        />
      ),
      webSite: {
        name: "GoReconnect.ch",
        url: "https://goreconnect.ch/",
      },
      github: {
        name: "Github",
        url: "https://github.com/PilcodeurDev/GoReconnect",
      },
    },
    {
      title: "Hélicia",
      category: categorysWork[2],
      techStack: "HTML, CSS, JavaScript, Ruby on Rails, Scalingo et GitHub.",
      subTitle: "Application web de livraison par drone",
      description: (
        <>
          <p>
            Helicia a été conçue dans le cadre de la formation de développement
            full-stack chez Le Wagon.
          </p>
          <p>
            L'<strong>objectif</strong> de ce projet était de réaliser une
            application web <strong>fonctionnelle en 5 jours</strong>, par
            équipe de 3 personnes, avec une répartition des tâches et des
            responsabilités.
          </p>
          <p>
            Nous avons également utilisé des outils de gestion de projet tels
            que Figma, Trello et GitHub pour organiser notre travail et
            collaborer efficacement.
          </p>
        </>
      ),
      features: [
        "Search bar intelligente",
        "Map interactive avec drone",
        "Création de compte utilisateur",
        "fil d'ariane",
        "Panier d'achat",
      ],
      image: (
        <img
          srcSet={`
            ${heliciaSm} 460w,
            ${heliciaMd} 690w,
            ${heliciaLg} 900w
          `}
          sizes="
            (max-width: 460px) 460px,
            (max-width: 690px) 690px,
            900px
          "
          src={heliciaLg}
          alt="application web de livraison par drone"
          className="object-cover"
        />
      ),
      webSite: {
        name: "Helicia.net",
        url: "",
      },
      github: {
        name: "Github",
        url: "https://github.com/PilcodeurDev/Helicia",
      },
    },
    {
      title: "Mont Q Angels",
      category: categorysWork[2],
      techStack: "HTML, CSS, JavaScript, Ruby on Rails, Scalingo et Github.",
      subTitle: "Ma première app web - Airbnb like",
      description: (
        <>
          <p>
            Mont Q Angels est une application web qui met en relation des
            personnes qui souhaitent louer du papier toilette à des personnes en
            situation de précarité.
          </p>
          <p>
            Cette application web a été réalisée en <strong>3 jours</strong>,
            par équipe de 3, avec une répartition des tâches et des
            responsabilités. Elle a été conçue dans le cadre de la formation de
            développement full-stack chez Le Wagon.
          </p>
          <p>
            L'<strong>objectif</strong> de ce projet était de découvrir la
            méthodologie <strong>AGILE</strong> dans un vrai projet en équipe et
            de réaliser une application web fonctionnelle en 5 jours.
          </p>
          <p>
            Nous avons également utilisé des outils de gestion de projet tels
            que Trello et GitHub pour organiser notre travail et collaborer
            efficacement.
          </p>
        </>
      ),
      features: [
        "Création de compte utilisateur",
        "Création d'annonce",
        "Recherche d'annonce",
      ],
      image: (
        <img
          srcSet={`
            ${montQAngelsSm} 460w,
            ${montQAngelsMd} 690w,
            ${montQAngelsLg} 900w
          `}
          sizes="
            (max-width: 460px) 460px,
            (max-width: 690px) 690px,
            900px
          "
          src={montQAngelsLg}
          alt="premiere application web"
          className="object-cover"
        />
      ),
      webSite: {
        name: "MontQAngels.net",
        url: "",
      },
      github: {
        name: "Github",
        url: "https://github.com/PilcodeurDev/MontQAngels",
      },
    },
    {
      title: "Maquette de prestations de services",
      category: categorysWork[3],
      techStack: "Figma.",
      subTitle: "Outil de communication du développeur",
      description: (
        <>
          <p>
            Présentation tarifaire pour un développeur web freelance qui
            souhaite créer, vendre et maintenir un site internet.
          </p>
          <p>
            La maquette, composée de plusieurs prestations différentes, est
            utilisée comme <strong>appui visuel</strong> pour vulgariser et
            promouvoir son travail devant un client qui souhaite avoir une
            visibilité sur internet.
          </p>
          <p>
            Elle est également un <strong>outil de travail</strong> pour le
            développeur qui a besoin d'une vision claire de ses prestations.
          </p>
          <p>
            Cette maquette est sujette à des modifications et des améliorations
            en fonction de l'évolution des compétences du développeur en charge
            de la création du site.
          </p>
        </>
      ),
      features: "",
      image: (
        <img
          srcSet={`
            ${maquetteSm} 460w,
            ${maquetteMd} 690w,
            ${maquetteLg} 900w
          `}
          sizes="
            (max-width: 460px) 460px,
            (max-width: 690px) 690px,
            900px
          "
          src={maquetteLg}
          alt="maquette de présentation de tarifs"
          className="object-cover"
        />
      ),
      webSite: {
        name: "Maquette figma",
        url: "https://www.figma.com/proto/tF9iIhwCCv7os4LZrRFFqg/Headless-Next.js%2FStrapi?node-id=13-165&starting-point-node-id=13%3A165",
      },
      github: {
        name: "Github",
        url: "",
      },
    },
  ];

  return (
    <DataContext.Provider
      value={{
        owner,
        skillData,
        aboutMe,
        blogData,
        portfolioData,
        categorysWork,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

DataContext.propTypes = {
  children: PropTypes.node,
};
