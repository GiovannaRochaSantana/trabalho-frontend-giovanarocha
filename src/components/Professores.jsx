import { useGraphQL } from "../hooks/useGraphQL";
import { QUERY_PROFESSORES } from "../api/graphql";

export default function Professores() {
  const { dados, carregando, erro } = useGraphQL(QUERY_PROFESSORES);

  if (carregando) return <p>⏳ Carregando professores...</p>;
  if (erro) return <p style={{ color: "red" }}>❌ Erro: {erro}</p>;

  const professores = dados?.teachers ?? [];

  return (
    <section>
      <h2>🧑‍🏫 Professores ({professores.length})</h2>
      <ul>
        {professores.map((prof) => (
          <li key={prof.id} style={{ marginBottom: "12px" }}>
            <strong>{prof.name}</strong>
            <br />
            📖 Leciona:{" "}
            {prof.courses && prof.courses.length > 0
              ? prof.courses.map((c) => c.name).join(", ")
              : "Nenhum curso atribuído"}
          </li>
        ))}
      </ul>
    </section>
  );
}