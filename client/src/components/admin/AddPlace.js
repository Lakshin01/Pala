import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { addPlace} from '../../actions/serviceActions';

class AddPalce extends Component {
  constructor(props){
    super(props);
    this.state={
      category:'',
      errors:{}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newPlace={
      placename: this.state.place

    };

    this.props.addPlace(newPlace);
    this.setState({place:''});
    console.log(newPlace);
  }
  
  
    render() {
      const { errors } = this.state;
        return (
            
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add place in pala</h1>
              <p className="lead text-center">
                enter the place
              </p>
              <form  onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Enter the place"
                  name="place"
                  value={this.state.place}
                  onChange={this.onChange}
                  error={errors.place}
                />
                  <button type="submit" className="btn btn-dark">
                Submit
              </button>

                </form>
               </div>
            </div>
        </div>
           
        );
    }
}

AddPalce.propTypes = {
  addPlace: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};


const mapStateToProps = state =>({
  auth:state.auth,
  errors: state.errors
})
export default connect(mapStateToProps,{ addPlace }) (AddPalce);
