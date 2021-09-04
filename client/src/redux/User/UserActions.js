import {
  //COMPANIES LIST
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./actionTypes";

export const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUEST,
  });
  
  export const fetchUsersSuccess = (content) => {
    console.log(content);
    return {
      type: FETCH_USERS_SUCCESS,
      payload: {
        content,
      },
    };
  };
  
  export const fetchUsersFailure = (error) => ({
    type: FETCH_USERS_FAILURE,
    payload: {
      error,
    },
  });
  
export function fetchUsers(users) {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
   
        dispatch(fetchUsersSuccess(users));
      
  };
}