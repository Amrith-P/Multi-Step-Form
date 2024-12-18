import { useState } from "react";
import Input from "./input";
function Step3({ formData, setFormData, errors }) {
  const [image, setImage] = useState("");
  const handleFileChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setFormData({ image: e.target.files[0] });
  };

  return (
    <div>
      <h2>Step 3: Upload Image</h2>
      <Input
        type={"file"}
        accept="image/*"
        onChange={handleFileChange}
        name={"Image"}
        errors={errors}
        label={"Select an image file"}
      />
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
