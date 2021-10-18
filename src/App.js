
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './Component/Home/Banner/Banner';

import Navbar from './Component/Shared/Navbar/Navbar';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
       <Switch>
        <Route>
          <Navbar></Navbar>
          <Banner></Banner>
        </Route>

       </Switch>
      
      </BrowserRouter>
       
     
    </div>
  );
}

export default App;
