import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import sidebarReducer from "./sidebarSlice";
import { persistReducer } from "redux-persist";


import { userSlice } from "./reducers/loggedinUser";
import { doctorSlice } from "./reducers/doctors";
import { scanNowSlice } from "./reducers/scanNow";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { appointmentSlice } from "./reducers/appointmnets";
import { selectedAppointmentSlice } from "./reducers/selectedAppointment";
const createNoopStorage=()=>{
  return {
    getItem(_key:string){
      return Promise.resolve(null);
    },
    setItem(_key:string,value:any){
      return Promise.resolve(value);
    },
    removeItem(_key:string){
      return Promise.resolve();
    }
  }
}
const storage =
typeof window != "undefined"
? createWebStorage("local")
: createNoopStorage();
const persistConfig = {
  key: "root",
  storage,
  version: 1,
  blacklist: ["sidebar"],
  whitelist: ["auth", "user", "doctor", "scanNow"],
};

const allReducers = combineReducers({
  auth: authReducer,
  user: userSlice.reducer,
  doctor: doctorSlice.reducer,
  sidebar: sidebarReducer,
  scanNow: scanNowSlice.reducer,
  appointements: appointmentSlice.reducer,
activeAppointments
  : selectedAppointmentSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, allReducers);
export const store = configureStore({
  devTools: true,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
