import { useEffect, useState } from 'react';
import { buscaSobreRacas, buscaImagemPorRaca, buscaTodasRacas } from '../api';

const useRaces = () => {
  const [racas, setRacas] = useState([]);
  const [racaSelecionada, setRacaSelecionada] = useState({});
  const [status, setStatus] = useState(
    'Você ainda não selecionou nenhum cachorro :('
  );

  const carregaListaRacas = (sobreRacas) => {
    buscaTodasRacas().then((racas) => {
      const listaRacasMostradas = sobreRacas.filter((sobre) =>
        racas.includes(sobre.name.toLowerCase())
      );
      setRacas(listaRacasMostradas);
    });
    
  };
  
  const carregaInformacoesIniciais = () => {
    buscaSobreRacas()
      .then((informacoes) => {
        carregaListaRacas(informacoes);
      })
      .catch((erro) =>
        setStatus(
          'Oops, algo deu errado no carregamento da página. Pode tentar novamente?'
        )
      );
  };

  useEffect(() => {
    carregaInformacoesIniciais();
  }, []);

  const selecionaRaca = (raca) => {
    const infoSelecionada = racas.filter((infoRaca) => infoRaca.name === raca);

    buscaImagemPorRaca(raca)
      .then((imagem) => {
        setRacaSelecionada({
          ...racaSelecionada,
          imagem,
          ...infoSelecionada[0],
        });
        setStatus(
          'A imagem sempre será diferente, pode clicar quantas vezes quiser!'
        );
      })

      .catch((erro) => {
        const eh404 = erro.response.status === 404;
        const mensagem = eh404
          ? 'Não encontramos essa raça :('
          : 'Oops, algo deu errado. Pode tentar novamente?';

        setStatus(mensagem);
      });
  };

  return {
    racas,
    racaSelecionada,
    status,
    carregaInformacoesIniciais,
    buscaSobreRacas,
    carregaListaRacas,
    buscaTodasRacas,
    selecionaRaca,
    buscaImagemPorRaca,
  };
};

export default useRaces;
