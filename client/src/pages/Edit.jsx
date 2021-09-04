import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser ,addUser} from "../redux/action";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Edit() {
  const location = useLocation();
  const state = useSelector((state) => state.users.users);
  const [user, setUser] = useState({});
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    let history = useHistory();
const [idtoEdit, setidtoEdit] = useState("");
const [myChoice_Edit_Add,setmyChoice_Edit_Add] =  useState(location.state);
    useEffect(() => {
        if(myChoice_Edit_Add.fromwho==="Edit"){
      const userToEdit = state.find((elm) => elm.id === location.state.id);
        console.log(userToEdit);
        setidtoEdit(userToEdit.id)
        setId(userToEdit.id);
        setName(userToEdit.name);
        setEmail(userToEdit.email);
        }
      }, []);
  
    console.log(location.state);
    const dispatch=useDispatch()
    function Edit_Add() {
        if(myChoice_Edit_Add.fromwho==="Edit"){
        const response =  fetch('http://localhost:3002/user/edit_User', {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({idtoEdit,name,email}) // body data type must match "Content-Type" header
          });
        }else {
        //Add 
        
        fetch('http://localhost:3002/user/add_User', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ id , name,email}) // body data type must match "Content-Type" header
          });
          const user = {id:id,name:name ,email:email}
          dispatch(addUser(user));
        }
          history.push('/')
    }
   
    return (
      <div>
        <h1>Edit Page</h1>
        <h1>ID :</h1>{" "}
        <input disabled="true"
          value={id}
          type="text"
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>
        <h1>NAME :</h1>{" "}
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        ></input>
        <h1>EMAIL :</h1>{" "}
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
        ></input>
        <br></br>
        <br></br>
         {location.pathname=""}?<div></div>:<div></div>
        <button  onClick={Edit_Add}>{location.state.fromwho}</button>
      </div>
    );



}

export default Edit;
