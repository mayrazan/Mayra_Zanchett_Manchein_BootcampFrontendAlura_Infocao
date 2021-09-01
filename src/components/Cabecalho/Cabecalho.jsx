import React from 'react';
import Status from '../Status';
import * as S from './style';
import { useContextRaces } from '../../context/Provider';

const Cabecalho = () => {
  const { status } = useContextRaces();
  return (
    <S.Cabecalho>
      <S.Titulo>Seja bem-vindo ao InfoCão</S.Titulo>

      <S.Texto>
        Clique em um nome e te daremos informações úteis sobre a raça e uma
        imagem bem bonita.
      </S.Texto>

      <Status status={status} />
    </S.Cabecalho>
  );
};

export default Cabecalho;
