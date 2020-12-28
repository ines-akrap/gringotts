import logo from './assets/icons/gringotts.svg';
import './App.scss';

import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app__base">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <nav className="app__navigation">
            <ul className='navigation__list'>
              <li className='navigation__item'>
                <Link to="/">Home</Link>
              </li>
              <li className='navigation__item'>
                <Link to="/about">About</Link>
              </li>
              <li className='navigation__item'>
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <div className="app__content">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
          </Switch>
        </div>
      </div>

      <footer className="app__footer">

      </footer>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Services() {
  return <h2>Services</h2>;
}


export default App;
