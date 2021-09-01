import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import useRaces from './useContextRaces';

const Context = createContext({});

function RacesProvider({ children }) {
  const {
    racas,
    racaSelecionada,
    status,
    carregaInformacoesIniciais,
    buscaSobreRacas,
    carregaListaRacas,
    buscaTodasRacas,
    selecionaRaca,
    buscaImagemPorRaca,
  } = useRaces();

  return (
    <Context.Provider
      value={{
        racas,
        racaSelecionada,
        status,
        carregaInformacoesIniciais,
        buscaSobreRacas,
        carregaListaRacas,
        buscaTodasRacas,
        selecionaRaca,
        buscaImagemPorRaca,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useContextRaces = () => useContext(Context);
export { RacesProvider };

RacesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
