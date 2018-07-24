export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
  console.log(`Action -> Receive city: ${city}`);

  return {
    type: FETCH_WEATHER,
    payload: city
  };
}

