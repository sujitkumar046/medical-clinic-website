
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Appointment from './Component/Appointment/Appointment';

import Home from './Component/Home/Home/Home';
import Services from './Component/Home/Services/Services';

import Login from './Component/Shared/Login/Login';
import Notfound from './Component/Shared/Notfound/Notfound';
import PrivateRoute from './Component/Shared/PrivateRoute/PrivateRoute';
import Register from './Component/Shared/Register/Register';
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
              <PrivateRoute path='/appointment'>
                <Appointment></Appointment>
              </PrivateRoute>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path='/services'>
                <Services></Services>
              </Route>
              <Route path='/register'>
                <Register></Register>
              </Route>
              <Route path='*'>
                <Notfound></Notfound>
              </Route>

            </Switch>
      
          </BrowserRouter>
         
        </AuthProvider> 
      
       
     
    </div>
  );
}

export default App;
