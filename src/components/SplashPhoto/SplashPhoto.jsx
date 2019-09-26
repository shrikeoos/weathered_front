import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getPhoto } from '../../services/photoService';

const SplashPhoto = ({ city }) => {
  const [loading, setLoading] = useState(true);
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    const getPhotoWrapper = async () => {
      setPhoto(await getPhoto(city));
      setLoading(false);
    };
    getPhotoWrapper();
  }, []);

  return loading ? (
    'loading...'
  ) : (
    <>
      <img alt={photo.alt_description} width="900" height="500" src={photo.urls.full} />
      <p>{`Unsplash - ${city} - ${photo.user.name}`}</p>
    </>
  );
};

SplashPhoto.propTypes = {
  city: PropTypes.string.isRequired,
};

export default SplashPhoto;
