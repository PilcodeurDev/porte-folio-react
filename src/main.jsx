/**
 * The external imports
 */
import ReactDOM from "react-dom/client";

/**
 * The internal imports
 */
import App from "./App.jsx";
import "./index.css";
import "./styles/colors.css";
import "./styles/fonts.css"
import DataProvider from "./context/DataProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <App />
  </DataProvider>
);
