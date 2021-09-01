import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';

const RacaSelecionada = (props) => (
  <S.RacaSelecionada>
    <S.Nome>{props.name}</S.Nome>
    <S.Info>
      <S.Descricao>Tempo de vida: </S.Descricao>
      {props.life_span}
    </S.Info>
    <S.RacaSelecionadaImg alt='Imagem de raca' src={props.imagem} />
  </S.RacaSelecionada>
);

export default RacaSelecionada;

RacaSelecionada.propTypes = {
  name: PropTypes.string.isRequired,
  life_span: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
};
