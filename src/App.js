// import './App.css';
import Navbar from './components/Navbar'
import Sell from './screens/sell';
import Admin from './screens/Admin';
import AddMaterial from './screens/AddMaterial';
import SearchMaterial from './screens/SearchMaterial';
import AddUser from './screens/AddUser';
import SearchUser from './screens/SearchUser';
import Master from './screens/Master';
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
      <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/addMaterial">
            <AddMaterial />
          </Route>
          <Route path="/searchMaterial">
            <SearchMaterial />
          </Route>
          <Route path="/addUser">
            <AddUser />
          </Route>
          <Route path="/searchUser">
            <SearchUser />
          </Route>
          <Route path="/sell">
            <Sell />
          </Route>
        </Switch>
    </Router>
   
  );
}

export default App;
