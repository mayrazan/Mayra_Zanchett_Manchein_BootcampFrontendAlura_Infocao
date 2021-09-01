import React from 'react';
import { useContextRaces } from '../../context/Provider';
import * as S from './style';

const ListaRacas = () => {
  const { racas, selecionaRaca } = useContextRaces();
  return (
    <S.ListaRacas>
      {racas.map((raca) => (
        <S.Item key={raca.id} onClick={() => selecionaRaca(raca.name)}>
          {raca.name}
        </S.Item>
      ))}
    </S.ListaRacas>
  );
};

export default ListaRacas;
