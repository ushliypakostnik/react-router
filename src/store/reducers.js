const reducer = (state = { }, action) => {
  switch (action.type) {
    case "REQUEST_ALBUMS":
      return Object.assign({}, state, {
        isFetching: true
      });
    case "RECEIVE_ALBUMS":
      return Object.assign({}, state, {
        isFetching: false,
        albums: action.albums
      });
    case "REQUEST_ALBUMS_FAILED":
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    case "REQUEST_DATA":
      return Object.assign({}, state, {
        isFetching: true
      });
    case "RECEIVE_DATA":
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      });
    case "REQUEST_DATA_FAILED":
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    case "PAGE_TO_ACTIVE":
      return Object.assign({}, state, {
        activePage: action.activePage
      });
    case "TOGGLE_THEME":
      return Object.assign({}, state, {
        theme: action.theme
      });
    default:
      return state;
  }
}

export default reducer;
