import getPopularUsersByLanguage from '../api';
import { REQUEST_USERS, RECEIVE_USERS, SELECT_LANGUAGE } from '../constants';

export const requestUsers = language => ({
  type: REQUEST_USERS,
  language
});

export const receiveUsers = (language, data) => ({
  type: RECEIVE_USERS,
  language,
  users: data.data.items,
  receivedAt: Date.now()
});

export const selectLanguage = language => ({
  type: SELECT_LANGUAGE,
  language
});

export const fetchUsers = language => (dispatch, getState) => {
  if(getState().users[language] && (Date.now() - getState().users[language].receivedAt) < 60000) {
    return;
  } else {
    dispatch(requestUsers(language));
    return getPopularUsersByLanguage(language)
    .then(data => {
      return dispatch(receiveUsers(language, data))});
  }
}
