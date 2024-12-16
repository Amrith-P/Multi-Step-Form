import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: { name: "", email: "", gender: "", dob: "", image: null },
  reducers: {
    // formValue: (state, action) => {
    //     state.value += action.payload;
    // },
  },
});

export const {} = formSlice.actions;
export default formSlice.reducer;
