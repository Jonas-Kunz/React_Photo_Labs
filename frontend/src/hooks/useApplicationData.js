import { useState, useEffect, useCallback } from "react";

export default function useApplicationData() {
  const [state, alterState] = useState();

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

  return {
    modalState,
    setModalDisplay,
    favourites,
    toggleFavourite,
  };
}
