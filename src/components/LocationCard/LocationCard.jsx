import React from 'react';
import {connect} from 'react-redux'
import { Button } from 'antd';

//TODO insert location into DB
const save = () => {};

const LocationCard = ({ location }) => {
  const {data} = location
  return (
    Object.entries(data).length !== 0 && (
      <>
        <p>
          <b>{`${data.name}, ${data.sys.country}`}</b>
        </p>
        <p>
          <b>Temperature (°C): </b>
          {data.main.temp}
        </p>
        <p>
          <b>Condition: </b>
          {data.weather[0].description}
        </p>
        <p>
          <b>Humidity (%): </b>
          {data.main.humidity}
        </p>
        <p>
          <b>Pressure (hPa): </b>
          {data.main.pressure}
        </p>
        <Button type="primary" onClick={save} ghost>
          Save
        </Button>
      </>
    )
  );
};

const mapStateToProps = ({location}) => ({location})

export default connect(mapStateToProps)(LocationCard);
