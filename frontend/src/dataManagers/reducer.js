// my reducer is composed of an actions object which contains the logic for altering the state and a reducer function which returns the state after the
// action has executed.
const ACTIONS = {
  OPEN_MODAL: (state, action) => {
    return {
      ...state,
      modalState: action.payload.photo,
    };
  },

  CLOSE_MODAL: (state, action) => {
    return {
      ...state,
      modalState: action.payload.photo,
    };
  },

  ADD_FAV_PHOTO: (state, action) => {
    return {
      ...state,
      favourites: {
        ...state.favourites,
        [action.payload]: true,
      },
    };
  },

  REMOVE_FAV_PHOTO: (state, action) => {
    const updatedFavourites = { ...state.favourites };
    delete updatedFavourites[action.payload];
    return {
      ...state,
      favourites: updatedFavourites,
    };
  },

  SET_FAVORITES: (state, action) => {
    console.log(action);
    return {
      ...state,
      favourites: action.payload,
    };
  },

  SET_PHOTO_DATA: (state, action) => {
    return {
      ...state,
      photoData: action.payload,
    };
  },

  SET_TOPIC_DATA: (state, action) => {
    return {
      ...state,
      topicData: action.payload,
    };
  },

  SELECT_TOPIC: (state, action) => {
    return {
      ...state,
      selectedTopic: action.payload,
    };
  },

  SET_ERROR: (state, action) => {
    return {
      ...state,
      error: action.payload,
    };
  },
};

// the reducer just calls the specific action with the state and the action type
const reducer = function (state, action) {
  if (ACTIONS[action.type]) {
    return ACTIONS[action.type](state, action);
  } else {
    return state;
  }
};

export default reducer;