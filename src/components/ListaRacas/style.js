import styled from 'styled-components';

const ListaRacas = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.primary.main.rosa};
  border: 2px solid ${({ theme }) => theme.colors.primary.main.rosaClaro};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.primary.main.branco};
  cursor: pointer;
  flex-grow: 1;
  margin: 10px;
  padding: 15px;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main.rosaClaro};
    color: ${({ theme }) => theme.colors.primary.main.rosa};
  }
`;

export { Item, ListaRacas };
