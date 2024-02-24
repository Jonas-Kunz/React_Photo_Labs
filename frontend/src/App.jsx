import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import useApplicationData from "hooks/useApplicationData";
// Note: Rendering a single component to build components in isolation

const App = () => {
  const { state, dispatch } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        state={state}
        dispatch={dispatch}
      />
      {state.modalState.isOpen && (
        <PhotoDetailsModal state={state} dispatch={dispatch} photos={photos}/>
      )}
    </div>
  );
};

export default App;
