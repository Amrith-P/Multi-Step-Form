import Input from "./input";
import CustomButton from "./button";

function Step1(){

    return (
        <div>
            <h2>Step 1: Personal Details</h2>
            <label>Name:</label>
            <Input
                type={"text"}
                placeholder={"Name"}
                
            />
            <label>Email:</label>
            <Input
                type={"email"}
                placeholder={"Email"}
                
            />
            <CustomButtonutton>{"Next"}</CustomButtonutton>
        </div>
    );
};
export default Step1;