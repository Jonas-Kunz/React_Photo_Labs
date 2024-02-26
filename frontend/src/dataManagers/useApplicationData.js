import { useReducer, useEffect } from "react";
import reducer from "./reducer";

// use application data manages my state along with making sure Favs are persistent
export default function useApplicationData() {
  const initialState = {
    error: "",
    photoData: [],
    topicData: [],
    modalState: null,
    favourites: JSON.parse(localStorage.getItem("favImages")),
    selectedTopic: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // favImagesLocal fetches the local stored favorites state, if there is no local storage it creates an empty storage item
  // if the state has favorites in it they will get stored to local storage.
  const favImagesLocal = (state) => {
    let favImages = JSON.parse(localStorage.getItem("favImages")) || {};

    favImages = state.favourites;

    localStorage.setItem("favImages", JSON.stringify(favImages));
  };

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

  const selectTopic = (topicId) => {
    dispatch({
      type: "SELECT_TOPIC",
      payload: topicId,
    });
  };

  const closeError = () => {
    dispatch({
      type: "SET_ERROR",
      payload: "",
    });
  };

  const setError = (error) => {
    dispatch({
      type: "SET_ERROR",
      payload: `${error}`,
    });
  };

  // this useEffet adds/removes new favs to local storage when state.favorites changes by calling favImagesLocal
  useEffect(() => {
    favImagesLocal(state);
  }, [state.favourites]);

  // this useEffect manages the initail load of the page. it checks for local favorites and sets the state to that
  // then it makes fetch requests for phot and topic data
  useEffect(() => {
    let favImages = JSON.parse(localStorage.getItem("favImages")) || {};
    dispatch({
      type: "SET_FAVORITES",
      payload: favImages,
    });

    Promise.all([
      fetch(`/api/photos`).then((res) => res.json()),
      fetch(`/api/topics`).then((res) => res.json()),
    ])
      .then(([photosData, topicsData]) => {
        dispatch({
          type: "SET_PHOTO_DATA",
          payload: photosData,
        });
        dispatch({
          type: "SET_TOPIC_DATA",
          payload: topicsData,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data please try again");
      });
  }, []);

  // this useEffect manages selecting topics and makes a fetch to the specific route if users click on the logo they are brought to the main page
  useEffect(() => {
    if (
      state.selectedTopic &&
      state.selectedTopic > 0 &&
      state.selectedTopic <= state.topicData.length
    ) {
      fetch(`/api/topics/photos/${state.selectedTopic}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "SET_PHOTO_DATA",
            payload: data,
          });
        })
        .catch((error) => {
          console.log("error fetching topic photos", error);
          setError("error fetching topic photos please try again");
        });
    } else if (
      state.selectedTopic &&
      state.selectedTopic === state.topicData.length + 1
    ) {
      fetch(`/api/photos`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "SET_PHOTO_DATA",
            payload: data,
          });
        })
        .catch((error) => {
          console.log("error reloading main page", error);
          setError("error reloading main page please try again");
        });
    }
  }, [state.selectedTopic]);

  return {
    state,
    openModal,
    closeModal,
    addFavPhoto,
    removeFavPhoto,
    selectTopic,
    closeError,
  };
}
