import React, { createContext, useReducer, useContext } from "react";
import {UPDATE_POSTS, LOADING} from "./actions";
const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) { 
    case UPDATE_POSTS:
      return {
        ...state,
        projects: [...action.projects],
        loading: false
      };
  
    case LOADING:
      return {
        ...state,
        loading: true
      };
  
    default:
      return state;
    }
  
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    projects:[],
    currentProject:{index:"",
        image:"",
        name: "",
        description: "",
        tech: [],
        deployLink: "",
        gitHubLink: ""},
        LOADING:false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
