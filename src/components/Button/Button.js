import "./Button.scss";

const Button = ({ handle, name, error }) => {
  console.log('error?', error);
  return (
    <div className="button">
      <button
        className={`${error&&error.name === null&&error.number === null&&error.email === null ? "active" : "disabled"}
        `}
        onClick={handle}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
