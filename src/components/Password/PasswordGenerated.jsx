import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { StyledCard } from '../styles/Card.styled';
import StyledPasswordGenerated from '../styles/PasswordGenerated.styled';

function PasswordGenerated() {
  return (
    <StyledCard>
      <StyledPasswordGenerated>
        <p>5RH2X7oMvpFGGcV@</p>
        <FontAwesomeIcon icon={faClipboard} />
      </StyledPasswordGenerated>
    </StyledCard>
  );
}

export default PasswordGenerated;
