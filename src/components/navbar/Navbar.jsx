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
      path: "/portefolio",
      text: "Portefolio",
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
    <nav className='navbar'>
      <ul>
        {menuIcons.map(({ id, path, icon, text }) => (
          <li key={id} className='icon-box'>
            <Link to={path}>
              {icon}
              <h6>{text}</h6>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
