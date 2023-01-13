import {
  StyledPasswordStrengthRatingContainer,
  StyledStrengthRatingBox,
  StyledStrengthRating,
} from '../styles/PasswordStrengthRating.styled';

function PasswordStrengthRating({ onStrengthRatingChange }) {
  const strengthRating = onStrengthRatingChange();

  return (
    <StyledPasswordStrengthRatingContainer>
      <p>Strength</p>
      <StyledStrengthRatingBox>
        <span>{strengthRating}</span>
        <StyledStrengthRating
          accent={
            strengthRating === 'TOO WEAK'
              ? '#EB504D'
              : strengthRating === 'WEAK'
              ? '#EB864D'
              : strengthRating === 'MEDIUM'
              ? '#E4EB4D'
              : strengthRating === 'STRONG'
              ? '#93EB4D'
              : 'transparent'
          }
        />
        <StyledStrengthRating
          accent={
            strengthRating === 'WEAK'
              ? '#EB864D'
              : strengthRating === 'MEDIUM'
              ? '#E4EB4D'
              : strengthRating === 'STRONG'
              ? '#93EB4D'
              : 'transparent'
          }
        />
        <StyledStrengthRating
          accent={
            strengthRating === 'MEDIUM'
              ? '#E4EB4D'
              : strengthRating === 'STRONG'
              ? '#93EB4D'
              : 'transparent'
          }
        />
        <StyledStrengthRating
          accent={strengthRating === 'STRONG' ? '#93EB4D' : 'transparent'}
        />
      </StyledStrengthRatingBox>
    </StyledPasswordStrengthRatingContainer>
  );
}

export default PasswordStrengthRating;
