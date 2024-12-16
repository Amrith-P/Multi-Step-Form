import Input from "./input";
import CustomButton from "./button";
function Step2(){
    return (
        <div>
            <h2>Step 2: Additional Details</h2>
            <label>Gender:</label>
            <select>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>

            <label>Date of Birth:</label>
            <Input
                type={"date"}
            />
            <CustomButtonbutton>{"Back"}</CustomButtonbutton>
            <CustomButtonbutton>{"Next"}</CustomButtonbutton>
        </div>
    );
};

export default Step2;