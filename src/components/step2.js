import Input from "./input";

function Step2({ formData, setFormData }) {
  return (
    <div>
      <h2>Step 2: Additional Details</h2>
      <div className="gender-selector-container">
        <label htmlFor="gender">Gender</label>

        <select
          className="gender-selector"
          value={FormData.gender}
          onChange={(e) => setFormData({ gender: e.target.value })}
        >
          <option value="" disabled selected>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="date-picker-container">
        <label>Date of Birth</label>
        <Input 
          type={"date"}
          value={formData.dob}
          onChange={(e) => setFormData({ dob: e.target.value })}
        />
      </div>
    </div>
  );
}

export default Step2;
