import './App.css';
import Footer from './components.js/Footer';
import Navbar from './components.js/Navbar';
import TableData from './components.js/TableData';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GithubUsers from './components.js/GithubUsers';
import Home from './components.js/Home';

function App(props) {
  return (
    < >
    <Router>
    <Navbar navtitle='MyApp'/>
    <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/Home">
            <Home/>
          </Route>
          <Route exact path="/GithubUsers">
            <GithubUsers/>
          </Route>
          <Route exact path="/JSONplacholderAPI">
          <TableData/>
          </Route>
        </Switch>
    
    <Footer/>
    </Router>
    </>
  );
}

export default App;
