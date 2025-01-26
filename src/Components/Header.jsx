import "./Header.css";
import Avatar from "../images/avatar.jfif";
export default function Header() {
  return (
    <header id="area-header">
      <div id="area-header-img">
        <img src={Avatar} alt="Avatar" title="Avatar" />
      </div>
      <nav id="area-header-nav">
        <ul>
          <li>
            <a href="/">Sobre Mim</a>
          </li>
          <li>
            <a href="/skills">Habilidades</a>
          </li>
          <li>
            <a href="/projects">Projetos</a>
          </li>
          <li>
            <a href="/academics">Academico</a>
          </li>
          <li>
            <a href="/professional">Profissional</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
