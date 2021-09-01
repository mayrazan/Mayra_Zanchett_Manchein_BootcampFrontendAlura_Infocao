import React from 'react';
import Raca from '../src/components/Raca';
import ListaRacas from '../src/components/ListaRacas';
import Cabecalho from '../src/components/Cabecalho';

export default function Home() {
  return (
    <div style={{ padding: '30px', margin: '0 auto' }}>
      <Cabecalho />
      <Raca />
      <ListaRacas />
    </div>
  );
}
