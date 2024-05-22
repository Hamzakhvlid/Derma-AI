"use client";

import React from "react";
import { store } from "./store";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { SessionProvider } from 'next-auth/react';


persistStore(store)
function Providers({ children }: { children: React.ReactNode }) {
  

  return (
    <SessionProvider >
    <Provider store={store}>
    {children}
    </Provider>
    </SessionProvider>
  );
}

export default Providers;
