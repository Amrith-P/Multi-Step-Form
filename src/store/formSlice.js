import { createSlice } from "@reduxjs/toolkit";
const formSlice = createSlice({
  name: 'form',
  initialState: {
      currentStep: 1,
      formData: {
          name: '',
          email: '',
          gender: '',
          dob: '',
          image: null,
      },
  },
  reducers: {
      nextStep: (state) => {
          state.currentStep += 1; 
      },
      prevStep: (state) => {
          state.currentStep -= 1; 
      },
      updateFormData: (state, action) => {
          state.formData = { ...state.formData, ...action.payload };
      },
  },
});

export const { nextStep, prevStep, updateFormData } = formSlice.actions;
export default formSlice.reducer;
