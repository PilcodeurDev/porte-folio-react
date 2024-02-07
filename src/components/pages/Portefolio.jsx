/**
 * The external imports
 */
import { useContext, useState } from "react";
import { createPortal } from "react-dom";

/**
 * The internal imports
 */
import { DataContext } from "../../context/DataProvider";
import MyTitle from "../MyTitle";
import PortefolioCard from "../portefolioCard/PortefolioCard";
import ModalContent from "../ModalContent";

export default function Portefolio() {
  const { portefolioData } = useContext(DataContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showCategory, setShowCategory] = useState("TOUS");

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="w-[80%] m-auto max-w-[1400px]">
      <MyTitle span1={"mon"} span2={"portfolio"} shadow={"travail"} />
      <div className="flex justify-center">
        <ul className="flex mb-5 items-center text-[#183966]">
          <li
            onClick={() => setShowCategory("TOUS")}
            className={`flex justify-center text-xs mx-2 mb-5 font-bold whitespace-nowrap md:text-sm lg:text-base transition-color duration-200 hover:text-[#bba06b] ${
              showCategory === "TOUS" ? "text-[#bba06b]" : ""
            }`}
          >
            TOUS
          </li>
          <li
            onClick={() => setShowCategory("siteweb")}
            className={`flex justify-center text-xs mx-2 mb-5 font-bold whitespace-nowrap md:text-sm lg:text-base transition-color duration-200 hover:text-[#bba06b] ${
              showCategory === "siteweb" ? "text-[#bba06b]" : ""
            }`}
          >
            SITE WEB
          </li>
          <li
            onClick={() => setShowCategory("maquette")}
            className={`flex justify-center text-xs mx-2 mb-5 font-bold whitespace-nowrap md:text-sm lg:text-base transition-color duration-200 hover:text-[#bba06b] ${
              showCategory === "maquette" ? "text-[#bba06b]" : ""
            }`}
          >
            MAQUETTE
          </li>
          <li
            onClick={() => setShowCategory("appweb")}
            className={`flex justify-center text-xs mx-2 mb-5 font-bold whitespace-nowrap md:text-sm lg:text-base transition-color duration-200 hover:text-[#bba06b] ${
              showCategory === "appweb" ? "text-[#bba06b]" : ""
            }`}
          >
            APP WEB
          </li>
          <li
            onClick={() => setShowCategory("video")}
            className={`flex justify-center text-xs mx-2 mb-5 font-bold whitespace-nowrap md:text-sm lg:text-base transition-color duration-200 hover:text-[#bba06b] ${
              showCategory === "video" ? "text-[#bba06b]" : ""
            }`}
          >
            VIDEO
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 2xl:grid-cols-4">
        {portefolioData.map(({ id, title, image, modalText, category }) => {
          if (category === showCategory || showCategory === "TOUS") {
            return (
              <div key={id} className="flex rounded-xl shadow-2xl">
                <button
                  onClick={() => {
                    openModal({ id, title, modalText, image });
                  }}
                >
                  <PortefolioCard title={title} image={image} />
                </button>

                {selectedItem &&
                  selectedItem.id === id &&
                  createPortal(
                    <ModalContent
                      closeModal={closeModal}
                      title={selectedItem.title}
                      modalText={selectedItem.modalText}
                      image={selectedItem.image}
                    />,
                    document.body
                  )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
