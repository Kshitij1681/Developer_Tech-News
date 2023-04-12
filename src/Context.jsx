import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

let api = `https://hn.algolia.com/api/v1/search?`;

const initialState = {
  isLoading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};
const AppContext = React.createContext();

// In JSX expressions that contain both an opening tag and a closing tag, the content between those tags is passed as a special prop: props.children, otherwise it won't render the children jsx elements or components
const AppProvider = ({ children }) => {
  //   console.log(children);
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApi = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  // to remove post
  const removePost = (post_ID) => {
    dispatch({ type: "REMOVE_POST", payload: post_ID });
  };

  // to search post
  const searchPost = (searchQuery) => {
    dispatch({ type: "SEARCH_QUERY", payload: searchQuery });
  };

  // pagination
  const getNextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };

  const getPrevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };

  // to call api
  useEffect(() => {
    fetchApi(`${api}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return <AppContext.Provider value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}>{children}</AppContext.Provider>;
};

//custom hook creation
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
