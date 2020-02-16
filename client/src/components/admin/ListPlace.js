import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import {listPlace} from '../../actions/serviceActions';

// import Sidebar from "react-sidebar";
//import ServiceList from './ServiceList';
// import SelectListGroup from '../common/SelectListGroup';


class ListPalce extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     status: ''
  //   };
  //   this.onChange = this.onChange.bind(this);
  // }
    componentDidMount(){
        this.props.listPlace();
    }
    // onChange(e) {
    //   this.setState({ [e.target.name]: e.target.value });
    // }
  
     
    render() {
        // console.log(this.props.category)
        const PlaceList   =  this.props.place;

         console.log(PlaceList);
    
            let PlaceItems;
            if(PlaceList == null ){
            
                PlaceItems =<Spinner/>;

        }else{
            if(PlaceList.length > 0){



                PlaceItems=PlaceList.map(PlaceList => 

                     <li value="PlaceList_id">
                        {PlaceList.placename}
                        </li>
                   )
 

                  
            }else{
                PlaceItems = <p className="center-align">Loading...</p>;
            } 
         }
        return (
          // {CategoryItems}
            <div className="feed">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                
                 <h4> {PlaceItems}</h4>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

ListPalce.propTypes = {
    listPlace: PropTypes.func.isRequired,
    place: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  place: state.service.place,
  errors: state.errors
});


export default connect(mapStateToProps,{listPlace})(ListPalce);


