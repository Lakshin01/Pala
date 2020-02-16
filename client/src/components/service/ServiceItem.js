import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class ServiceItem extends Component {
  render() {

 const serviceList = this.props.serviceList;
 console.log("hello ",serviceList);

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            {/* <img src={profile.user.avatar} alt="" className="rounded-circle" /> */}
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{serviceList.name}</h3>
           <p>
               {serviceList.place}<br/>
              Type: {serviceList.type}
           </p>
            <Link to={`/servicelist/${serviceList.handle}`} className="btn btn-info">
              View Profile
            </Link>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Skill Set</h4>
    <h5>experience:{serviceList.experience}</h5>

            {/* <ul className="list-group">
              {profile.skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  {skill}
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    );
  }
}
ServiceItem.propTypes = {
    serviceList:PropTypes.object.isRequired
  };
  

export default ServiceItem;