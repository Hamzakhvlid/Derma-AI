import { configureStore,combineReducers } from "@reduxjs/toolkit";
import  authReducer  from "./authSlice";
import sidebarReducer from './sidebarSlice';
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./reducers/user";
import { userSlice } from "./reducers/loggedinUser";
import { doctorSlice } from "./reducers/doctors";
import {scanNowSlice }from "./reducers/scanNow";
const persistConfig ={
  key : "root",
  storage,
  version:1,
  blacklist:['sidebar'],
  whitelist:[]
}

const allReducers = combineReducers({ auth: authReducer,user: userSlice.reducer,doctor:doctorSlice.reducer,sidebar: sidebarReducer,scanNow:scanNowSlice.reducer})
const persistedReducer= persistReducer(persistConfig,allReducers);
export const store = configureStore({
  devTools:true,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

