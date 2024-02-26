/**
 * The external imports
 */
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

/**
 * The internal imports
 */
import MyTitle from "../MyTitle";
import { DataContext } from "../../context/DataProvider";

export default function Single() {
  const { id } = useParams();
  const { blogData } = useContext(DataContext);

  const currentArticle = blogData.find((article) => article.link === id);

  return (
    <div className="w-[90%] mx-auto flex flex-col items-center lg:w-2/3">
      <MyTitle
        span1={currentArticle.span1}
        span2={currentArticle.span2}
        shadow={currentArticle.shadow}
      />
      <div className="w-[100vw] max-h-[50vh] mb-8 flex overflow-hidden shadow-2xl lg:max-w-[95vw]">
        {currentArticle.featuredImage}
      </div>
      <h3 className="mt-10">{currentArticle.title}</h3>
      <p className="w-2/3 text-xl mt-16">{currentArticle.text}</p>
      <Link
        to="/blog"
        className=" mt-24 mb-32 text-mainColor hover:text-mainColorContrast transition-colors duration-500"
      >
        <div className="p-4 bg-blue-100 rounded-full ">
          <h4>Merci d'avoir lu !!</h4>
        </div>
      </Link>
    </div>
  );
}
