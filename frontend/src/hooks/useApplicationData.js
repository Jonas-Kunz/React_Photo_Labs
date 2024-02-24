import { useReducer } from "react";
import reducer from "helperFucntions/useApplicationDataReducer";
// this is my useApplicationData hook which manages my state. My state is composed of two objects modalState, and favourites
// both use objects to store the information of the app. modalState stores wether or not the modal is open in isOpen, and stores which image has been opened in photo
// photo then contains the photo object of which ever photo was opened
// favourites simply stores an object containg key vlaue pairs of the photos that have been favourited in the form {photoId1: true, photoId2: true}..etc
// I decided to simply delete a photo from the object if it has been unfavourited so that I can reduce the amount of information I am storing so as to not clutter
// up my state with data on every photo, only the ones that actully affect the rest of the program.
export default function useApplicationData() {
  const initialState = {
    modalState: { isOpen: false, photo: null },
    favourites: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  };
}

