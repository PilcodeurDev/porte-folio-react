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
    // data-aos="fade-left"
    // data-duration="1000"
    className="relative"
    >
      <div className="text-sm bg-[#ffffff] rounded-xl overflow-hidden mb-10">
        <div className="">
          <div className="relative">{image}</div>
        </div>
        <div className="px-6 py-8">
          <h3 className="mb-2 text-mainColor">{title}</h3>
          <p className="mb-8 text-gray-600">{subTitle}</p>
          <div className="bg-[#eeeeee] rounded-lg mb-7 p-4">
            <p className="mb-2 font-semibold">Description :</p>
            <p className="pl-3">{description}</p>
          </div>
          <div className="mb-7">
            {features && (
              <div>
                <p className="mb-2 font-semibold">Fonctionnalitées :</p>
                <ul>
                  {features.map((feature, index) => (
                    <li className="list-disc ml-4" key={index}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="mb-12">
            <p className="mb-1 font-semibold">Technologies :</p>
            <p className="ml-4">{techStack}</p>
          </div>
          {/* conditional rendering button */}
          <div>
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
  );
}

PortfolioCard2.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  subTitle: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  webSite: PropTypes.object,
  github: PropTypes.object,
};
