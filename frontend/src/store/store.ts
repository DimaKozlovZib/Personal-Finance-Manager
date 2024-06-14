import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { reducer as themeReducer } from './slices/themeReducer';

const reducer = combineReducers({
  theme: themeReducer
})

export const store = configureStore({
  reducer,
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsAPI.middleware, channelsAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>