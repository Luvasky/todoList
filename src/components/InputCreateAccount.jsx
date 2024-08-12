import "../styles/InputCreateAccount/Styles.css";
const InputCreateAccount = ({ placeholder, name, onChange, type, value }) => {
  return (
    <input
      className="i-c-a-i"
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    ></input>
  );
};

export default InputCreateAccount;
