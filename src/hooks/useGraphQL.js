import { useState, useEffect } from "react";
import { executarQuery } from "../api/graphql";

/**
 * Hook customizado que executa uma query GraphQL
 * e devolve { dados, carregando, erro }.
 */
export function useGraphQL(query) {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let ativo = true;

    async function buscar() {
      try {
        setCarregando(true);
        setErro(null);
        const data = await executarQuery(query);
        if (ativo) setDados(data);
      } catch (e) {
        if (ativo) setErro(e.message);
      } finally {
        if (ativo) setCarregando(false);
      }
    }

    buscar();

    return () => {
      ativo = false;
    };
  }, [query]);

  return { dados, carregando, erro };
}