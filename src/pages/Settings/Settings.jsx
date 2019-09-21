import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Switch } from 'antd';
import { setCelsius, setFahrenheit } from '../../redux/actions/app';

import './Settings.css';

const { Item } = Form;

const Settings = ({ unit, setCelsius, setFahrenheit }) => {
  return (
    <div className="settings">
      <div className="form">
        <Form layout="vertical">
          <Item>
            Email: <Input></Input>
          </Item>
          <Item>
            Username: <Input></Input>
          </Item>
          <Item>
            Password: <Input></Input>
          </Item>
          <Item>
            Change password: <Input></Input>
          </Item>
          <Item>
            Default unit (celsius/fahrenheit):{' '}
            <Switch
              checkedChildren="°C"
              unCheckedChildren="°F"
              defaultChecked={unit === 'c'}
              onChange={(event) => {
                return event ? setCelsius() : setFahrenheit();
              }}
            ></Switch>
          </Item>
          <Item>
            <Button type="primary">Save</Button>
          </Item>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  unit: state.app.unit,
});

const mapDispatchToProps = (dispatch) => ({
  setCelsius: () => dispatch(setCelsius()),
  setFahrenheit: () => dispatch(setFahrenheit()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
