import styled from 'styled-components';

export const StyledPasswordStrengthRatingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray_800};

  p {
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gray_400};
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
  border: 2px solid ${({ theme }) => theme.colors.gray_50};
`;
