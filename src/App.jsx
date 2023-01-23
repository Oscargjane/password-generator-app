import Theme from './components/styles/Theme';
import GlobalStyle from './components/styles/Global';
import PasswordGenerator from './components/Password/PasswordGenerator';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <PasswordGenerator />
    </Theme>
  );
}

export default App;
