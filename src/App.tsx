import AppProviders from 'providers/index';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { StyledGlobal } from './styled';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('mocks/browser');
  worker.start();
}

const App = () => {
  return (
    <>
      <StyledGlobal />
      <AppProviders>
        <Router>
          <Routes />
        </Router>
      </AppProviders>
    </>
  );
};

export default App;
