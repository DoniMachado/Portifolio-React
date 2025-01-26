import "./SobreMim.css";

import avatar from "../images/avatar.jfif";

export default function SobreMim() {
  return (
    <div id="area-sobre-mim">
      <div id="sobre-min-preinfo-area">
        <img
          id="sobre-min-preinfo-area-img"
          src={avatar}
          alt="Avatar"
          title="Avatar"
        />
        <div id="sobre-min-preinfo-area-text">
          <h3>Olá, sou Luiz F. D. Machado</h3>
          <p>Sou um aluno de EDS do Infnet</p>
        </div>
      </div>      
      <div id="area-sobre-min-text">
        <h2>Sobre Mim</h2>
        <p>Sou um desenvolvedor back-end júnior, a procura de novos conhecimentos e novos desafios.</p>
        <p>Possuo formação em ensino técnico em Análise e Desenvolvimento de Sistemas.</p>
        <p>E possuo 2 anos de experiência como desenvolvedor back-end .Net C#.</p>
      </div>
    </div>
  );
}
