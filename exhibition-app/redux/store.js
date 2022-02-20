import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { createWrapper } from "next-redux-wrapper"
import thunk from "redux-thunk";

// import userReducer from "./redux/userSlice";

const middlewarethunk = [thunk];

const store = () => {
  const combinedReducer = combineReducers({
    // users: userReducer,
  });

  const persistConfig = {
    key: "exhibition",
    storage,
    blacklist: [],
  };

  const persistedReducer = persistReducer(persistConfig, combinedReducer);

  const cstore = configureStore({
    reducer: persistedReducer,
    middleware: [...middlewarethunk],
  });

  cstore.__persistor = persistStore(cstore);
  return cstore;
};

const makeStore = store;

export const wrapper = createWrapper(makeStore);
