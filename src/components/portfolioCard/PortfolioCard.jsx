/**
 * The external imports
 */
import PropTypes from "prop-types";

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
      <div className="absolute w-2/5 left-10 top-5 shadow-lg shadow-black/50 rounded-xl z-10">
        {image}
      </div>
      <div className="absolute bottom-0 right-0 w-[92%] h-3/4 bg-[#FFFFFF] rounded-3xl shadow-lg shadow-black/30">
        <div className="relative h-full py-6 px-7">
          <div className="grid grid-cols-5 h-full">
            <div className="col-span-2 relative">
              <div className="absolute top-[44%] py-3 px-8 w-[92%] bg-[#eeeeee] rounded-xl">
                {features && (
                  <div>
                    <p className="font-bold ">Fonctionnalitées :</p>
                    <ul className="">
                      {features.map((feature, index) => (
                        <li className="list-disc ml-7" key={index}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="col-span-3 h-full">
              <div className="relative h-full">
                <h3 className="text-mainColor text-3xl ml-4 mb-6">{title}</h3>
                <p className="font-semibold mb-6">{subTitle}</p>
                <div className="py-3 px-5 mb-8 bg-[#eeeeee] rounded-xl">
                  <p className="mb-2">Description : </p>
                  <p>{description}</p>
                </div>
                <div className="mb-3 text-sm text-gray-800">
                  <span className="underline">Technologies : </span>
                  <span className="">{techStack}</span>
                </div>
                <div className="absolute bottom-0 right-0 w-1/3">
                  {github.url ? (
                    <div className="flex justify-between">
                      <a
                        href={github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 bg-mainColor rounded-xl shadow-lg shadow-black/30 text-white font-extrabold transition-all duration-200 hover:brightness-150 hover:text-mainColorContrast"
                      >
                        {github.name}
                      </a>
                      <a
                        href={webSite.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 bg-mainColor rounded-xl shadow-lg shadow-black/30 text-white font-extrabold transition-all duration-200 hover:brightness-150 hover:text-mainColorContrast"
                      >
                        {webSite.name}
                      </a>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <span className="py-2 px-3 bg-mainColor rounded-xl shadow-lg shadow-black/30 text-white font-extrabold transition-all duration-200 hover:brightness-150 hover:text-mainColorContrast">
                        {webSite.name}
                      </span>
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
