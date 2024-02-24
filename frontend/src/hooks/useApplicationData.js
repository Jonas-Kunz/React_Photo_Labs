import { useEffect, useReducer } from "react";
import reducer from "hookHelpers/useApplicationDataReducer";

export default function useApplicationData() {
  const initialState = {
    modalState: { isOpen: false, photo: null },
    favourites: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("updated state", state);
  }, [state]);

  return {
    state,
    dispatch,
  };
}

