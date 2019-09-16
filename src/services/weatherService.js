import React from 'react';
import { Tag } from 'antd';
import { getWeatherByCity } from './locationService';

export const getData = async (locations) => {
  return Promise.all(
    locations.map(async ({ country, city }) => {
      try {
        const { main, weather, coord } = await getWeatherByCity(city);
        return {
          key: `${country}, ${city}`,
          country,
          city,
          coord,
          temperature: main.temp,
          condition: weather[0].description,
          status: getStatus(main.temp),
        };
      } catch (error) {
        console.log(error);
      }
    })
  );
};

export const getStatus = (temperature) => {
  if (temperature < 15) {
    return <Tag color="cyan">cold</Tag>;
  } else if (temperature < 25) {
    return <Tag color="green">good</Tag>;
  } else if (temperature < 35) {
    return <Tag color="orange">hot</Tag>;
  } else if (temperature < 45) {
    return <Tag color="volcano">warning</Tag>;
  } else {
    return <Tag color="red">danger</Tag>;
  }
};
