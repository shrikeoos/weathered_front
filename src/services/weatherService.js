import React from 'react';
import { Tag } from 'antd';
import { getWeatherByCoordinates } from './locationService';

export const getData = async (locations) => {
  return Promise.all(
    locations.map(async ({ id, country, city, latitude, longitude }) => {
      try {
        const { main, weather, coord } = await getWeatherByCoordinates(latitude, longitude);
        return {
          key: `${country}, ${city}`,
          id,
          country,
          city,
          coord,
          temperature: main.temp,
          condition: weather[0].description,
          status: main.temp,
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
