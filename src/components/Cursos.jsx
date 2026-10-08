import { useGraphQL } from "../hooks/useGraphQL";
import { QUERY_CURSOS } from "../api/graphql";

export default function Cursos() {
  const { dados, carregando, erro } = useGraphQL(QUERY_CURSOS);

  if (carregando) return <p>⏳ Carregando cursos...</p>;
  if (erro) return <p style={{ color: "red" }}>❌ Erro: {erro}</p>;

  const cursos = dados?.courses ?? [];

  return (
    <section>
      <h2>📚 Cursos ({cursos.length})</h2>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id} style={{ marginBottom: "12px" }}>
            <strong>{curso.name}</strong>
            <br />
            🎯 Créditos: {curso.credits}
            <br />
            👥 Alunos:{" "}
            {curso.students && curso.students.length > 0
              ? curso.students.map((a) => a.name).join(", ")
              : "Nenhum aluno matriculado"}
          </li>
        ))}
      </ul>
    </section>
  );
}