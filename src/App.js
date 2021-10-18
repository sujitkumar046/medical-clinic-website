
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './Component/Home/Home/Home';
import Services from './Component/Home/Services/Services';

import Login from './Component/Shared/Login/Login';
import AuthProvider from './Context/AuthProvider';





function App() {
  return (
    <div className="App">

       <AuthProvider>
         
          <BrowserRouter>
            <Switch>
              <Route exact path='/'>
               <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path='/services'>
                <Services></Services>
              </Route>

            </Switch>
      
          </BrowserRouter>
         
        </AuthProvider> 
      
       
     
    </div>
  );
}

export default App;
