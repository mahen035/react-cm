import React from 'react';
import { useNavigate } from 'react-router';
function Redirect(props){
    let navigate  = useNavigate();
    function handleClick(){
        navigate('./profile');
    }

    return(
        <div>
            <button>onClick = {handleClick}Go to Profile </button>
        </div>
    );
}
export default Redirect;