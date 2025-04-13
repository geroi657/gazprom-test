import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const groupSelectSlice = createSlice({
    name: "groupSelect",
    initialState: { value: 1 },
    reducers: {
        changeGroup: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        }
    }
})

export const {changeGroup} = groupSelectSlice.actions;

export default groupSelectSlice.reducer;