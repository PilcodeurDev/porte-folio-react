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
import OverlayRevealContent from "../animation/OverlayRevealContent";

export default function Portefolio() {
  const { portefolioData, categorysWork } = useContext(DataContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showCategory, setShowCategory] = useState(categorysWork[0]);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1200">
      <div className="w-[80%] m-auto max-w-[1400px] mb-40">
        <MyTitle span1={"mon"} span2={"portfolio"} shadow={"travail"} />
        <div className="flex justify-center">
          <ul className="flex mb-5 items-center text-[#183966]">
            {categorysWork.map((category, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setShowCategory(category)}
                  className={`flex justify-center text-xs mx-2 md:mx-4 mb-5 font-bold whitespace-nowrap md:text-sm lg:text-base transition-color duration-200 hover:text-[#bba06b] ${
                    showCategory === category ? "text-[#bba06b]" : ""
                  }`}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 2xl:grid-cols-4">
          {portefolioData.map(({ id, title, image, modalText, category }) => {
            if (
              category === showCategory ||
              showCategory === categorysWork[0]
            ) {
              return (
                <div
                  data-aos="fade-left"
                  data-duration="1000"
                  key={id}
                  className="flex rounded-xl shadow-2xl"
                >
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
      <OverlayRevealContent />
    </div>
  );
}
