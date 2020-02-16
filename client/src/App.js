import React, { Component } from "react"; 
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import UserDashboard from './components/dashboard/UserDashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';
import AddCategory from './components/admin/AddCategory';
import AddPlace from './components/admin/AddPlace';
import AddService from './components/admin/AddService';
import ListPlace from './components/admin/ListPlace';
import ServiceListBar from './components/service/ServiceListBar';
import ServiceLists from './components/service/ServiceLists';

import jwt_decode from 'jwt-decode';
import store from './store';
import { setCurrentUser, logoutUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
import {Provider} from 'react-redux';
import { BrowserRouter as Router,Route,Switch}  from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';


import './App.css';
import Search from "./components/service/Search";





// import Home from './components/layouts/Sidebar/Home/Home'
// import Header from './components/layouts/Sidebar/Header'
// const items = [
//     { name: 'home', label: 'Home' },
//     {
//       name: 'billing',
//       label: 'Billing',
//       items: [
//         { name: 'statements', label: 'Statements' },
//         { name: 'reports', label: 'Reports' },
//       ],
//     },
//     {
//       name: 'settings',
//       label: 'Settings',
//       items: [{ name: 'profile', label: 'Profile' }],
//     },
//   ]
// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    // store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store ={store}>
        <Router>
          <div className="App">
           <Header/>
           <Route exact path="/" component={Landing} />
            <div className="container-fluid">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={UserDashboard} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/admindashboard" component={AdminDashboard} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/addcategory" component={AddCategory} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/addplace" component={AddPlace} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/addservice" component={AddService} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/listplace" component={ListPlace} />
              </Switch>


              <Switch>
                <PrivateRoute exact path="/service" component={ServiceListBar} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/serviceitem" component={ServiceLists} />
              </Switch>

           



           </div>
           <Footer/>
          </div>
        </Router>
    </Provider>
    );
  }
}

export default App;