import { ADD_IMAGE } from "../actions/image.action";

const initialState = {
  images: [],
  selected: null,
};

const ImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      return { ...state, selected: action.image };
  }
  return state;
};

export default ImageReducer;
