import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';




class AdminDashboard extends Component {
    render(){
        const { user } = this.props.auth;
        return(
            <div>
                <p className="lead text-muted">Welcome {user.name}</p>
         

            <Link to="/addcategory"><button>AddCategory</button></Link>
            <Link to="/listplace"><button>ListCategory</button></Link>
            <Link to="/listplace"><button>ListPlace</button></Link> 
            <Link to="/addplace"><button>AddPlace</button></Link>
            <Link to="/addservice"><button>AddService</button></Link> 
            </div>
        
        );
    
    }
}

AdminDashboard.propTypes={
    auth:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,null)(AdminDashboard);