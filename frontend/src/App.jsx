import React, {useState} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
// Note: Rendering a single component to build components in isolation


const App = () => {

  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setIsOpen={setIsOpen}/>
      {isOpen && <PhotoDetailsModal setIsOpen={setIsOpen}/>}
    </div>
  );
};

export default App;

{/* <TopNavigation/>
<PhotoList photos={photos}/> */}