import Slider from '../UI/Slider';
import Checkbox from '../UI/Checkbox';
import PasswordStrengthRating from './PasswordStrengthRating';
import { StyledCard } from '../styles/Card.styled';
import { StyledPasswordControls } from '../styles/PasswordControls.styled';
import { StyledCheckboxContainer } from '../styles/Checkbox.styled';

function PasswordControls() {
  return (
    <StyledCard>
      <StyledPasswordControls>
        <Slider
          label="Character Length"
          initial="0"
          max="16"
          id="password-length-slider"
        />
        <StyledCheckboxContainer>
          <Checkbox label="Include Uppercase Letters" />
          <Checkbox label="Include Lowercase Letters" />
          <Checkbox label="Include Numbers" />
          <Checkbox label="Include Symbols" />
        </StyledCheckboxContainer>
        <PasswordStrengthRating />
      </StyledPasswordControls>
    </StyledCard>
  );
}

export default PasswordControls;
