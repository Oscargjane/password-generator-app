import {
  StyledPasswordStrengthRatingContainer,
  StyledStrengthRatingBox,
  StyledStrengthRating,
} from '../styles/PasswordStrengthRating.styled';

function PasswordStrengthRating() {
  return (
    <StyledPasswordStrengthRatingContainer>
      <p>Strength</p>
      <StyledStrengthRatingBox>
        <StyledStrengthRating />
        <StyledStrengthRating />
        <StyledStrengthRating />
        <StyledStrengthRating />
      </StyledStrengthRatingBox>
    </StyledPasswordStrengthRatingContainer>
  );
}

export default PasswordStrengthRating;
