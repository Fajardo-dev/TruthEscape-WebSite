import "./Button.css";

function Button({ title, href }) {
  return (
    <button className="default-btn">
      <h3>{title}</h3>
    </button>
  );
}

export default Button;
