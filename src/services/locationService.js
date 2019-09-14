import axios from 'axios';

export const getWeatherByCity = async (locationInput) => {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${locationInput}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
    return data;
  } catch (error) {
    return {};
  }
};

export const getWeatherByCoordinates = async (lat, lon) => {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
    return data;
  } catch (error) {
    return {};
  }
};

export const getCityByName = async (city) => {
  try {
    const { data } = await axios.get(
      `http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=5&offset=0&namePrefix=${city}`
    );
    return data.data;
  } catch (error) {
    return {};
  }
};
