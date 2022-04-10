// import './App.css';
import Navbar from './components/Navbar'
import Sell from './screens/sell';
import Admin from './screens/Admin';
import AddMaterial from './screens/AddMaterial';
import SearchMaterial from './screens/SearchMaterial';
function App() {
  return (
    <div>
      <Navbar/>
      <SearchMaterial />
    </div>
  );
}

export default App;
