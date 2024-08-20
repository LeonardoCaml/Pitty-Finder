import foto from "../../constants/photos.js";

export default function Card({ image, title, description }) {
  return (
    <div className="card">
      <img className="card-image" src={image} />
      <h1 className="card-name">{title}</h1>
      <p className="card-description">{description}</p>
    </div>
  );
}
