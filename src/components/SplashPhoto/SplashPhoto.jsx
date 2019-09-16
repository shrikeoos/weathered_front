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

  console.log(photo);

  return loading ? (
    'loading...'
  ) : (
    <img alt="splash" width="900" height="500" src={photo.urls.full}></img>
  );
};

export default SplashPhoto;
