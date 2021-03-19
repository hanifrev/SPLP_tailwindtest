const Button = ({ value, className }) => (
  <button className={`${className}`} type="submit">
    {value}
  </button>
);

export default Button;
