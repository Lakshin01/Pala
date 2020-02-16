

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import ServiceItem from './ServiceItem';
import Search from './Search';


class ServiceLists extends Component {


  render() {
    const  serviceLists= this.props.servicelists;
    console.log("sel",serviceLists)
    let serviceItems;
    if(serviceLists != undefined){
      serviceItems = serviceLists.map(serviceList => (
        <ServiceItem key={serviceList._id} serviceList={serviceList} />
      ));
    }


    // if (serviceLists === null ) {
    //   serviceLists = <Spinner />;
    // } else {
    //   if (serviceLists.length > 0) {
       
    //   } else {
    //     serviceItems = <h4>No profiles found...</h4>;
    //   }
    // }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Developer Profiles</h1>
              <p className="lead text-center">
                Browse and connect with developers
                {/* <ServiceItem passed={serviceLists}/> */}
              </p>
              <Search/>
              {serviceItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ServiceLists.propTypes = {
  servicelists:PropTypes.object.isRequired
};

const mapStateToProps = state => ({
 servicelists: state.service.servicedatas,
 errors:state.errors
});

export default connect(mapStateToProps)(ServiceLists);
