// This function removes the variables name from the
// string and returns an array containing the values of the latitude and the longitude
// e.g. "?lat={latValue}&lon={lonValue}" => [latValue, lonValue]
export const getLatLon = (params) => {
  const regex = /[?latlon=]/g;
  const cleanedParams = params.replace(regex, '');
  return cleanedParams.split('&');
};

export const getCityName = (path) => path.split('/')[2];
