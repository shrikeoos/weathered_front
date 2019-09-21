# weathered_front

This is the frontend of a weather forecast web application.

- [weathered_front](#weatheredfront)
  - [Folder architecture](#folder-architecture)
  - [Getting started](#getting-started)
    - [Prerequisite](#prerequisite)
    - [Start](#start)
    - [Testing](#testing)
  - [Technology, framework and API](#technology-framework-and-api)
    - [Built with](#built-with)
    - [External API](#external-api)

## Folder architecture

- node_modules: contains all the dependencies
- public: contains the root html where react will render the whole app
- src: this is the main folder containing all the source
  - components: contains all the react component
  - pages: contains the pages called by react-router
  - redux: contains the redux store, the reducers, the action creators and the actions type
  - services: contains the functions called by the action creators
  - utils: contains helper function
  - App.jsx: root component
  - index.js: react entry point
- .env: contains the environment variable (/!\ **DO NOT COMMIT** /!\)
- package.json: npm dependency file

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisite

1. Clone the project: `https://github.com/romain-ngo/weathered_front.git`

1. Create a .env file in the root folder and set the following parameters:

```
  REACT_APP_WEATHER_API_KEY
  REACT_APP_UNSPLASH_ACCESS_KEY
```

A free key can be obtained from the website of the API. (see External API section below)

2. Get all the dependencies: `npm install`

### Start

1. Start the application with `npm start`.

2. Go to the following URL: `localhost:3000`

### Testing

Run all tests with `npm test`

## Technology, framework and API

### Built with

- Javascript (ES6)
- React for the frontend
- Redux for the state management
- Antd and CSS for styling
- Leaflet for the interactive map

### External API

The application make use of external APIs in order to get data related to cities, weather and such.

- [OpenWeatherMap](https://openweathermap.org/api) for getting information related to the weather of a city.
- [GeoDB cities](http://geodb-cities-api.wirefreethought.com/) for searching cities coordinates.
- [Unsplash](https://unsplash.com/developers) for the splash photo of each city.
