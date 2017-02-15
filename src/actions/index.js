import axios from 'axios';

const API_KEY = '91655d083dd75745abb9b08fb7ebdc44';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
    const url = `${ROOT_URL}&q=${cityName},uk`;
    let result = axios.get(url);
    
    return {
      type: FETCH_WEATHER,
      payload: result
    };
}
