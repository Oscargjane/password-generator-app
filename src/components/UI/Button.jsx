import { StyledButton } from '../styles/Button.styled';

function Button({
  type = 'button',
  variant,
  isDisabled,
  children,
  onCopyToClipboard,
}) {
  return (
    <StyledButton
      name={variant}
      type={type}
      disabled={isDisabled}
      onClick={onCopyToClipboard}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
