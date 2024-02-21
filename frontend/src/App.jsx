import React from 'react';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import photos from './mocks/photos';
// Note: Rendering a single component to build components in isolation


const App = () => {

  
  return (
    <div className="App">
      <TopNavigation/>
      <PhotoList photos={photos}/>
    </div>
  );
};

export default App;

