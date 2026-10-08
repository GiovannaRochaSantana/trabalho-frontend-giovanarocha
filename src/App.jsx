import { useState } from "react";
import Alunos from "./components/Alunos";
import Cursos from "./components/Cursos";
import Professores from "./components/Professores";
import "./App.css";

export default function App() {
  // Aba ativa: "alunos" | "cursos" | "professores"
  const [aba, setAba] = useState("alunos");

  return (
    <div className="container">
      <header>
        <h1>Consumo de API GraphQL</h1>
        <p>
          Trabalho de Desenvolvimento de Sistemas — 3ª série B — 2026
        </p>
      </header>

      <nav className="tabs">
        <button
          className={aba === "alunos" ? "ativo" : ""}
          onClick={() => setAba("alunos")}
        >
          Alunos
        </button>
        <button
          className={aba === "cursos" ? "ativo" : ""}
          onClick={() => setAba("cursos")}
        >
          Cursos
        </button>
        <button
          className={aba === "professores" ? "ativo" : ""}
          onClick={() => setAba("professores")}
        >
          Professores
        </button>
      </nav>

      <main>
        {aba === "alunos" && <Alunos />}
        {aba === "cursos" && <Cursos />}
        {aba === "professores" && <Professores />}
      </main>
    </div>
  );
}