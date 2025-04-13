import { configureStore } from "@reduxjs/toolkit";
import groupSelectReducer from "../atoms/GroupButton/reducer/groupSelectSlice.ts";
import dataReducer from "./dataSlice.ts"
import nodeReducer from "../molecules/Node/reducer/nodeSlice.ts";

const store = configureStore({
    reducer: {
        groupSelect: groupSelectReducer,
        data: dataReducer,
        nodeSelect: nodeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export default store;
