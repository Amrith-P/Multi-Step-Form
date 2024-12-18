function Input({
  name,
  value,
  onChange,
  label,
  placeholder,
  type = "text",
  accept,
  errors,
  ...rest
}) {
  console.log({ errors }, "i");
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
        {...rest}
      />
      {errors && errors[name] && (
        <p className="error-message">{errors[name]}</p>
      )}
    </div>
  );
}
export default Input;
