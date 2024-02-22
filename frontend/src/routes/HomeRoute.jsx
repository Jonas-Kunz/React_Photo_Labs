import React, { useCallback, useState, useEffect } from "react";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  // recieving topics and photos data from <App>
  const { photos, topics, setModalDisplay } = props;
  // my state for liked photos
  const [likedPhotos, setLikedPhotos] = useState([]);

  const toggleLikePhoto = useCallback(
    (photoId) => {
      setLikedPhotos((currentLikedPhotos) => {
        // spread currentLikedPhotos to keep immutability
        const updatedLikedPhotos = {
          ...currentLikedPhotos,
        };
        // if the photo is liked clicking the like button will delete the key
        // if the photo isnt liked create a key with value of true
        if (updatedLikedPhotos[photoId]) {
          delete updatedLikedPhotos[photoId];
        } else {
          updatedLikedPhotos[photoId] = true;
        }
        // return and update likedPhotos
        return updatedLikedPhotos;
      });
    },
    [likedPhotos]
  );

  // console log the liked photo object on change for debugging
  useEffect(() => {
    console.log("updated LikedPhotos:", likedPhotos);
  }, [likedPhotos]);

  return (
    <div className="home-route">
      {/* I am passing liked photos to TopNavigation and PhotoList so they can interact with the state */}
      <TopNavigation topics={topics} likedPhotos={likedPhotos} />
      <PhotoList
        photos={photos}
        likedPhotos={likedPhotos}
        toggleLikePhoto={toggleLikePhoto}
        setModalDisplay={setModalDisplay}
      />
    </div>
  );
};

export default HomeRoute;
