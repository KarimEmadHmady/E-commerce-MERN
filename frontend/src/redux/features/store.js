import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../api/apiSlice";

const store = configureStore ({
    reducer: {
        [apiSlice.reducerPath]:apiSlice.reducer , 
    } , 
    middleware: (getDefaultMiddlewear) => getDefaultMiddlewear().concat(apiSlice.middleware) ,
    devTools: true,
})

setupListeners(store.dispatch)

export default store ;