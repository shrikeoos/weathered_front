import { combineReducers } from 'redux';
import app from './app';
import location from './location';
import table from './table';
import user from './user';

export default combineReducers({ app, location, table, user });
