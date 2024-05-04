"use client";

import React from "react";
import { store } from "./store";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

function Providers({ children }: { children: React.ReactNode }) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
    {children}
    </Provider>
  );
}

export default Providers;
