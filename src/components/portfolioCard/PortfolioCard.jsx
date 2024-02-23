/**
 * The external imports
 */
import PropTypes from "prop-types";
import { MdOutlineArrowOutward } from "react-icons/md";

/**
 * The internal imports
 */
import "./PortfolioCard.css";

export default function PortfolioCard({
  title,
  subTitle,
  techStack,
  features,
  description,
  image,
  webSite,
  github,
}) {
  return (
    <div
      // data-aos="fade-left"
      // data-duration="1000"
      className="relative w-full h-[700px] font-medium"
    >
      <div className="bg-[#FFFFFF] rounded-3xl shadow-lg shadow-black/30 2xl:absolute 2xl:bottom-0 2xl:right-0 2xl:w-[92%] 2xl:h-4/5">
        <div className="mb-6 shadow-lg shadow-black/50 rounded-xl 2xl:absolute 2xl:w-2/5 2xl:-left-[5rem] 2xl:translate-x- 2xl:-top-1/2 2xl:translate-y-1/2  2xl:mb-0  2xl:z-10">
          {image}
        </div>
        <div className="p-4 relative h-full 2xl:py-6 2xl:px-7">
          <div className="flex flex-col 2xl:grid 2xl:grid-cols-5 2xl:h-full">
            <div className="order-2 2xl:col-span-2 2xl:relative">
              {features ? (
                <div className="p-4 2xl:absolute 2xl:top-[44%] 2xl:py-3 2xl:px-8 2xl:w-[84%] bg-[#eeeeee] rounded-xl">
                  <div>
                    <p className="font-bold ">Fonctionnalitées :</p>
                    <ul>
                      {features.map((feature, index) => (
                        <li className="list-disc ml-7" key={index}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="2xl:absolute 2xl:top-[44%] 2xl:py-3 2xl:px-8 2xl:w-[92%]"></div>
              )}
            </div>
            <div className="order-1 2xl:col-span-3 h-full">
              <div className="relative h-full">
                <h3 className="text-mainColor text-3xl mb-6">{title}</h3>
                <p className="font-semibold mb-6">{subTitle}</p>
                <div className="py-3 px-5 mb-8 bg-[#eeeeee] rounded-xl">
                  <p className="mb-2">Description : </p>
                  <p>{description}</p>
                </div>
                <div className="mb-3 text-sm text-gray-800">
                  <span className="underline">Technologies :</span>
                  <span> {techStack}</span>
                </div>
                <div className="absolute bottom-0 right-0 w-2/5">
                  {webSite.url && github.url ? (
                    <div className="flex justify-between">
                      <a
                        href={github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex item-center py-2 px-3 bg-mainColor rounded-lg shadow-lg shadow-black/30 text-white font-extrabold transition-all duration-200 hover:brightness-150 hover:text-mainColorContrast"
                      >
                        {github.name}
                        <MdOutlineArrowOutward className="ml-1" />
                      </a>
                      <a
                        href={webSite.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex item-center py-2 px-3 bg-mainColor rounded-lg shadow-lg shadow-black/30 text-white font-extrabold transition-all duration-200 hover:brightness-150 hover:text-mainColorContrast"
                      >
                        {webSite.name}
                        <MdOutlineArrowOutward className="ml-1" />
                      </a>
                    </div>
                  ) : webSite.url ? (
                    <div className="flex justify-end">
                      <a
                        href={webSite.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex item-center py-2 px-3 bg-mainColor rounded-lg shadow-lg shadow-black/30 text-white font-extrabold transition-all duration-200 hover:brightness-150 hover:text-mainColorContrast"
                      >
                        {webSite.name}
                        <MdOutlineArrowOutward className="ml-1" />
                      </a>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <a
                        href={webSite.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex item-center py-2 px-3 bg-mainColor rounded-lg shadow-lg shadow-black/30 text-white font-extrabold transition-all duration-200 hover:brightness-150 hover:text-mainColorContrast"
                      >
                        {github.name}
                        <MdOutlineArrowOutward className="ml-1" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  subTitle: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  webSite: PropTypes.object,
  github: PropTypes.object,
};
