import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import App from "./App";
import "./index.css";
import "./i18n";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import {
  clearServiceWorkersAndCache,
  setupCacheCleanupListeners,
} from "./utils/serviceWorkerCleanup";

// Initial cleanup
clearServiceWorkersAndCache();

// Setup ongoing cleanup listeners
setupCacheCleanupListeners();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </Provider>
);
