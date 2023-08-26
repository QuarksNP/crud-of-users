import React from "react";

import { store } from "./features/store/index.ts";

import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
