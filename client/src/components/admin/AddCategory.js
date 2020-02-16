import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { addCategory} from '../../actions/serviceActions';

class AddCategory extends Component {
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

    const newCategory={
      categoryname: this.state.category

    };

    this.props.addCategory(newCategory);
    this.setState({category:''});
    console.log(newCategory);
  }
  
  
    render() {
      const { errors } = this.state;
        return (
            
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Category</h1>
              <p className="lead text-center">
                Create category for service
              </p>
              <form  onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Enter the Category"
                  name="category"
                  value={this.state.category}
                  onChange={this.onChange}
                  error={errors.category}
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

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};


const mapStateToProps = state =>({
  auth:state.auth,
  errors: state.errors
})
export default connect(mapStateToProps,{ addCategory }) (AddCategory);
