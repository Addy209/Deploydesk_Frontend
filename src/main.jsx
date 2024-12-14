import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router";
import store from "./redux/store.js";
// import './index.css'
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <StrictMode>
        <App />
      </StrictMode>
    </Router>
  </Provider>
);
