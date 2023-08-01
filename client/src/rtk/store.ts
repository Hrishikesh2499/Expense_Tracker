import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userManagerReducer from "./features/userManagerSlice";
import homeReducer from "./features/homeSlice";
import snackBarReducer from "./features/snackBarSlice";
import spinnerReducer from "./features/spinnerSlice";
import todoReducer from "./features/todoSlice";
import errorHandlerReducer from "./features/errorSlice";
import expenseManagerReducer from "./features/expenseManagerSlice";
import labReducer from "./features/labSlice";

// ...
const reducers = combineReducers({
  userManager: userManagerReducer,
  home: homeReducer,
  snackBar: snackBarReducer,
  spinner: spinnerReducer,
  todo: todoReducer,
  errorHandler: errorHandlerReducer,
  expenseManager: expenseManagerReducer,
  lab: labReducer,
});
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
