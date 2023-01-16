import { combineReducers, configureStore } from "@reduxjs/toolkit";

import todosReducer from "./slices/todosSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const rootReducer = combineReducers({
	todos: todosReducer,
});
const persistConfig = {
	key: "root",
	storage,
	witheList: ["todos"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
});
const persistor = persistStore(store);

export { store, persistor };
