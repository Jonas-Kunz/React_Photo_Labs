import React, { useCallback, useState, useEffect } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
// Note: Rendering a single component to build components in isolation

const App = () => {
  const [modalState, setModalDisplay] = useState({ isOpen: false });
  useEffect(() => {
    console.log("updated modalState:", modalState);
  }, [modalState]);

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
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        setModalDisplay={setModalDisplay}
        modalState={modalState}
        likedPhotos={likedPhotos}
        toggleLikePhoto={toggleLikePhoto}
      />
      {modalState.isOpen && (
        <PhotoDetailsModal
          setModalDisplay={setModalDisplay}
          modalState={modalState}
          likedPhotos={likedPhotos}
          toggleLikePhoto={toggleLikePhoto}
        />
      )}
    </div>
  );
};

export default App;

{
  /* <TopNavigation/>
<PhotoList photos={photos}/> */
}
