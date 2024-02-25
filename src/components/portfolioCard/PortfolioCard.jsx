/**
 * The external imports
 */
import PropTypes from "prop-types";
import { MdOutlineArrowOutward } from "react-icons/md";

/**
 * The internal imports
 */

export default function PortfolioCard2({
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
      data-aos="zoom-in-left"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      className="relative min-h-[700px]"
    >
      <div className="text-sm bg-[#ffffff] rounded-xl overflow-hidden shadow-lg shadow-slate-600 lg:overflow-visible lg:absolute lg:h-4/5 lg:w-[90%] lg:right-0 lg:bottom-0">
        <div className="relative z-10 overflow-hidden shadow-lg shadow-black/50 lg:absolute lg:-top-[8rem] lg:-left-[11%] lg:w-1/2 lg:rounded-lg">
          {image}
        </div>
        <div className="px-6 py-8 lg:grid lg:grid-cols-3 lg:p-0 lg:h-full">
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-2 lg:px-4 lg:py-4 lg:ml-[9%] lg:flex lg:flex-col">
            <h3 className="mb-2 text-mainColor">{title}</h3>
            <p className="mb-4 text-gray-600">{subTitle}</p>
            <div className="bg-[#eeeeee] rounded-lg mb-5 p-4">
              <p className="mb-2 font-semibold">Description :</p>
              <p className="pl-3">{description}</p>
            </div>
            <div className="mb-4 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-3 bg-[#eeeeee] rounded-lg p-4 min-w-[304px] xl:top-[72.5%] xl:left-6 xl:min-w-[37.2%]">
              {features && (
                <div>
                  <p className="mb-2 font-semibold">Fonctionnalitées :</p>
                  <ul>
                    {features.map((feature, index) => (
                      <li className="list-disc ml-7" key={index}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="mb-12 lg:mb-6">
              <p className="mb-1 font-semibold">Technologies :</p>
              <p className="ml-4">{techStack}</p>
            </div>
            <div className="lg:flex-1">
              {webSite.url && github.url ? (
                <div className="flex justify-between lg:h-3/4 lg:items-end">
                  <a
                    href={github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex item-center px-3 py-2 bg-mainColor rounded-lg shadow-lg shadow-black/30 text-white font-extrabold transition-all duration-200 hover:brightness-150 hover:text-mainColorContrast xl:px-4 xl:py-3 2xl:px-6 xl:p 2xl:py-4"
                  >
                    {github.name}
                    <MdOutlineArrowOutward className="ml-1" />
                  </a>
                  <a
                    href={webSite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex item-center px-3 py-2 bg-mainColor rounded-lg shadow-lg shadow-black/30 text-white font-extrabold transition-all duration-200 hover:brightness-150 hover:text-mainColorContrast xl:px-4 xl:py-3 2xl:px-6 xl:p 2xl:py-4"
                  >
                    {webSite.name}
                    <MdOutlineArrowOutward className="ml-1" />
                  </a>
                </div>
              ) : webSite.url ? (
                <div className="flex justify-end lg:h-3/4 lg:items-end lg:px-4">
                  <a
                    href={webSite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex item-center px-3 py-2 bg-mainColor rounded-lg shadow-lg shadow-black/30 text-white font-extrabold transition-all duration-200 hover:brightness-150 hover:text-mainColorContrast xl:px-4 xl:py-3 2xl:px-6 xl:p 2xl:py-4"
                  >
                    {webSite.name}
                    <MdOutlineArrowOutward className="ml-1" />
                  </a>
                </div>
              ) : (
                <div className="flex justify-end lg:h-3/4 lg:items-end lg:px-4">
                  <a
                    href={webSite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex item-center px-3 py-2 bg-mainColor rounded-lg shadow-lg shadow-black/30 text-white font-extrabold transition-all duration-200 hover:brightness-150 hover:text-mainColorContrast xl:px-4 xl:py-3 2xl:px-6 xl:p 2xl:py-4"
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
  );
}

PortfolioCard2.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  image: PropTypes.element.isRequired,
  webSite: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  github: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
};
