import './card.css'

export default function Card({ image, title, description, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img className="card-image" src={image} />
      <div>
        <h1 className="card-name">{title}</h1>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}
