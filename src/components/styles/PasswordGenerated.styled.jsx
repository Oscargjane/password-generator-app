import styled from 'styled-components';

const StyledPasswordGenerated = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray_400};

  & > svg {
    color: ${({ theme }) => theme.colors.primary_500};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.gray_100};
    }
  }
`;

export default StyledPasswordGenerated;
