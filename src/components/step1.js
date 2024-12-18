import Input from "./input";

function Step1({ formData, setFormData, errors }) {
  return (
    <div>
      <h2>Step 1: Personal Details</h2>

      <Input
        label={"Enter Name"}
        type={"text"}
        placeholder={"Name"}
        name={"name"}
        value={formData.name}
        onChange={(e) => setFormData({ name: e.target.value })}
        errors={errors}
      />

      <Input
        label={"Enter email"}
        type={"email"}
        placeholder={"Email"}
        name={"email"}
        value={formData.email}
        onChange={(e) => setFormData({ email: e.target.value })}
        errors={errors}
      />
    </div>
  );
}
export default Step1;
