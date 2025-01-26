import "./Projeto.css";

export default function Projeto({ title, description, img, url }) {
  return (
    <div id="card-projeto">
      <a href={url} target="_blank">
        <img src={img} alt={title} title={title} />
      </a>
      <h2>
        <a href={url} target="_blank">
          {title}
        </a>
      </h2>
      <p>{description}</p>
    </div>
  );
}
