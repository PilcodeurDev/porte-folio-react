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
    <>
      <div className="absolute w-2/5 top-0 shadow-lg shadow-black/50 rounded-xl">
        {image}
      </div>
      <div className="absolute bottom-0 right-0 w-[90%] h-3/4 bg-black/60 rounded-3xl shadow-lg shadow-black/30 -z-10">
        <div className="relative h-full ">
          <div className="absolute ml-10 bottom-1/3 translate-y-1/2">
            {features && (
              <div>
                <p className="font-bold">Fonctionnalitées :</p>
                <ul className="leading-6">
                  {features.map((feature, index) => (
                    <li className="list-disc ml-6" key={index}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="w-[65%] h-full p-5 absolute right-0">
            <div className="relative h-full">
              <h3 className="text-mainColor text-2xl mb-4">{title}</h3>
              <p className="text-sm mb-3">{subTitle}</p>
              <div className="mb-3">
                <span className="">Technologies : </span>
                <span className="">{techStack}</span>
              </div>
              <p className="">{description}</p>
              <div className="absolute bottom-0 w-2/3 left-1/2 -translate-x-1/2 font-extrabold">
                {github.url ? (
                  <div className="flex justify-between">
                    <a
                      href={github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-5 bg-mainColor rounded-full shadow-lg shadow-black/30 text-mainColorContrast"
                    >
                      {github.name}
                    </a>
                    <a
                      href={webSite.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-5 bg-mainColor rounded-full shadow-lg shadow-black/30 text-mainColorContrast "
                    >
                      {webSite.name}
                    </a>
                  </div>
                ) : (
                  <div className="flex justify-end">
                    <span className="py-3 px-5 bg-mainColor rounded-full shadow-lg shadow-black/30 text-mainColorContrast">
                      {webSite.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
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
