import React, { Component } from "react"; 
import Home from './layouts/Sidebar/Home/Home'
import Header from './layouts/Sidebar/Header'
const items = [
    { name: 'home', label: 'Home' },
    {
      name: 'billing',
      label: 'Billing',
      items: [
        { name: 'statements', label: 'Statements' },
        { name: 'reports', label: 'Reports' },
      ],
    },
    {
      name: 'settings',
      label: 'Settings',
      items: [{ name: 'profile', label: 'Profile' }],
    },
  ]

class App extends Component {
  render() {
    return (
     <div>
     <Header />
       <Home/>


     </div>
    );
  }
}

export default App;