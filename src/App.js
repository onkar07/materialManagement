// import './App.css';
import Navbar from './components/Navbar'
import Sell from './screens/sell';
import Admin from './screens/Admin';
import AddMaterial from './screens/AddMaterial';
import SearchMaterial from './screens/SearchMaterial';
import AddUser from './screens/AddUser';
import SearchUser from './screens/SearchUser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Admin />
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    
    </Router>
  );
}

export default App;
