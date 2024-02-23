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

  const [favourites, setfavourites] = useState([]);

  const toggleFavourite = useCallback(
    (photoId) => {
      setfavourites((currentfavourites) => {
        // spread currentfavourites to keep immutability
        const updatedfavourites = {
          ...currentfavourites,
        };
        // if the photo is liked clicking the like button will delete the key
        // if the photo isnt liked create a key with value of true
        if (updatedfavourites[photoId]) {
          delete updatedfavourites[photoId];
        } else {
          updatedfavourites[photoId] = true;
        }
        // return and update favourites
        return updatedfavourites;
      });
    },
    [favourites]
  );

  // console log the liked photo object on change for debugging
  useEffect(() => {
    console.log("updated favourites:", favourites);
  }, [favourites]);

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        setModalDisplay={setModalDisplay}
        modalState={modalState}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
      {modalState.isOpen && (
        <PhotoDetailsModal
          setModalDisplay={setModalDisplay}
          modalState={modalState}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
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
