import {applyMiddleware, createStore, combineReducers, compose, bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';

import React, {PropTypes} from 'react';

import { fetchWeather } from '../actions';

const WEATHER_API = 'api.openweathermap.org/data/2.5/forecast?q={city name},{country code}';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

    }

    onInputChange(e) {
        this.setState(
          {
            term: e.target.value
          }
        )
    }

    onFormSubmit(e){
        e.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)}>
                <div className="input-group">
                    <input value={this.state.term} onChange={this.onInputChange.bind(this)} placeholder="Search Cities" className="form-control"/>
                    <span className="input-button-group">
                        <button type="submit" className="btn btn-secondary">Search</button>
                    </span>
                </div>
            </form>
        );
    }
}

function mapStateToProps(s){
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
