const Input = (props) => {
  const { type, id, ariaLabel, placeholder, onChange, name, value } = props;
  return (
    <input
      type={type}
      name={name}
      className="form-control"
      id={id}
      aria-label={ariaLabel}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      value={value}
    />
  );
};
export default Input;
