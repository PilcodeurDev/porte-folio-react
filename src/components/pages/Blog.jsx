/**
 * The external imports
 */
import { useContext } from "react";
import { Link } from "react-router-dom";

/**
 * The internal imports
 */
import MyTitle from "../MyTitle";
import { DataContext } from "../../context/DataProvider";
import BlogCard from "../blogCard/BlogCard";
import OverlayRevealContent from "../animation/OverlayRevealContent";

export default function Blog() {
  const { blogData } = useContext(DataContext);

  return (
    <div data-aos="fade-up" data-aos-duration="1200">
      <div className="w-[90%] m-auto max-w-[1400px] mb-24 lg:mb-0">
        <MyTitle span1={"mon"} span2={"blog"} shadow={"articles"} />
        <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {blogData.map(({ id, link, title, subTitle, image }) => (
            <Link
              to={link}
              key={id}
              className="card-animation mb-14 rounded-lg bg-[#e1e8f2] shadow-xl"
            >
              <BlogCard title={title} subTitle={subTitle} image={image} />
            </Link>
          ))}
        </div>
      </div>
      <OverlayRevealContent />
    </div>
  );
}
