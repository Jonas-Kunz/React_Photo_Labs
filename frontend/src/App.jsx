import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import ErrorDetailsModal from "routes/ErrorDetailsModal";
import useApplicationData from "dataManagers/useApplicationData";

// App serves mainly to pass props down to its children and conditionally render the photo and error details modals.
const App = () => {
  const {
    state,
    openModal,
    closeModal,
    addFavPhoto,
    removeFavPhoto,
    selectTopic,
    closeError,
    dispatch,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        state={state}
        openModal={openModal}
        closeModal={closeModal}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
        selectTopic={selectTopic}
        dispatch={dispatch}
      />
      {state.modalState && (
        <PhotoDetailsModal
          state={state}
          openModal={openModal}
          closeModal={closeModal}
          addFavPhoto={addFavPhoto}
          removeFavPhoto={removeFavPhoto}
          photos={state.photoData}
        />
      )}
      {state.error && (
        <ErrorDetailsModal state={state} closeError={closeError} />
      )}
    </div>
  );
};

export default App;
