import { ADD_USER, DELETE_USER,EDIT_USER } from "./actionTypes";
export const addUser = (userObject) => ({
  type: ADD_USER,
  payload: {
    userObject,
  },
});
export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: {
    id,
  },
});
export const editUser = (id,elment_to_edit,newValue) => ({
    type: EDIT_USER,
    payload: {
      id,
      elment_to_edit,
      newValue,
    },
  });
//   elmentToEdit="email" || "id"
/*

const elmnts={
    "email",function(user,email,newEmail)

}
elments[elment_to_edit]
*/