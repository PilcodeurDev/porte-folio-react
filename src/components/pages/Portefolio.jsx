/**
 * The external imports
 */
import { Link } from "react-router-dom";
import { useContext } from "react";

/**
 * The internal imports
 */
import MyTitle from "../MyTitle";
import PortefolioCard from "../portefolioCard/PortefolioCard";
import { DataContext } from "../../context/DataProvider";

export default function Portefolio() {
  const { portefolioData } = useContext(DataContext);

  return (
    <div className="w-[70%] m-auto max-w-[1400px]">
      <MyTitle span1={"mon"} span2={"portfolio"} shadow={"travail"} />
      <div className="flex justify-center">
        <ul className="flex mb-5 items-center text-[#183966] ">
          <li className="flex justify-center text-xs mx-2 mb-5 font-bold whitespace-nowrap md:text-sm lg:text-base transition-color duration-300 hover:text-[#bba06b]">
            TOUS
          </li>
          <li className="flex justify-center text-xs mx-2 mb-5 font-bold whitespace-nowrap md:text-sm lg:text-base transition-color duration-300 hover:text-[#bba06b]">
            SITE WEB
          </li>
          <li className="flex justify-center text-xs mx-2 mb-5 font-bold whitespace-nowrap md:text-sm lg:text-base transition-color duration-300 hover:text-[#bba06b]">
            MAQUETTE
          </li>
          <li className="flex justify-center text-xs mx-2 mb-5 font-bold whitespace-nowrap md:text-sm lg:text-base transition-color duration-300 hover:text-[#bba06b]">
            APP WEB
          </li>
          <li className="flex justify-center text-xs mx-2 mb-5 font-bold whitespace-nowrap md:text-sm lg:text-base transition-color duration-300 hover:text-[#bba06b]">
            VIDEO
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 2xl:grid-cols-4  ">
        {portefolioData.map(({ id, title, image }) => {
          return (
            <Link to="/" key={id} className="rounded-xl shadow-2xl">
              <PortefolioCard title={title} image={image} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
