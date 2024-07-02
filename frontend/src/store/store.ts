import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { reducer as themeReducer } from './slices/themeReducer';
import { reducer as modalReducer } from './slices/modalReducer';

const reducer = combineReducers({
  theme: themeReducer,
  modal: modalReducer
})

export const store = configureStore({
  reducer,
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsAPI.middleware, channelsAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>