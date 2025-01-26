import "./Habilidades.css";
const arr = [
  "devicon-csharp-line colored",
  "devicon-dotnetcore-plain colored",
  "devicon-microsoftsqlserver-plain-wordmark",
  "devicon-mongodb-plain-wordmark colored",
  "devicon-javascript-plain colored",
  "devicon-blazor-original colored",
];
export default function Habilidades() {
  return (
    <div id="area-habilidades">
      <h2>Habilidades</h2>
      <div id="area-habilidades-list">
        {arr.map((c, index) => (
          <i key={index} className={c}></i>
        ))}
      </div>
    </div>
  );
}
