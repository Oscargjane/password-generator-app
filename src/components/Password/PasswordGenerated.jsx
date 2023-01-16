import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { StyledCard } from '../styles/Card.styled';
import StyledPasswordGenerated from '../styles/PasswordGenerated.styled';

function PasswordGenerated({ generatedPassword }) {
  return (
    <StyledCard>
      <StyledPasswordGenerated>
        <p>{generatedPassword !== '' ? generatedPassword : 'P4$5W0rD!'}</p>
        <FontAwesomeIcon icon={faClipboard} />
      </StyledPasswordGenerated>
    </StyledCard>
  );
}

export default PasswordGenerated;
