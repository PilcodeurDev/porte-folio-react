import PropTypes from "prop-types";

export default function MyTitle({ span1, span2, shadow }) {
  return (
    <header className="flex justify-center relative uppercase md:mb-10">
      <h1 className=" my-16 text-3xl md:text-[2.8rem]">
        <span>{span1} </span>
        <span className="ml-2 text-mainColorContrast">{span2} </span>
      </h1>
      <span className="absolute top-1/2 left-1/2 font-bold opacity-20 -z-10 -translate-x-2/4 -translate-y-2/4 text-6xl md:text-[6rem]">
        {shadow}
      </span>
    </header>
  );
}

MyTitle.propTypes = {
  span1: PropTypes.string.isRequired,
  span2: PropTypes.string.isRequired,
  shadow: PropTypes.string.isRequired,
};
