import React from 'react'
import  TableUsers from '../components/TableUsers' 
import  EditPage from '../pages/Edit'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addUser} from "../redux/action"
function Home() {
  console.log(useSelector((state) => state.users.users));
const dispatch=useDispatch()
    let history = useHistory();

  function Add_User() {
   //dispatch(addUser({id:"rwed",name:"rwed"}))
     history.push({
         pathname:"/edit",
         state:{fromwho:"Add"}
     })
}
    return (
        <div>
            <button onClick={Add_User}>+</button>
             <TableUsers></TableUsers>
        </div>
    )
}

export default Home
