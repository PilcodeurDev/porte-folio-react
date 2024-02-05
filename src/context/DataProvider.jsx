/**
 * The external imports
 */
import { createContext, useState } from "react";
import { FaWhatsappSquare } from "react-icons/fa";


/**
 * The internal imports
 */
import { css, figma, html, js, pgSQL, react, ruby } from "../assets/images";

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
      logo: <img src={html} alt="html" className=" max-w-36 " />,
    },
    {
      id: 2,
      name: "css",
      logo: <img src={css} alt="css" />,
    },
    {
      id: 3,
      name: "javascript",
      logo: <img src={js} alt="javascript" />,
    },
    {
      id: 4,
      name: "Figma",
      logo: <img src={figma} alt="figma" />,
    },
    {
      id: 5,
      name: "Ruby on rails",
      logo: <img src={ruby} alt="ruby on rails" />,
    },
    {
      id: 6,
      name: "PostgreSQL",
      logo: <img src={pgSQL} alt="postgreSQL" />,
    },
    {
      id: 7,
      name: "React",
      logo: <img src={react} alt="react" className="animate-spin-slow" />,
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

  return (
    <DataContext.Provider value={{ owner, skillData, aboutMe }}>
      {props.children}
    </DataContext.Provider>
  );
}
