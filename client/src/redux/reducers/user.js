import { ADD_USER, DELETE_USER,EDIT_USER } from "../actionTypes";

const initialState = {
  users: [],
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            console.log("we are here")
          const { userObject} = action.payload;
          return {
            ...state,
            users: [...state.users,userObject],
          };
        }
        case DELETE_USER: {
          const { id } = action.payload;
          let index = state.users.findIndex((user) => user.id === id);
          console.log("delete redux")

          if (index > -1) {
            state.users.splice(index, 1);
          }
    
    
          return {
            ...state,
            users: [...state.users],
          };
        }
        case EDIT_USER:{
            return state
        }
        default:
          return state;
      }
}
export default userReducer;
