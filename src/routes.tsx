import { Routes as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingIn from './pages/SingIn';
import NotFound from './pages/NotFound';

const Routes = (): JSX.Element => {
  return(
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SingIn />} />
      <Route path="*" element={<NotFound />} />
    </Router>
  );
}

export default Routes;