const reducer = function (state, action) {
  console.log(action);
  const actions = {
    setModalState: () => {
      const updatedState = { ...state };
      const updatedModalState = { ...state.modalState };

      updatedModalState.isOpen = action.data.isOpen;
      updatedModalState.photo = action.data.photo;

      updatedState.modalState = updatedModalState;
      console.log("updated state within reducer", updatedState);
      return updatedState;
    },

    toggleFavourite: () => {
      const updatedState = { ...state };
      const updatedfavourites = { ...state.favourites };
      const likedPhotoId = action.data;

      if (updatedfavourites[likedPhotoId]) {
        delete updatedfavourites[likedPhotoId];
      } else {
        updatedfavourites[likedPhotoId] = true;
      }

      updatedState.favourites = updatedfavourites;

      return updatedState;
    },
  };

  const updatedState = actions[action.type]();
  return updatedState;
};

export default reducer;
