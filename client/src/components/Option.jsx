import React from 'react'
import { useHistory } from "react-router-dom";
import EditPage from '../pages/Edit'
function Option(props) {

    let history = useHistory();
    function Edit_Info() {
        history.replace('../edit')
        
    }

    return (
        <div> 
            <button onClick={Edit_Info}>Edit</button> 
            <button>Delete</button>
        </div>
    )
}

export default Option
