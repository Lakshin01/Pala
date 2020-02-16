import React, { Component } from "react";
import Sidebar from "../Sidebar";
import './sidebyside.css'
import { Button } from "@material-ui/core";
import axios from 'axios';
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
var count = 0;

class Home extends Component {

constructor(props){
  super(props);
  count = 1;
  this.state={
      categories: [],
      i : []
  };
}

display = async () =>{
  var CatList = await axios.get("api/test/getcatergorylist")
  console.log("CatList",CatList.data);
    // .then(res => {
    //   console.log("Result:" ,res)
      // this.setState({categories : res})
    this.setState({ categories:CatList.data })
    // this.setState({ i: CatList.data._id })
    console.log("IDs", CatList.data)
    // .catch(err => console.error(err));
     count++;
}



  render() {
    return (
     <div>
        <div id="container">
        <div className="sidebar"><Sidebar key={this.state.categories[count]} items={this.state.categories}/></div>
        <div className="dashboard">DASHBOARD</div>
        <Button onClick={this.display} >Click Me </Button>
    </div>
     </div>
    );
  }
}

export default Home;