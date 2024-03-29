import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { store } from "Store";
import App from "App";
import "./index.css";
import reportWebVitals from "reportWebVitals";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals()
