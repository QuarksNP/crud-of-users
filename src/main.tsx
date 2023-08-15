import React from "react";

import { usersStore } from "./features/users";

import ReactDOM from "react-dom/client";
import App from "./App.tsx";


import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={usersStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
