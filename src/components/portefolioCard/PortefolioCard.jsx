/**
 * The external imports
 */
import PropTypes from "prop-types";

/**
 * The internal imports
 */
import "./PortefolioCard.css";

export default function PortefolioCard({ image, title }) {
  return (
    <div className="portefolio-card rounded-xl relative">
      {image}
      <h4 className="absolute h-[101%] w-full flex justify-center items-center rounded-xl bg-[#183966] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap cursor-pointer">
        <span className="text-[#bba06b] relative -translate-y-5 duration-700">
          {title}
        </span>
      </h4>
    </div>
  );
}

PortefolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};
