import { useState } from 'react';
import PasswordGenerated from './PasswordGenerated';
import PasswordControls from './PasswordControls';
import { StyledContainer } from '../styles/Container.styled';

const CHARACTERS_CODE = Array.from(Array(26)).map((_, i) => i + 97);
const LOWERCASE_LETTERS = CHARACTERS_CODE.map(code =>
  String.fromCharCode(code)
);
const UPPERCASE_LETTERS = LOWERCASE_LETTERS.map(letter => letter.toUpperCase());
const NUMBERS = '1234567890';
const SYMBOLS = '!§$%&/()=?+*#';

function PasswordGenerator() {
  const [generatedPassword, setGeneratedPassword] = useState('');

  const convertArrayToString = arr => arr.toString().split(',').join('');

  const handleGenerateNewPassword = ({ currentLength, isChecked }) => {
    let characterOptions = '';
    let selectedCharacters = '';
    const hasUppercase = isChecked.isUppercaseChecked;
    const hasLowercase = isChecked.isLowercaseChecked;
    const hasNumbers = isChecked.isNumbersChecked;
    const hasSymbols = isChecked.isSymbolsChecked;

    if (hasUppercase)
      characterOptions += convertArrayToString(UPPERCASE_LETTERS);
    if (hasLowercase)
      characterOptions += convertArrayToString(LOWERCASE_LETTERS);
    if (hasNumbers) characterOptions += NUMBERS;
    if (hasSymbols) characterOptions += SYMBOLS;

    while (selectedCharacters.length < currentLength) {
      const randomIndex = Math.floor(Math.random() * characterOptions.length);
      selectedCharacters += characterOptions[randomIndex];
    }
    return setGeneratedPassword(selectedCharacters);
  };

  return (
    <StyledContainer>
      <h1>Password Generator</h1>
      <PasswordGenerated generatedPassword={generatedPassword} />
      <PasswordControls onPasswordDataChange={handleGenerateNewPassword} />
    </StyledContainer>
  );
}

export default PasswordGenerator;
