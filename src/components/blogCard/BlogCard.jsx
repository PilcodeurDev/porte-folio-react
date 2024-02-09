/**
 * The external imports
 */
import PropTypes from "prop-types";

/**
 * The internal imports
 */
import "./BlogCard.css";

export default function BlogCard({ title, subTitle, image }) {
  return (
    <div className="h-full">
      <div className="rounded-t-lg border-b-8 border-mainColorContrast overflow-hidden">
        {image}
      </div>
      <div className="p-4">
        <p className="mb-5 font-extrabold text-xl tracking-tight">
          {title}
        </p>
        <p className="leading-5">{subTitle}</p>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};
