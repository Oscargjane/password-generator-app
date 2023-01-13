import styled from 'styled-components';

export const StyledPasswordStrengthRatingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray_800};

  p {
    color: ${({ theme }) => theme.colors.gray_400};
  }

  span {
    color: inherit;
    margin-right: 0.8rem;
  }
`;

export const StyledStrengthRatingBox = styled.div`
  display: flex;
  align-items: center;

  div:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const StyledStrengthRating = styled.div`
  width: 0.8rem;
  height: 2rem;
  border: 2px solid
    ${({ theme, accent }) =>
      accent === 'transparent' ? theme.colors.gray_100 : accent};
  background-color: ${props => props.accent};
  transition: all 250ms ease-out;
`;
