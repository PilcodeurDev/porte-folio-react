/**
 * The external imports
 */
import { Fragment, useContext, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";

/**
 * The internal imports
 */
import { DataContext } from "../../context/DataProvider";
import MyTitle from "../MyTitle";
import PortfolioCard from "../portfolioCard/PortfolioCard";
import OverlayRevealContent from "../animation/OverlayRevealContent";

export default function Portfolio() {
  const { portfolioData, categorysWork } = useContext(DataContext);

  const [showCategory, setShowCategory] = useState(categorysWork[0]);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      className="pb-16 overflow-hidden"
    >
      <div className="w-full px-8 m-auto sm:w-[90%] max-w-[1600px]">
        <MyTitle span1={"mon"} span2={"portfolio"} shadow={"travail"} />
        {isWideScreen ? (
          <div className="flex justify-center">
            <ul className="flex mb-8 items-center text-mainColor">
              {categorysWork.map((category, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setShowCategory(category)}
                    className={`flex justify-center mx-1 md:mx-4 mb-5 font-bold whitespace-nowrap transition-color duration-200 hover:text-mainColorContrast cursor-pointer ${
                      showCategory === category ? "text-mainColorContrast" : ""
                    }`}
                  >
                    {category}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="flex justify-end">
            <div className="mb-8 w-[160px] relative text-lg font-bold text-mainColor">
              <Listbox value={showCategory} onChange={setShowCategory}>
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-slate-200 py-2 px-4 pr-10 text-left shadow-xl focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
                  <span className="block truncate text-mainColorContrast">
                    {showCategory}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <FaChevronDown
                      className="h-5 w-5 mr-2 mb-1"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-in duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 py-4 px-4 w-full right-0 flex flex-col gap-3 overflow-auto rounded-md bg-slate-200 shadow-lg ring-1 ring-black/5 z-50 focus:outline-none">
                    {categorysWork.map((category, index) => {
                      return (
                        <Listbox.Option
                          key={index}
                          value={category}
                          className={`${
                            category === showCategory &&
                            "text-mainColorContrast"
                          }`}
                        >
                          {category}
                        </Listbox.Option>
                      );
                    })}
                  </Listbox.Options>
                </Transition>
              </Listbox>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-40 mt-16 lg:gap-52">
          {portfolioData.map(
            (
              {
                category,
                title,
                subTitle,
                techStack,
                features,
                description,
                image,
                webSite,
                github,
              },
              index
            ) => {
              if (
                category === showCategory ||
                showCategory === categorysWork[0]
              ) {
                return (
                  <PortfolioCard
                    key={index}
                    title={title}
                    subTitle={subTitle}
                    techStack={techStack}
                    features={features}
                    description={description}
                    image={image}
                    webSite={webSite}
                    github={github}
                    index={index}
                  />
                );
              }
            }
          )}
        </div>
      </div>
      <OverlayRevealContent />
    </div>
  );
}
