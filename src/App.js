
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Appointment from './Component/Appointment/Appointment';
import BookAppointment from './Component/BookAppointment/BookAppointment';
import Doctors from './Component/Doctors/Doctors';

import Home from './Component/Home/Home/Home';
import Services from './Component/Home/Services/Services';
import Payment from './Component/Payment/Payment';
import Service from './Component/Service/Service';

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
              <Route path='/about'>
                <About></About>
              </Route>
              <Route path='/doctor'>
                <Doctors></Doctors>
              </Route>
              <PrivateRoute path='/appointment/:appointmentID'>
                <Appointment></Appointment>
              </PrivateRoute>
              <PrivateRoute path='/bookappointment'>
                <BookAppointment></BookAppointment>
              </PrivateRoute>
              <PrivateRoute path='/payment'>
                <Payment></Payment>
              </PrivateRoute>
             
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path='/services'>
                <Service></Service>
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
