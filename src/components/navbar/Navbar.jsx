/**
 *  The external imports
 */
import { Link } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import { FaUser, FaBook, FaEnvelope, FaComments } from "react-icons/fa";

/**
 * The internal imports
 */
import "./Navbar.css";

export default function Navbar() {
  const menuIcons = [
    {
      id: 1,
      path: "/",
      text: "Accueil",
      icon: <BsFillHouseFill className="icon" />,
    },
    {
      id: 2,
      path: "/about",
      text: "A Propos",
      icon: <FaUser className="icon" />,
    },
    {
      id: 3,
      path: "/portfolio",
      text: "Portfolio",
      icon: <FaBook className="icon" />,
    },
    {
      id: 4,
      path: "/contact",
      text: "Contact",
      icon: <FaEnvelope className="icon" />,
    },
    {
      id: 5,
      path: "/blog",
      text: "Blog",
      icon: <FaComments className="icon" />,
    },
  ];

  return (
    <nav className="fixed bottom-0 w-full flex justify-center bg-mainColor lg:w-auto lg:right-5 lg:items-center lg:top-1/2 lg:-translate-y-1/2 lg:bg-transparent ">
      <ul className="flex lg:block lg:px-0">
        {menuIcons.map(({ id, path, icon, text }) => (
          <li
            key={id}
            className="icon-box w-[50px] h-[50px] relative flex items-center justify-center mx-3 my-2 lg:mx-0 lg:my-5 rounded-full bg-mainColor cursor-pointer list-none lg:transition-all lg:duration-300"
          >
            <Link className="text-[1.4rem] text-white" to={path}>
              {icon}
              <h6 className="hidden pr-[30px] pl-[25px] absolute top-0 right-0 whitespace-nowrap opacity-0 leading-[3.1rem] rounded-xl -z-10 no-underline transition-all duration-300 lg:block">
                {text}
              </h6>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
