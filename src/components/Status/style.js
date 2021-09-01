import styled from 'styled-components';

const Status = styled.p`
  background-color: ${({ theme }) => theme.colors.primary.main.branco};
  padding: 10px;
  display: inline-block;
  font-weight: bold;
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.primary.main.rosaClaro};
`;

export { Status };
