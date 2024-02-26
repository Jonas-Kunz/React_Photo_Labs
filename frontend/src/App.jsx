import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    state,
    openModal,
    closeModal,
    addFavPhoto,
    removeFavPhoto,
    selectTopic,
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
    </div>
  );
};

export default App;
