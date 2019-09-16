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
    <div>
      <img alt={photo.alt_description} width="900" height="500" src={photo.urls.full}></img>
      <p>{`Unsplash - ${photo.description} - ${photo.user.name}`}</p>
    </div>
  );
};

export default SplashPhoto;
