/**
 * The external imports
 */
import PropTypes from "prop-types";
import { MdOutlineArrowOutward } from "react-icons/md";

/**
 * The internal imports
 */

export default function PortfolioCard({
  title,
  subTitle,
  techStack,
  features,
  description,
  image,
  webSite,
  github,
  index,
}) {
  const isEven = index % 2 === 0;
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
      className="relative min-h-[800px]"
    >
      <div
        className={`text-sm rounded-xl overflow-hidden shadow-lg shadow-slate-600 lg:overflow-visible lg:absolute lg:h-4/5 lg:w-[90%] lg:bottom-0 xl:text-[15px] 2xl:text-base
        ${
          isEven
            ? "lg:right-0 bg-mainColorContrast/60"
            : "lg:left-0 bg-mainColor/60"
        }
         `}
      >
        <div
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
          className={`relative z-10 overflow-hidden shadow-xl shadow-mainColor/20 lg:absolute lg:-top-[8rem] lg:w-1/2 lg:rounded-lg ${
            isEven ? "lg:-left-[11.5%]" : "lg:-right-[11.5%] "
          }`}
        >
          {image}
        </div>
        <div className="p-4 lg:grid lg:grid-cols-3 lg:p-0 lg:h-full">
          <div className={`lg:col-span-1 ${isEven ? "" : "order-2"} `}></div>
          <div
            className={`lg:col-span-2 lg:px-5 lg:py-4 lg:flex lg:flex-col ${
              isEven ? "lg:ml-[9%]" : "lg:mr-[9%] order-1"
            } `}
          >
            <h3
              className={`mb-2 xl:mb-4 ${
                isEven ? "text-mainColor" : "text-mainColorContrast"
              }`}
            >
              {title}
            </h3>
            <p className="mb-4 text-white font-black">{subTitle}</p>
            <div className="bg-[#D1D8E2] shadow-xl shadow-mainColor/20 rounded-lg mb-5 p-4">
              <p className="mb-2 font-semibold">Description :</p>
              <p className="pl-3">{description}</p>
            </div>
            {features && (
              <div
                className={`mb-4 bg-[#D1D8E2] shadow-xl shadow-mainColor/20 rounded-lg p-4 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-[37.5%] xl:top-[65.5%] xl:w-[37.2%] ${
                  isEven ? "lg:left-3 xl:left-5" : "lg:right-3 xl:right-5"
                } `}
              >
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
              </div>
            )}
            <div className="mb-10 bg-[#D1D8E2] shadow-xl shadow-mainColor/20 rounded-lg p-4 lg:mb-6">
              <p className="mb-1 font-semibold">Technologies :</p>
              <p className="ml-3">{techStack}</p>
            </div>
            <div className="lg:flex-1">
              {/* The conditionnal rendering button */}
              {webSite.url && github.url ? (
                <div className="flex justify-between lg:items-end">
                  <a
                    href={github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex item-center px-3 py-2 rounded-lg shadow-xl shadow-mainColor/20 text-white font-extrabold transition-all duration-200 hover:brightness-150 hover:text-mainColorContrast xl:px-4 xl:py-3 ${
                      isEven ? "bg-mainColor" : "bg-mainColorContrast"
                    }`}
                  >
                    {github.name}
                    <MdOutlineArrowOutward className="ml-1" />
                  </a>
                  <a
                    href={webSite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex item-center px-3 py-2 rounded-lg shadow-xl shadow-mainColor/20 text-white font-extrabold transition-all duration-200 hover:brightness-150 hover:text-mainColorContrast xl:px-4 xl:py-3 ${
                      isEven ? "bg-mainColor" : "bg-mainColorContrast"
                    }`}
                  >
                    {webSite.name}
                    <MdOutlineArrowOutward className="ml-1" />
                  </a>
                </div>
              ) : webSite.url ? (
                <div className="flex justify-end lg:items-end">
                  <a
                    href={webSite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex item-center px-3 py-2 rounded-lg shadow-xl shadow-mainColor/20 text-white font-extrabold transition-all duration-200 hover:brightness-150 hover:text-mainColorContrast xl:px-4 xl:py-3 ${
                      isEven ? "bg-mainColor" : "bg-mainColorContrast"
                    }`}
                  >
                    {webSite.name}
                    <MdOutlineArrowOutward className="ml-1" />
                  </a>
                </div>
              ) : (
                <div className="flex justify-end lg:items-end">
                  <a
                    href={webSite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex item-center px-3 py-2 rounded-lg shadow-xl shadow-mainColor/20 text-white font-extrabold transition-all duration-200 hover:brightness-150 hover:text-mainColorContrast xl:px-4 xl:py-3 ${
                      isEven ? "bg-mainColor" : "bg-mainColorContrast"
                    }`}
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

PortfolioCard.propTypes = {
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
  index: PropTypes.number.isRequired,
};
