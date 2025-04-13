import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const nodeSelectSlice = createSlice({
    name: "nodeSelect",
    initialState: { value: 1 },
    reducers: {
        changeNode: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        }
    }
})

export const {changeNode} = nodeSelectSlice.actions;

export default nodeSelectSlice.reducer;