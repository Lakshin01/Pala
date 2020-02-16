import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Search extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.term)
    // this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
    place: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    place: state.service.place,
    errors: state.errors
  });
  

export default  connect(mapStateToProps)(Search);