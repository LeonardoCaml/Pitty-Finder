import "./custombutton.css";

export default function CustomButton({ tittle, onClick }) {
  return (
    <div className="button-wrapper">
      <button onClick={onClick} className="button-content">
        <p>{tittle}</p>
      </button>
    </div>
  );
}
