import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import  authReducer  from "./authSlice";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig ={
  key : "root",
  storage,
  version:1,
  blacklist:[],
  whitelist:[]
}

const allReducers = combineReducers({ auth: authReducer,})
const persistedReducer= persistReducer(persistConfig,allReducers);
export const store = configureStore({
  devTools:true,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

