import React, { Component } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './Sidebar.css'
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {serviceListBar,serviceData} from '../../actions/serviceActions';
// import axios from "axios";
import ServiceLists from './ServiceLists';


class ServiceListBar extends Component {


  componentDidMount(){
    this.props.serviceListBar();
  }



  CategoryList(id){
    this.props.serviceData(id);
    // console.log(id);
  
  }

  render() {
   

    const CategoryList = this.props.category;
    let CategoryItems;
    CategoryItems=CategoryList.map(({ categoryname, _id, ...rest }) => 
      <ListItem  key={_id} button {...rest}  >
           {/* <ListItemText onClick={()=>this.DisplayCat(_id)}>{categoryname}</ListItemText> */}
           <ListItemText onClick={(e) => this.CategoryList(_id, e)}>{categoryname}</ListItemText>
        
      </ListItem>
      
    )
     


    return (
     <div>
       {/* style={{ height : `${height}px` }} */}
        <div className="sidebar" >
        <List disablePadding dense>
        {CategoryItems}
        </List>
      </div>
      <ServiceLists/>
     </div>
    );
  }
}

ServiceListBar.propTypes = {
  serviceListBar:PropTypes.func.isRequired,
  serviceData:PropTypes.func.isRequired,
  category: PropTypes.object.isRequired

};

const mapStateToProps = state =>({
  category: state.service.category,
  errors: state.errors

});

export default connect(mapStateToProps,{serviceListBar,serviceData})(ServiceListBar);
