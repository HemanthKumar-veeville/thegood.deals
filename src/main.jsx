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
  setupImmediateCacheClearing,
} from "../app/utils/serviceWorkerManager";

import { setupCacheCleanupListeners } from "./utils/serviceWorkerCleanup.js";

// Initial cleanup and setup
clearServiceWorkersAndCache();
setupCacheCleanupListeners();
setupImmediateCacheClearing(); // New immediate cache clearing setup

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </Provider>
);
