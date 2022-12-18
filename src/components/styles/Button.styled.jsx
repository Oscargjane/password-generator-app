import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 2.4rem;
  // add spacing between btn and controls in another way to keep the btn component as reusable as possible
  margin-top: 0.8rem;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  border: 2px solid transparent;
  border-radius: 0.3rem;
  background: ${({ theme }) => theme.colors.primary_500};
  background: linear-gradient(
    90deg,
    rgba(234, 187, 78, 1) 0%,
    rgba(240, 206, 128, 1) 100%
  );
  cursor: pointer;
  transition: all 500ms;

  & > svg {
    padding-left: 1rem;
    transition: transform 500ms;
  }

  &:hover,
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary_500};
    color: ${({ theme }) => theme.colors.primary_500};
    background: none;
  }

  &:focus {
    outline-color: transparent;
    outline-style: solid;
  }

  &:active > svg {
    transform: translateX(1rem);
  }
`;
