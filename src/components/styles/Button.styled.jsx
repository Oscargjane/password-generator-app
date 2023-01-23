import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  // 1. Submit Variant button
  ${props =>
    props.name === 'submitBtn' &&
    css`
      // TODO: add spacing between btn and controls in another way to keep the btn component as reusable as possible
      margin-top: 0.8rem;
      padding: 1.4rem 2.4rem;
      font-size: 1.8rem;
      font-weight: 700;
      text-transform: uppercase;
      background: ${({ theme }) => theme.colors.primary_500};
      border: 2px solid transparent;
      border-radius: 0.3rem;
      background: linear-gradient(
        90deg,
        rgba(234, 187, 78, 1) 0%,
        rgba(240, 206, 128, 1) 100%
      );

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

      &:disabled {
        color: ${({ theme }) => theme.colors.gray_700};
        background-color: rgba(234, 187, 78, 0.2);
        background: linear-gradient(
          90deg,
          rgba(234, 187, 78, 0.2) 100%,
          rgba(240, 206, 128, 0.2) 100%
        );
        cursor: not-allowed;

        &:active > svg {
          transform: translateX(0);
        }

        &:hover {
          border: 2px solid transparent;
        }
      }
    `}

  // 2. Clipboard Button Variant
  ${props =>
    props.name === 'clipboardBtn' &&
    css`
      margin-left: 1.2rem;
      border: none;
      background-color: transparent;
      color: inherit;

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.gray_200};
      }
    `}
`;

export const StyledClipboardBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary_500};

  & > span {
    display: ${({ isCopied }) => (isCopied ? 'inline-block' : 'none')};
    font-size: 1.8rem;
  }
`;
