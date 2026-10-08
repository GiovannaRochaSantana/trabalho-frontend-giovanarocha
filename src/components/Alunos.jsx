import { useGraphQL } from "../hooks/useGraphQL";
import { QUERY_ALUNOS } from "../api/graphql";

export default function Alunos() {
  const { dados, carregando, erro } = useGraphQL(QUERY_ALUNOS);

  if (carregando) return <p>⏳ Carregando alunos...</p>;
  if (erro) return <p style={{ color: "red" }}>❌ Erro: {erro}</p>;

  const alunos = dados?.students ?? [];

  return (
    <section>
      <h2>👨‍🎓 Alunos ({alunos.length})</h2>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id} style={{ marginBottom: "12px" }}>
            <strong>{aluno.name}</strong>
            <br />
            📧 {aluno.email}
            <br />
            📚 Curso: {aluno.course?.name ?? "Sem curso"}
          </li>
        ))}
      </ul>
    </section>
  );
}