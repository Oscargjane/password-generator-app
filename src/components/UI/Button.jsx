import { StyledButton } from '../styles/Button.styled';

function Button({ type = 'button', isDisabled, children }) {
  return (
    <StyledButton type={type} disabled={isDisabled}>
      {children}
    </StyledButton>
  );
}

export default Button;
