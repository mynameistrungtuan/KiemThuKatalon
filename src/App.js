import './App.css';
import Home from './pages/home/home';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/login/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

