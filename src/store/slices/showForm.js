import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

const showFormSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    show(state) {
      state = true;
    },
  },
});

export const { show } = showFormSlice.actions;
export default showFormSlice.reducer;
