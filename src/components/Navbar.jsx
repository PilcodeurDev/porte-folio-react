import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/portefolio">Portefolio</Link>
    </div>
  )
}
