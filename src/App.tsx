import { BrowserRouter } from "react-router-dom";
import GlobalStyles from './styles/global';
import Routes from './routes';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes />      
    </BrowserRouter>
  );
}

export default App;
