function Input({ name, value, onChange, label, placeholder, type = "text",accept,...rest }) {

  return (
    <div className="input-wrap">
       <label for={name}>{label}</label>
        <input
        className="input-box"
          name={name}
          type={type}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder || label}
          accept={accept}
          required
          {...rest}
        />
       

      
    </div>
  );
}
export default Input;
