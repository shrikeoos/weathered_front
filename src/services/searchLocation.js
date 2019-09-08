import axios from 'axios';

const searchLocation = async (locationInput) => {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${locationInput}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
    return data;
  } catch (error) {
    return {};
  }
};

export default searchLocation;
