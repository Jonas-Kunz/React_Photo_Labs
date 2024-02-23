import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

// FavBadge recieves isFavPhotoExist from TopNavigation and displays a small alert icon on the badge if any photos are liked.
const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className="fav-badge">
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true} />
    </div>
  );
};

export default FavBadge;
