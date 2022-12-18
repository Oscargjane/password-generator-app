import styled from 'styled-components';

export const StyledCheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.4rem;
`;

export const StyledCheckboxContent = styled.label`
  font-size: 1.4rem;
  line-height: 1.1;
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  -webkit-appearance: none;
  appearance: none;
  display: grid;
  place-content: center;
  /* Not removed via appearance */
  margin: 0;
  font: inherit;
  width: 1.6rem;
  height: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_50};
  /* For iOS < 15 to remove gradient background */
  background-color: transparent;
  cursor: pointer;
  transition: all 350ms;

  ::before {
    content: '';
    width: 1rem;
    height: 1rem;
    box-shadow: inset 1em 1em ${({ theme }) => theme.colors.gray_800};
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
  }

  :checked {
    background-color: ${({ theme }) => theme.colors.primary_500};
    border: 1px solid ${({ theme }) => theme.colors.primary_500};
  }

  :checked::before {
    transform: scale(1);
  }

  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary_500};
  }
`;
