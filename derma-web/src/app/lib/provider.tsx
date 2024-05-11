"use client";

import React from "react";
import { store } from "./store";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
persistStore(store)
function Providers({ children }: { children: React.ReactNode }) {
  

  return (
    <Provider store={store}>
    {children}
    </Provider>
  );
}

export default Providers;
