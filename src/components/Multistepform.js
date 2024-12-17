import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep, updateFormData } from "../store/formSlice";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import CustomButton from "./button";


function MultiStepForm() {
  const formData = useSelector((state) => state.form.formData);
  const currentStep = useSelector((state) => state.form.currentStep);
  const dispatch = useDispatch();
  console.log("currentstep", currentStep);
  const handleUpdateFormData = (newData) => {
    dispatch(updateFormData(newData));
  };
  
 const submitForm=(console.log({formData}))

  const handlePrevStep = () => {
    dispatch(prevStep());
  };
  const HandleNextStep = () => {
    dispatch(nextStep());
  };
  const progressPercentage = (currentStep / 3) * 100;

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
          nextStep={() => dispatch(nextStep())}
        />
      )}
      {currentStep === 2 && (
        <Step2
          formData={formData}
          setFormData={handleUpdateFormData}
          nextStep={() => dispatch(nextStep())}
        ></Step2>
      )}
      {currentStep === 3 && (
        <Step3
          formData={formData}
          setFormData={handleUpdateFormData}
          prevStep={() => dispatch(prevStep())}
          submitForm={() => {
            console.log("form submitted :", formData);
            alert("Form submitted succesfully");
          }}
        ></Step3>
      )}
      {currentStep !== 1 && (
        <CustomButton bname={"Back"} onClick={handlePrevStep}></CustomButton>
      )}
      {currentStep !== 3 && (
        <CustomButton bname={"Next"} onClick={HandleNextStep}></CustomButton>
      )}
      {currentStep === 3 && <CustomButton bname={"Submit"} onClick={submitForm}></CustomButton>}
    </div>
  );
}

export default MultiStepForm;
