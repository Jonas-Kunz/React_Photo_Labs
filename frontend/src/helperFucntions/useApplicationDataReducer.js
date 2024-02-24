// this is my reducer function used in my useApplicationData hook
// it has two actions: setModalState and toggleFavourite.
// when a user clicks on an image on the main page they dispatch:
// dispatch({
//   type: "setModalState",
//   data: { isOpen: true, photo: photo },
// })
// to useApplication data.
// the setModalState action then sets the modal state to true and the data is the photo object of whichever photo they
// clicked on. when the user clicks on the close button in the modal the modal state is reset to: modalState: { isOpen: false, photo: null }
// meaning the modal is closed and there is no photo object stored.

// if a user clicks on the PhotoFavButton this is dispatched: dispatch({ type: "toggleFavourite", data: photoId }) from the onClick handler
// after that what happens is that if the image is not in my favourites state it is added as a property to favourites in this format:{ photoId1: true, photoId2: true }..etc
// as in the photoId becomes the key and true is its value within favourites. If the photo is in favourites its FavIcon is filled
// and the FavBadge on the navBar lights up.
// if the photo is already favourited and the user clicks on it again the favourite is then removed from the favourites state
// therefore unfavouriting th image.

const reducer = function (state, action) {
  const actions = {
    setModalState: () => {
      const updatedState = { ...state };
      const updatedModalState = { ...state.modalState };

      updatedModalState.isOpen = action.data.isOpen;
      updatedModalState.photo = action.data.photo;

      updatedState.modalState = updatedModalState;

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
