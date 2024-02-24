// import React, { useCallback, useState, useEffect } from "react";

// import TopNavigation from "./TopNavigationBar";
// import PhotoList from "./PhotoList";
// import "../styles/HomeRoute.scss";

// const HomeRoute = (props) => {
//   // recieving topics and photos data from <App>
//   const { photos, topics, favourites, toggleFavourite } = props;

//   // console log the liked photo object on change for debugging
//   useEffect(() => {
//     console.log("updated favourites:", favourites);
//   }, [favourites]);

//   return (
//     <div className="home-route">
//       {/* i am passing liked photos to TopNavigation and PhotoList so they can interact wit the state */}
//       <TopNavigation topics={topics} favourites={favourites} />
//       <PhotoList
//         photos={photos}
//         favourites={favourites}
//         toggleFavourite={toggleFavourite}
//       />
//     </div>
//   );
// };

// export default HomeRoute;
