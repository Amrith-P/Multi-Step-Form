import { useSelector } from "react-redux";
import Input from "./input";

function MultiStepForm() {
  const formData = useSelector((state) => state.form);
  console.log( {formData});

  return (
    <div>
      <form>
      </form>
    </div>
  );
}

export default MultiStepForm;
