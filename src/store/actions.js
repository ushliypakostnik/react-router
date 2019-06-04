import { FETCH_URL } from './constants';

export const pageToActive = (page) => ({
  type: "PAGE_TO_ACTIVE",
  activePage: page
});

export const toogleTheme = (theme) => ({
  type: "TOGGLE_THEME",
  theme: theme
});

export const setMinHeight = (minHeight) => ({
  type: "SET_MIN_HEIGHT",
  minHeight: minHeight
});

export const setDeviceType = (deviceType) => ({
  type: "SET_DEVICE_TYPE",
  deviceType: deviceType
});

export const requestAlbums = () => ({
  type: "REQUEST_ALBUMS"
});

export const receiveAlbums = (albums) => ({
  type: "RECEIVE_ALBUMS",
  albums
});

export const requestAlbumFailed = (error) => ({
  type: "REQUEST_ALBUMS_FAILED",
  error
});

export const fetchAlbums = () => {
  return dispatch => {
    dispatch(requestAlbums());
    return fetch(FETCH_URL + "/albums")
      .then(res => res.json())
      .then(
        (result) => {
          /* eslint-disable array-callback-return */
          let resultArr = [];
          result.map((item, index) => {
            if (index === 0) {
              resultArr.push({text: item.name, path: "/"});
            } else {
              resultArr.push({text: item.name, path: "/" + item.id});
            }
          });
          dispatch(receiveAlbums(resultArr));
        },
        (error) => {
          dispatch(requestAlbumFailed(error));
        }
      );
  }
}

export const requestData = () => ({
  type: "REQUEST_DATA"
});

export const receiveData = (data) => ({
  type: "RECEIVE_DATA",
  data
});

export const requestDataFailed = (error) => ({
  type: "REQUEST_DATA_FAILED",
  error
});

export const fetchData = (album) => {
  return dispatch => {
    dispatch(requestData());
    return fetch(FETCH_URL + "/albums/" + album)
      .then(res => res.json())
      .then(
        (result) => {
          dispatch(receiveData(result));
        },
        (error) => {
          dispatch(requestDataFailed(error));
        }
      );
  }
}
