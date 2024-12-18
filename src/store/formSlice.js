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
      errors: {
          name:'',
          email:'',
          gender:'',
          dob:'',
          image:''
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
      updateErrors: (state,action)=>{
        state.errors = {...state.errors,...action.payload};
      },
      clearErrors:(state)=>{
        state.errors={
          name:"",
          email:"",
          gender:"",
          dob:"",
          image:"",
        }
      },
      clearFormData:(state)=>{
        state.currentStep=1;
        state.formData={
          name:"",
          email:"",
          gender:"",
          dob:"",
          image:"",
        }
      }
  },
});

export const { nextStep, prevStep, updateFormData,updateErrors,clearErrors,clearFormData } = formSlice.actions;
export default formSlice.reducer;
