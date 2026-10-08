// Endereço oficial da API GraphQL
export const GRAPHQL_ENDPOINT = "https://testing-graphql.onrender.com/graphql";

/**
 * Função genérica que executa QUALQUER query GraphQL.
 * Toda requisição é um POST com JSON no corpo: { query: "..." }
 */
export async function executarQuery(query) {
  const resposta = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!resposta.ok) {
    throw new Error(`Erro HTTP: ${resposta.status} - ${resposta.statusText}`);
  }

  const resultado = await resposta.json();

  // GraphQL pode retornar dados E erros ao mesmo tempo
  if (resultado.errors) {
    throw new Error(
      resultado.errors.map((e) => e.message).join(" | ")
    );
  }

  return resultado.data;
}

// ---------- QUERIES ----------

export const QUERY_ALUNOS = `
  query {
    students {
      id
      name
      email
      course {
        id
        name
        credits
      }
    }
  }
`;

export const QUERY_CURSOS = `
  query {
    courses {
      id
      name
      credits
      students {
        id
        name
      }
    }
  }
`;

export const QUERY_PROFESSORES = `
  query {
    teachers {
      id
      name
      courses {
        id
        name
      }
    }
  }
`;