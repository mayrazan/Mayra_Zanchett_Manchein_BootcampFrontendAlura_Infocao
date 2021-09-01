import styled from 'styled-components';

const Cabecalho = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.main.rosa};
`;
const Titulo = styled.h1`
  /* margin-bottom: 0; */
  text-transform: uppercase;
  font-weight: bold;
`;
const Texto = styled.p`
  margin: 0;
`;

export { Cabecalho, Texto, Titulo };
