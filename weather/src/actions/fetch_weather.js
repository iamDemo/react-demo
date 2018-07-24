import axios from "axios";

const API_KEY = 'e2dbcc3bc3b183c8406ac2c549bc1e3c';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
  console.log(`Action -> Receive city: ${city}`);

  // http://api.openweathermap.org/data/2.5/forecast?appid=e2dbcc3bc3b183c8406ac2c549bc1e3c&q=chicago,us
  const url = `${API_URL}&q=${city},us`;
  const request = axios.get(url);

  // request is a promise, when the real data is returned, then this action will be done and the real data will be put into payload
  // reducer will execute its own logic once promise is done
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
