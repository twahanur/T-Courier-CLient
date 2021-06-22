import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Component/Home/Home/Home"
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import { createContext, useState } from 'react';
import LogIn from './Component/LogIn/LogIn';
import PrivateRoute from './Component/LogIn/PrivateRoute/PrivateRoute';
import BookingCard from './Component/Home/Service/BookingCard';
import BookedService from './Component/Dashboard/BookedService/BookedService';
import AddAdmin from './Component/Dashboard/AddAdmine/AddAdmine';
import AddService from './Component/Dashboard/AddService/AddService';
import Review from './Component/Dashboard/Review/Review';
import OrderList from './Component/Dashboard/ManageOrder/OrderList';
import ManageService from './Component/Dashboard/ManageService/ManageService';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser, 'from app.js')

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <LogIn />
          </Route>

          <PrivateRoute path="/booking/:id">
            <BookingCard />
          </PrivateRoute>

          <PrivateRoute path="/booked-service">
            <BookedService />
          </PrivateRoute>

          <PrivateRoute path="/addAdmin">
            <AddAdmin/>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService/>
          </PrivateRoute>
          <PrivateRoute path="/reviews">
            <Review/>
          </PrivateRoute>
          <PrivateRoute path="/manage-orders">
            <OrderList/>
          </PrivateRoute>
          <PrivateRoute path="/manage-service">
            <ManageService/>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
