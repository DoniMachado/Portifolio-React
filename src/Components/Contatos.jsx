import "./Contatos.css";

export default function Contatos() {
  return (
    <footer id="area-contatos">
      <h2>Contatos</h2>
      <div id="area-contatos-list">
        <div>
          <p>(+55) 5555-9999</p>
          <p> email@email.com </p>
        </div>
        <a
          href="linkedin.com/in/luiz-felipe-donizeti-machado-40667121a"
          target="_blank"
        >
          <i class="devicon-linkedin-plain colored"> </i>
        </a>

        <a href="https://github.com/DoniMachado" target="_blank">
          <i class="devicon-github-original colored"></i>
        </a>
      </div>
    </footer>
  );
}
