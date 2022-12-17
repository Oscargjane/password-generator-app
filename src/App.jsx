import Theme from './components/styles/Theme';
import GlobalStyle from './components/styles/Global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PasswordGenerated from './components/Password/PasswordGenerated';
import { StyledContainer } from './components/styles/Container.styled';
import { StyledButton } from './components/styles/Button.styled';
import PasswordControls from './components/Password/PasswordControls';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <StyledContainer>
        <h1>Password Generator</h1>
        <PasswordGenerated />
        <PasswordControls />
        <StyledButton>
          Generate
          <FontAwesomeIcon icon={faArrowRight} />
        </StyledButton>
      </StyledContainer>
    </Theme>
  );
}

export default App;
