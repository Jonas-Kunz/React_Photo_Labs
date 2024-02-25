import { useReducer, useEffect } from "react";

const ACTIONS = {
  OPEN_MODAL: (state,action) => {
    return {
      ...state,
      modalState: action.payload.photo,
    };
  },

  CLOSE_MODAL: (state,action) => {
    return {
      ...state,
      modalState: action.payload.photo,
    };
  },

  ADD_FAV_PHOTO: (state,action) => {
    return {
      ...state,
      favourites: {
        ...state.favourites,
        [action.payload]: true,
      },
    };
  },

  REMOVE_FAV_PHOTO: (state,action) => {
    const updatedFavourites = { ...state.favourites };
    delete updatedFavourites[action.payload];
    return {
      ...state,
      favourites: updatedFavourites,
    };
  },

  SET_PHOTO_DATA: (state,action) => {
    return {
      ...state,
      photoData: action.payload,
    };
  },

  SET_TOPIC_DATA: (state,action) => {
    return {
      ...state,
      topicData: action.payload,
    };
  },
};

const reducer = function (state, action) {
  if (ACTIONS[action.type]) {
    return ACTIONS[action.type](state, action);
  } else {
    return state;
  }
};

export default function useApplicationData() {
  const initialState = {
    photoData: [],
    topicData: [],
    modalState: null,
    favourites: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_PHOTO_DATA",
          payload: data,
        });
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_TOPIC_DATA",
          payload: data,
        });
      });
  }, []);

  useEffect(() => {
    console.log("state", state);
  }, [state]);

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
