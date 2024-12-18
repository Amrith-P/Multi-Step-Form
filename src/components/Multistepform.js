import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  prevStep,
  updateFormData,
  updateErrors,
  clearFormData,
} from "../store/formSlice";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import CustomButton from "./button";
import { useEffect } from "react";

function MultiStepForm() {
  const formData = useSelector((state) => state.form.formData);
  const currentStep = useSelector((state) => state.form.currentStep);
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.form.errors);
  const validateFields = () => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      } else {
        newErrors.name = "";
      }
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Valid email is required";
      } else {
        newErrors.email = "";
      }
    }
    if (currentStep === 2) {
      if (!formData.gender.trim()) {
        newErrors.gender = "Gender is required";
      } else {
        newErrors.gender = "";
      }
      if (!formData.dob.trim()) {
        newErrors.dob = "Date of birth is required";
      } else {
        newErrors.dob = "";
      }
    }
    if (currentStep === 3) {
      if (!formData.image) {
        newErrors.image = "Image upload required";
      } else {
        newErrors.image = "";
      }
    }

    dispatch(updateErrors(newErrors));
    const isError = Object.values(newErrors).filter((a) => a && a);
    return isError.length === 0;
  };
  const handleUpdateFormData = (newData) => {
    dispatch(updateFormData(newData));
  };
  const HandleNextStep = () => {
    if (validateFields()) {
      dispatch(nextStep());
    }
  };

  const handlePrevStep = () => {
    dispatch(prevStep());
  };
  const submitForm = () => {
    if (validateFields()) {
      console.log({ formData });
      alert(
        "Form submitted successfully:\n" + JSON.stringify(formData, null, 2)
      );
      dispatch(clearFormData());
    }
  };

  const progressPercentage = (currentStep / 3) * 100;

  useEffect(() => {
    if (Object.values(formData).filter((a) => a && a).length >= 1) {
      validateFields();
    }
  }, [formData]);

  return (
    <div className="form-container">
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      {currentStep === 1 && (
        <Step1
          formData={formData}
          setFormData={handleUpdateFormData}
          errors={errors}
        />
      )}
      {currentStep === 2 && (
        <Step2
          formData={formData}
          setFormData={handleUpdateFormData}
          errors={errors}
        ></Step2>
      )}
      {currentStep === 3 && (
        <Step3
          formData={formData}
          setFormData={handleUpdateFormData}
          errors={errors}
        ></Step3>
      )}
      {currentStep !== 1 && (
        <CustomButton bname={"Back"} onClick={handlePrevStep}></CustomButton>
      )}
      {currentStep !== 3 && (
        <CustomButton bname={"Next"} onClick={HandleNextStep}></CustomButton>
      )}
      {currentStep === 3 && (
        <CustomButton bname={"Submit"} onClick={submitForm}></CustomButton>
      )}
    </div>
  );
}

export default MultiStepForm;
