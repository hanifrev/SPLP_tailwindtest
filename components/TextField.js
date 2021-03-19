const TextField = ({ placeholder, className, type }) => {
  return (
    <input className={`${className}`} type={type} placeholder={placeholder} />
  );
};

export default TextField;
