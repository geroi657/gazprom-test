import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { actionType } from "./types.ts";

export const dataSlice = createSlice({
    name: "data",
    initialState: { value: null as actionType | null},
    reducers: {
        changeData: (state, action: PayloadAction<actionType>) => {
            state.value = action.payload;
        }
    }
})

export const { changeData} = dataSlice.actions;

export default dataSlice.reducer;