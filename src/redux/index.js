import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { surahsApi } from "./surahApiSlice";

export const store = configureStore({
  reducer: {
    [surahsApi.reducerPath]: surahsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(surahsApi.middleware),
});

setupListeners(store.dispatch);
