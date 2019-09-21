import React, { useEffect, useState } from 'react';

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
      <img alt={photo.alt_description} width="900" height="500" src={photo.urls.full}></img>
      <p>{`Unsplash - ${city} - ${photo.user.name}`}</p>
    </>
  );
};

export default SplashPhoto;
