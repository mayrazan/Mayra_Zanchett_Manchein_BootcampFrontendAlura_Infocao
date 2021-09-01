import styled from 'styled-components';

const RacaSelecionada = styled.div`
  width: 300px;
  margin: 0 auto;
  border: 4px solid ${({ theme }) => theme.colors.primary.main.rosa};
  border-radius: 5px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary.main.rosaClaro};
  display: flex;
  flex-direction: column;

  &.invisivel {
    display: none;
  }
`;

const Nome = styled.h2`
  margin: 0;
  background-color: ${({ theme }) => theme.colors.primary.main.rosa};
  color: ${({ theme }) => theme.colors.primary.main.branco};
  padding-top: 10px;
  font-size: 18px;
  font-weight: normal;
`;

const Info = styled.p`
  background-color: ${({ theme }) => theme.colors.primary.main.rosa};
  margin: 0;
  color: ${({ theme }) => theme.colors.primary.main.branco};
  padding: 5px;
  font-size: 14px;
`;

const Descricao = styled.span`
  font-weight: bold;
`;

const RacaSelecionadaImg = styled.img`
  max-width: 100%;
  /* min-width: 300px; */
  max-height: 300px;
  object-fit: cover;
  flex-grow: 1;
`;

export { RacaSelecionadaImg, RacaSelecionada, Nome, Descricao, Info };
