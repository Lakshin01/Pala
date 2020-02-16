import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import SelectSearch from 'react-select-search';



// import { createProfile } from '../../actions/profileActions';
import { addServiceProvider,serviceListBar,listPlace} from '../../actions/serviceActions';
import classnames from 'classnames';

class AddServiceProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      name: '',
      category: '',
      place: '',
      type: 'Labour',
      address: '',
      experience: '',
      available: '',
      description: '',
      mobileno: '',
      facebook: '',
      linkedin: '',
      instagram: '',
      errors: {}
      
      
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount(){
    this.props.serviceListBar();
    this.props.listPlace();

}

  onSubmit(e) {
    e.preventDefault();

    const serviceProviderData = {
        name: this.state.name,
     category: this.state.category,

     place: this.state.place,
     type: this.state.type,
     address: this.state.address,
     experience: this.state.experience,
     available: this.state.available,
     description: this.state.description,
     mobileno: this.state.mobileno,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      instagram: this.state.instagram
    };
    console.log(serviceProviderData);

    this.props.addServiceProvider(serviceProviderData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;
    const CategoryList   =  this.props.category;
    const PlaceList  = this.props.place;
    // console.log(PlaceList);

    let optionPlace=PlaceList.map((PlaceList) =>
    <option
      key={PlaceList._id}
      value={PlaceList._id}
      label={PlaceList.placename}
      />
    );


    // console.log(CategoryList)
    let optionscategory = CategoryList.map((CategoryList) =>
    <option 
        key={CategoryList._id}
       value={CategoryList._id}
    
      label={CategoryList.categoryname}
       />
  
);

                    
                         

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
       

          <InputGroup
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />

          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />

          <InputGroup
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }
    // console.log(  CategoryList)
    // {
    //     this.CategoryList.map((c) => <option key={c.id} value={c.id} >{c.categoryname}</option>)
    //   }
   
    // Select options for status
    const options = [

       
        { label: 'Labour', value: 'Labour' },        
         { label: 'Condractor', value: 'Condractor' }
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                  info="A unique name for your profile URL. Your full name,category name, nickname"
                />

            {/* <select
            className="widefat"
            value={this.state.value}
            name={this.props.name}
            onChange={this.handleChange}
          >
           {CategoryList.map(

({ value, label }) => <option key={CategoryList._id} value={CategoryList._id}>{CategoryList.categoryname}</option>
)}
          </select> */}
                <SelectListGroup
                  placeholder="type"
                  name="type"
                  value={this.state.type}
                  onChange={this.onChange}
                  options={options}
                  error={errors.type}
                  info="Give us an idea of where you are at in your career"
                />
                {/* <TextFieldGroup
                  placeholder="place"
                  name="place"
                  value={this.state.place}
                  onChange={this.onChange}
                  error={errors.place}
                  info="Could be your own place or one you work for"
                /> */}

                

{/* 
                <TextFieldGroup
                  placeholder="category"
                  name="category"
                  value={this.state.category}
                  onChange={this.onChange}
                  error={errors.category}
                  info="Could be your own category or a company one"
                /> */}
                <TextFieldGroup
                  placeholder="address"
                  name="address"
                  value={this.state.address}
                  onChange={this.onChange}
                  error={errors.address}
                  info="City or city & state suggested (eg. Boston, MA)"
                />
                <TextFieldGroup
                  placeholder="* experience"
                  name="experience"
                  value={this.state.experience}
                  onChange={this.onChange}
                  error={errors.experience}
                  info="Please use comma separated values eg.
                    HTML,CSS,JavaScript,PHP"
                />
                <TextFieldGroup
                  placeholder="Github Username"
                  name="available"
                  value={this.state.available}
                  onChange={this.onChange}
                  error={errors.available}
                  info="If you want your latest repos and a Github link, include your username"
                />
                <TextAreaFieldGroup
                  placeholder="Short description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info="Tell us a little about yourself"
                />
                <TextAreaFieldGroup
                placeholder="Short mobileno"
                name="mobileno"
                value={this.state.mobileno}
                onChange={this.onChange}
                error={errors.mobileno}
                info="Tell us a little about yourself"
              />
               <select
                name="category"
                className='form-control form-control-lg'
                onChange={this.onChange}>
                <option>Select Item</option>
                {optionscategory}
           </select>

              <select
                name="place"
                className='form-control form-control-lg'
                onChange={this.onChange}>
                <option>Select Item</option>
                {optionPlace}
           </select>

                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                  
                />
                
                <br/>

              </form><br/><br/><br/>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
    );
  }
}

AddServiceProvider.propTypes = {
  profile: PropTypes.object.isRequired,
  serviceListBar: PropTypes.func.isRequired,
  listPlace: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  place: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  category: state.service.category,
  place:state.service.place,
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps,{addServiceProvider,serviceListBar,listPlace})(
  withRouter(AddServiceProvider)
);
