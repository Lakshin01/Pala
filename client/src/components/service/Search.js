import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <div classNameName="ui container">
                                <div className="ui fluid category search">
                <div className="ui icon input">
                    <input className="ui segment" type="text" 
                    placeholder="Search  ..."/>
                    <i className="search icon"></i>
                </div>
                <div className="results">
                    <li>Hello</li>
                </div>
                </div>
            </div>
        )
    }
}
export default Search;
