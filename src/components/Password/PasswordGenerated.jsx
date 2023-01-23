import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import Button from '../UI/Button';
import { StyledClipboardBtnContainer } from '../styles/Button.styled';
import { StyledCard } from '../styles/Card.styled';
import StyledPasswordGenerated from '../styles/PasswordGenerated.styled';

function PasswordGenerated({ generatedPassword }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsCopied(false), 2000);
  }, [isCopied]);

  async function copyPasswordToClipboard() {
    if (generatedPassword.length === 0) return;

    try {
      await navigator.clipboard.writeText(generatedPassword);
      setIsCopied(true);
      console.log('Satisfactory return of the promise');
    } catch (error) {
      console.log(`Something went wrong in capturing the promise: ${error}`);
    }
  }

  return (
    <StyledCard>
      <StyledPasswordGenerated isCopied={isCopied}>
        <p>{generatedPassword !== '' ? generatedPassword : 'P4$5W0rD!'}</p>
        <StyledClipboardBtnContainer isCopied={isCopied}>
          <span>COPIED</span>
          <Button
            variant="clipboardBtn"
            onCopyToClipboard={copyPasswordToClipboard}
          >
            <FontAwesomeIcon icon={faClipboard} />
          </Button>
        </StyledClipboardBtnContainer>
      </StyledPasswordGenerated>
    </StyledCard>
  );
}

export default PasswordGenerated;
