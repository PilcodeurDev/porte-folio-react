/**
 * The external imports
 */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * The internal imports
 */
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Single from "./components/pages/Single";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root element={<Home />} />,
  },
  {
    path: "/about",
    element: <Root element={<About />} />,
  },
  {
    path: "/blog",
    children: [
      {
        path: "",
        element: <Root element={<Blog />} />,
      },
      {
        path: ":id",
        element: <Single />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Root element={<Contact />} />,
  },
  {
    path: "/portfolio",
    element: <Root element={<Portfolio />} />,
  },
]);

function Root({ element }) {
  return (
    <>
      {element}
      <Navbar />
    </>
  );
}
Root.propTypes = {
  element: PropTypes.element.isRequired,
};

function App() {
  return <RouterProvider router={router} />;
}

export default App;
