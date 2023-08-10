import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Pages/Home';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Minning from './Pages/Minning/Minning';
import Cur from './Pages/Currencies/Cur';
import RM from './Pages/Rapid mining/RM';
import CE from './Pages/Currency exchange/CE';
import Analysis from './Components/Dashboard/pages/Analysis';
import Account from './Components/Dashboard/pages/Account/Account';
import DashboardApp from './Components/Dashboard/Dashboard';
import Subscribe from './Components/Dashboard/pages/Subscribe/Subscribe';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/Minning' element={<Minning />}/>
          <Route path='/currencies' element={<Cur />}/>
          <Route path='/Rapid-mining' element={<RM />}/>
          <Route path='/currency-exchange' element={<CE />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/analysis' element={<Analysis />}/>
          <Route path='/account' element={<Account />} />
          <Route path='/home-dashboard' element={<DashboardApp />}/>
          <Route path='/subscription' element={<Subscribe />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
