function Input({ name, value, onChange, label, placeholder, type = "text",accept,...rest }) {
  return (
    <div>
      <div>
        <input
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
        <label for={name}>{label}</label>
      </div>
    </div>
  );
}
export default Input;
