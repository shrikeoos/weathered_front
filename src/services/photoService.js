import axios from 'axios';

export const getPhoto = async (city) => {
  try {
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?query=${city}&page=1&per_page=1&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
    );
    console.log(data);
    return data.results[0];
  } catch (error) {
    return {};
  }
};
