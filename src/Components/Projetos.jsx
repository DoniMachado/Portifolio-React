import "./Projetos.css";
import Projeto from "./Projeto";
const arr = [
  {
    title: "Estudo-CSharp-EFCore",
    description: "Estudos de CSharp, WebApi, EFCore, CQRS e Repositories",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    url: "https://github.com/DoniMachado/Estudo-CSharp-EFCore",
  },
  {
    title: "Design-Patterns-CSharp",
    description: "Design Patterns com C#",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    url: "https://github.com/DoniMachado/Design-Patterns-CSharp",
  },
  {
    title: "Components-JS",
    description: "Estudo JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    url: "https://github.com/DoniMachado/Components-JS",
  },
  {
    title: "flutter-lista-de-filmes",
    description:
      "Esse é um projeto para o desafio mobile - Tokenlab 2021/2022.\n\nProjeto feito em flutter, que consiste em uma lista de filmes obtidas dinâmicamente através de requisições HTTP para uma api.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    url: "https://github.com/DoniMachado/flutter-lista-de-filmes",
  },
  {
    title: "Estudos-Python",
    description:
      "Estudos de Python feitos junto com o curso de Python Completo: Zero ao Avançado do instrutor Vinicius Pozzobon Borin",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    url: "https://github.com/DoniMachado/Estudos-Python",
  },
  {
    title: "Estudo-HTML",
    description:
      "Estudo de HTML para a matéria de Html5 e CSS do 1º semestra de engenharia de software na infnet 2024",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    url: "https://github.com/DoniMachado/Estudo-HTML",
  },
];

export default function Projetos() {
  return (
    <div id="area-projetos">
      <h2>Projetos</h2>
      <div id="area-projetos-list">
        {arr.map((item, index) => (
          <Projeto
            key={index}
            title={item.title}
            description={item.description}
            img={item.img}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}
