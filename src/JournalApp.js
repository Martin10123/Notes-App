import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AppRouter from "./routers/AppRouter";

import "./styles/styles.scss";

function JournalApp() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default JournalApp;
