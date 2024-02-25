import { useReducer } from "react";

const reducer = function (state, action) {
  const ACTIONS = {
    OPEN_MODAL: () => {
      return {
        ...state,
        modalState: action.payload.photo,
      };
    },

    CLOSE_MODAL: () => {
      return {
        ...state,
        modalState: action.payload.photo,
      };
    },

    ADD_FAV_PHOTO: () => {
      return {
        ...state,
        favourites: {
          ...state.favourites,
          [action.payload]: true,
        },
      };
    },

    REMOVE_FAV_PHOTO: () => {
      return {
        ...state,
        favourites: {
          ...state.favourites,
          [action.payload]: false,
        },
      };
    },
  };

  return ACTIONS[action.type]();
};

export default function useApplicationData() {
  const initialState = {
    modalState: null,
    favourites: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (photo) => {
    dispatch({
      type: "OPEN_MODAL",
      payload: { photo: photo },
    });
  };

  const closeModal = (photo) => {
    dispatch({
      type: "CLOSE_MODAL",
      payload: { photo: photo },
    });
  };

  const addFavPhoto = (photoId) => {
    dispatch({ type: "ADD_FAV_PHOTO", payload: photoId });
  };

  const removeFavPhoto = (photoId) => {
    dispatch({ type: "REMOVE_FAV_PHOTO", payload: photoId });
  };

  return {
    state,
    openModal,
    closeModal,
    addFavPhoto,
    removeFavPhoto,
  };
}
