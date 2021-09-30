import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/login/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

