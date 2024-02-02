/**
 * The external imports
 */
import { FaWhatsappSquare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

/**
 * The internal imports
 */
import "./About.css";
import Button from "../../button/Button";
import Cv_simon_despres from "../../../assets/Simon_Despres.pdf";
import {
  css,
  figma,
  html,
  js,
  pgSQL,
  react,
  ruby,
} from "../../../assets/images";

const available = () => {
  return <span className="text-[#41984f] font-bold text-xl">Disponible</span>;
};

const myInformations = [
  {
    id: 1,
    title: "Prénom :",
    value: "Simon",
  },
  {
    id: 2,
    title: "Nom de famille :",
    value: "Despres",
  },
  {
    id: 3,
    title: "Âge :",
    value: "28 ans",
  },
  {
    id: 4,
    title: "Nationalité :",
    value: "Française",
  },
  {
    id: 5,
    title: "Indépendant :",
    value: available(),
  },
  {
    id: 6,
    title: "Adresse :",
    value: "Pontarlier, France",
  },
  {
    id: 7,
    title: "Téléphone :",
    value: "+33 6 14 42 17 80",
  },
  {
    id: 8,
    title: "Email :",
    value: "simondprs62790@gmail.com",
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
    value: "Français, Anglais",
  },
];

const skillData = [
  {
    name: "html",
    logo: <img src={html} alt="html" />,
  },
  {
    name: "css",
    logo: <img src={css} alt="css" />,
  },
  {
    name: "javascript",
    logo: <img src={js} alt="javascript" />,
  },
  {
    name: "Figma",
    logo: <img src={figma} alt="figma" />,
  },
  {
    name: "Ruby on rails",
    logo: <img src={ruby} alt="ruby on rails" />,
  },
  {
    name: "PostgreSQL",
    logo: <img src={pgSQL} alt="postgreSQL" />,
  },
  {
    name: "React",
    logo: <img src={react} alt="react" className="animate-spin-slow" />,
  },
];

export default function About() {
  return (
    <>
      <div className="w-[90%] m-auto">
        <header className="title">
          <h1>
            <span>à propos</span>
            <span>de moi</span>
          </h1>
          <span className="shadowTitle">CV</span>
        </header>
        <div className="row grid grid-cols-2 gap-10">
          <div>
            <h3 className="mb-10">informations personnelles</h3>
            <div className="grid grid-cols-2 gap-7">
              {myInformations.map(({ id, title, value }) => (
                <div key={id} className="flex justify-between w-[85%]">
                  <span className="flex flex-nowrap text-xl font-semibold">
                    {title}
                  </span>
                  <span className="flex flex-nowrap text-xl text-[#bba06b] font-bold">
                    {value}
                  </span>
                </div>
              ))}
            </div>
            {/* <a
              href={Cv_simon_despres}
              download="cv-perso"
              target="_blank"
              rel="noreferrer"
            >
              télécharger moi
            </a> */}
            <Button text="Télécharger moi" href={Cv_simon_despres} icon={<FaDownload />} download="Simon_Despres.pdf" />
          </div>
          <div>
            <h3 className="mb-3">Mes compétences</h3>
            <div className="flex flex-wrap">
              {skillData.map(({ id, logo, name }) => (
                <div
                  key={id}
                  className="flex flex-col justify-center items-center w-56 h-56   scale-[.6]"
                >
                  <div className=" flex justify-center items-center h-4/5 w-4/5 transition-all duration-700 hover:scale-125 hover:opacity-0">
                    {logo}
                  </div>
                  <div className="mt-5 font-bold text-4xl whitespace-nowrap transition-all duration-700 hover:scale-125">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
