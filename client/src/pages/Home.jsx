import React from 'react'
import  TableUsers from '../components/TableUsers' 
import  EditPage from '../pages/Edit'
import { useHistory } from "react-router-dom";

function Home() {
    let history = useHistory();
  function Add_User() {
    history.replace('../edit')
}
    return (
        <div>
            <button onClick={Add_User}>+</button>
             <TableUsers></TableUsers>
        </div>
    )
}

export default Home
