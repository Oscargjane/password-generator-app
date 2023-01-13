import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from '../UI/Slider';
import Checkbox from '../UI/Checkbox'
import Button from '../UI/Button';
import PasswordStrengthRating from './PasswordStrengthRating';
import { StyledCard } from '../styles/Card.styled';
import { StyledPasswordControls } from '../styles/PasswordControls.styled';
import { StyledCheckboxContainer } from '../styles/Checkbox.styled';


function PasswordControls() {
  const [passwordLength, setPasswordLength] = useState(0);
  const [isChecked, setIsChecked] = useState({
    isUppercaseChecked: false,
    isLowercaseChecked: false,
    isNumbersChecked: false,
    isSymbolsChecked: false
  })

  const handlePasswordLengthChange = event =>
    setPasswordLength(event.target.value);

  const handlePasswordSettingsChange = (event) => {
    const currentCheckTarget = event.target.name;

    if (currentCheckTarget === 'uppercaseCheckbox') return setIsChecked({...isChecked, isUppercaseChecked: !isChecked.isUppercaseChecked})

    if(currentCheckTarget === 'lowercaseCheckbox') return setIsChecked({...isChecked, isLowercaseChecked: !isChecked.isLowercaseChecked})

    if(currentCheckTarget === 'numbersCheckbox') return setIsChecked({...isChecked, isNumbersChecked: !isChecked.isNumbersChecked})

    if(currentCheckTarget === 'symbolsCheckbox') return setIsChecked({...isChecked, isSymbolsChecked: !isChecked.isSymbolsChecked})

    return;
  }

  return (
    <StyledCard>
      <StyledPasswordControls>
        <Slider
          label="Character Length"
          initialValue="0"
          maxValue="16"
          currentLength={passwordLength}
          onLengthChange={handlePasswordLengthChange}
          id="password-length-slider"
        />
        <StyledCheckboxContainer>
          <Checkbox checkboxName='uppercaseCheckbox' label="Include Uppercase Letters" isChecked={isChecked.isUppercaseChecked} onCheckedChange={handlePasswordSettingsChange}/>
          <Checkbox checkboxName='lowercaseCheckbox' label="Include Lowercase Letters" isChecked={isChecked.isLowercaseChecked} onCheckedChange={handlePasswordSettingsChange} />
          <Checkbox checkboxName='numbersCheckbox' label="Include Numbers" isChecked={isChecked.isNumbersChecked} onCheckedChange=
          {handlePasswordSettingsChange} />
          <Checkbox checkboxName='symbolsCheckbox' label="Include Symbols" isChecked={isChecked.isSymbolsChecked} onCheckedChange={handlePasswordSettingsChange} />
        </StyledCheckboxContainer>
        <PasswordStrengthRating />
        <Button type='submit'>
          Generated
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </StyledPasswordControls>
    </StyledCard>
  );
}

export default PasswordControls;