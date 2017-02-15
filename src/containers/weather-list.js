import React, {PropTypes} from 'react';
import Redux from 'redux';
import {connect} from 'react-redux';
import BarChart from '../components/bar-chart.js'
import Map from '../components/map.js';

class WeatherList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderWeather(cityData) {

        // get array of temperatures from the list
        const id = cityData.city.id;
        const temps = cityData.list.map(item => item.main.temp);
        const pressure = cityData.list.map(item => item.main.pressure);
        const humidity = cityData.list.map(item => item.main.humidity);
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={id}>
                <td><Map lat={lat} lon={lon}/>
                </td>
                <td>
                    <BarChart data={temps} colour="orange" units="K"/>
                </td>
                <td>
                    <BarChart data={pressure} colour="green" units="hPa"/>
                </td>
                <td>
                    <BarChart data={humidity} colour="black" units="%"/>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather}
}

export default connect(mapStateToProps)(WeatherList);
