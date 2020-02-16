import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';




class UserDashboard extends Component {
    render(){
        const { user } = this.props.auth;
        return(
            <div>
                <p className="lead text-muted">Welcome {user.name}</p>
         

            <Link to="/service"><button>service</button></Link>
            <Link to=""><button>Bussiness</button></Link>
            <Link to=""><button>Travel</button></Link> 
            </div>
        
        );
    
    }
}

UserDashboard.propTypes={
    auth:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,null)(UserDashboard);