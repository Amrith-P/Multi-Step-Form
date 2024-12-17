import Input from "./input";

function Step1({ formData, setFormData }) {
  return (
    <div>
      <h2>Step 1: Personal Details</h2>

      <Input
        label={"Enter Name"}
        type={"text"}
        placeholder={"Name"}
        value={formData.name}
        onChange={(e) => setFormData({ name: e.target.value })}
      />

      <Input
        label={"Email"}
        type={"email"}
        placeholder={"Email"}
        value={formData.email}
        onChange={(e) => setFormData({ email: e.target.value })}
      />
    </div>
  );
  console.log();
}
export default Step1;
