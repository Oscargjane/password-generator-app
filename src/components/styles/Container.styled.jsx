import styled from 'styled-components';

export const StyledContainer = styled.main`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2.4rem;
  margin: 0px auto;
  padding: 3.2rem 1.6rem 4.8rem 1.6rem;

  @media only screen and (max-width: ${({ theme }) => theme.bp.medium}) {
    width: 70%;
  }

  @media only screen and (max-width: ${({ theme }) => theme.bp.small}) {
    width: 100%;
  }
`;
