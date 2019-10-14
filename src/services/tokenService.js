import jwt from 'jsonwebtoken';
import axios from 'axios';
import { logoutUser } from './userService';

export const isAccessTokenExpired = (accessToken) => {
  const decodedAccessToken = jwt.decode(accessToken, { complete: true });
  return decodedAccessToken.payload.exp * 1000 < Date.now();
};

export const isRefreshTokenExpired = (refreshToken) => {
  const decodedRefreshToken = jwt.decode(refreshToken, { complete: true });
  return decodedRefreshToken.payload.exp * 1000 < Date.now();
};

export const getNewRefreshToken = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  if (isAccessTokenExpired(accessToken)) {
    if (!isRefreshTokenExpired(refreshToken)) {
      const { data, status } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/refresh`, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      if (status === 200) {
        localStorage.setItem('accessToken', data.accessToken);
      }
    } else {
      logoutUser();
    }
  }
};
