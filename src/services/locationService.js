import axios from 'axios';

export const searchLocationByName = async (locationInput) => {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${locationInput}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
    return data;
  } catch (error) {
    return {};
  }
};

export const searchLocationByCoordinates = async (lat, lon) => {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
    return data;
  } catch (error) {
    return {};
  }
};
