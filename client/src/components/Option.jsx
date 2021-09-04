import React from 'react'
import { useHistory } from "react-router-dom";
import EditPage from '../pages/Edit'
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../redux/action";
function Option(props) {
    const state = useSelector((state) => state.users.users);

    const dispatch = useDispatch();
    let history = useHistory();
    function Edit_Info() {
        history.push({
            pathname: '/edit',
            state: { id: props.user.id,fromwho:"Edit" }
          })
        console.log(props)
    }
    async function Delete_Info() {
        const response = await fetch('http://localhost:3002/user/delete_User', {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({id:props.user.id}) // body data type must match "Content-Type" header
          });
          dispatch(deleteUser(props.user.id));
          props.setUsers(props.users.filter((elm) => {
            return elm.id !== props.user.id;
          }))
         
      }

    return (
        <div> 
            <button onClick={Edit_Info}>Edit</button> 
            <button onClick={Delete_Info}>Delete</button>
        </div>
    )
}

export default Option
