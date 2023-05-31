import { CREATE_PUBLICATION_TYPE } from "../actions/publication.actions"; 

const initialState = {
  publication: null,
};

const PublicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PUBLICATION": {
      return state;
    }
    case CREATE_PUBLICATION_TYPE: {
      return {...state, 
        publication: state.publication 
        ? [...state.publication, action.payload ] 
        : [action.payload],
      };
    }

    default: {
      return initialState;
    }
  }
};
export default PublicationReducer;