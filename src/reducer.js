const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "GET_STORIES":
      return { ...state, hits: action.payload.hits, nbPages: action.payload.nbPages, isLoading: false };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((currElem) => {
          return currElem.objectID !== action.payload;
        }),
      };
    case "SEARCH_QUERY":
      return { ...state, query: action.payload };
    case "NEXT_PAGE":
      let next_pageNum = state.page + 1;
      if (next_pageNum >= state.nbPages) {
        next_pageNum = 0;
      }
      return { ...state, page: next_pageNum };
    case "PREV_PAGE":
      let prev_pageNum = state.page - 1;
      if (prev_pageNum < 0) {
        prev_pageNum = 0;
      }
      return { ...state, page: prev_pageNum };
    default:
      return { ...state };
  }
};

export default reducer;
