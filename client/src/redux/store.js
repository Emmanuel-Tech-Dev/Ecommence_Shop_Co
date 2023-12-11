import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import cartReducer from './cartReducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage  from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whiteList:['cart']
}

const persistedReducer = persistReducer(persistConfig, cartReducer);

const rootReducer = combineReducers({
  auth: authReducer,
  cart: persistedReducer,
});

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export let persistor = persistStore(store)
