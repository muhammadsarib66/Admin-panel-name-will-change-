/* eslint-disable react/prop-types */
const InputField = ({ label, type, onchange, value, placeholder, style }) => {
  return (
    <div>
      <label htmlFor="name" className="capitalize text-secondary ">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onchange}
        name={label}
        id="name"
        placeholder={placeholder}
        className={`${style} text-primary w-full   outline-none  rounded-md md:p-3 p-2 `}
        required
      />
    </div>
  );
};

export default InputField;
