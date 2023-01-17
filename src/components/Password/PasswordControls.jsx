import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from '../UI/Slider';
import Checkbox from '../UI/Checkbox';
import Button from '../UI/Button';
import PasswordStrengthRating from './PasswordStrengthRating';
import { StyledCard } from '../styles/Card.styled';
import { StyledPasswordControls } from '../styles/PasswordControls.styled';
import { StyledCheckboxContainer } from '../styles/Checkbox.styled';

const PASSWORD_STRENGTHS = Object.freeze({
  TOO_WEAK: 'TOO WEAK',
  WEAK: 'WEAK',
  MEDIUM: 'MEDIUM',
  STRONG: 'STRONG',
});

function PasswordControls({ onPasswordDataChange }) {
  const [passwordLength, setPasswordLength] = useState(0);
  const [isChecked, setIsChecked] = useState({
    isUppercaseChecked: false,
    isLowercaseChecked: false,
    isNumbersChecked: false,
    isSymbolsChecked: false,
  });
  const hasCheckedTrue = Object.values(isChecked).includes(true);

  const handlePasswordLengthChange = event =>
    setPasswordLength(parseInt(event.target.value));

  const handlePasswordSettingsChange = event => {
    const currentCheckTarget = event.target.name;

    if (currentCheckTarget === 'uppercaseCheckbox')
      return setIsChecked({
        ...isChecked,
        isUppercaseChecked: !isChecked.isUppercaseChecked,
      });

    if (currentCheckTarget === 'lowercaseCheckbox')
      return setIsChecked({
        ...isChecked,
        isLowercaseChecked: !isChecked.isLowercaseChecked,
      });

    if (currentCheckTarget === 'numbersCheckbox')
      return setIsChecked({
        ...isChecked,
        isNumbersChecked: !isChecked.isNumbersChecked,
      });

    if (currentCheckTarget === 'symbolsCheckbox')
      return setIsChecked({
        ...isChecked,
        isSymbolsChecked: !isChecked.isSymbolsChecked,
      });

    return;
  };

  const calcStrengthRating = () => {
    const hasCheckedTrue = Object.values(isChecked).filter(el => {
      if (el !== false) return el;
    });

    if (passwordLength >= 13 && hasCheckedTrue.length >= 4)
      return PASSWORD_STRENGTHS.STRONG;

    if (passwordLength >= 9 && hasCheckedTrue.length >= 3)
      return PASSWORD_STRENGTHS.MEDIUM;

    if (passwordLength >= 7 && hasCheckedTrue.length >= 2)
      return PASSWORD_STRENGTHS.WEAK;

    if (passwordLength > 0 && hasCheckedTrue.length >= 1)
      return PASSWORD_STRENGTHS.TOO_WEAK;

    return null;
  };

  const handlePasswordDataSubmit = event => {
    event.preventDefault();
    const passwordData = onPasswordDataChange({
      initialLength: 0,
      maxLength: 16,
      currentLength: passwordLength,
      isChecked,
    });

    return passwordData;
  };

  return (
    <StyledCard>
      <StyledPasswordControls onSubmit={handlePasswordDataSubmit}>
        <Slider
          label="Character Length"
          initialValue="0"
          maxValue="16"
          currentLength={passwordLength}
          onLengthChange={handlePasswordLengthChange}
          id="password-length-slider"
        />
        <StyledCheckboxContainer>
          <Checkbox
            checkboxName="uppercaseCheckbox"
            label="Include Uppercase Letters"
            isChecked={isChecked.isUppercaseChecked}
            onCheckedChange={handlePasswordSettingsChange}
          />
          <Checkbox
            checkboxName="lowercaseCheckbox"
            label="Include Lowercase Letters"
            isChecked={isChecked.isLowercaseChecked}
            onCheckedChange={handlePasswordSettingsChange}
          />
          <Checkbox
            checkboxName="numbersCheckbox"
            label="Include Numbers"
            isChecked={isChecked.isNumbersChecked}
            onCheckedChange={handlePasswordSettingsChange}
          />
          <Checkbox
            checkboxName="symbolsCheckbox"
            label="Include Symbols"
            isChecked={isChecked.isSymbolsChecked}
            onCheckedChange={handlePasswordSettingsChange}
          />
        </StyledCheckboxContainer>
        <PasswordStrengthRating onStrengthRatingChange={calcStrengthRating} />
        <Button
          type="submit"
          isDisabled={!hasCheckedTrue || passwordLength === 0 ? true : false}
        >
          Generated
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </StyledPasswordControls>
    </StyledCard>
  );
}

export default PasswordControls;
