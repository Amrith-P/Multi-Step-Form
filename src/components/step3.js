import { useState } from "react";
import Input from "./input";
function Step3({ formData, setFormData }) {
  const [image, setImage] = useState("");
  const handleFileChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setFormData({ image: e.target.files[0] });
  };

  return (
    <div>
      <h2>Step 3: Upload Image</h2>
      <label>Profile Picture:</label>
      <Input type={"file"} accept="image/*" onChange={handleFileChange} />
      {image && (
        <img
          src={image}
          alt="Selected Preview"
          style={{ width: "30px", height: "auto", border: "1px solid #ccc" }}
        />
      )}
    </div>
  );
}

export default Step3;
