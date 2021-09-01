import React from 'react';
import RacaSelecionada from '../RacaSelecionada';
import RacaNaoSelecionada from '../RacaNaoSelecionada';
import { useContextRaces } from '../../context/Provider';

const Raca = () => {
  const { racaSelecionada } = useContextRaces();
  const racaFoiSelecionada = Boolean(racaSelecionada.name);

  return racaFoiSelecionada ? (
    <RacaSelecionada {...racaSelecionada} />
  ) : (
    <RacaNaoSelecionada />
  );
};

export default Raca;
