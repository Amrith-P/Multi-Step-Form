import CustomButton from "./button";
function Step3() {
  return (
    <div>
      <h2>Step 3: Upload Image</h2>
      <label>Profile Picture:</label>
      <Input type={"file"} accept="image/*" />

      <CustomButtonbutton>{"Back"}</CustomButtonbutton>
      <CustomButtonbutton>{"Submit"}</CustomButtonbutton>
    </div>
  );
}

export default Step3;
