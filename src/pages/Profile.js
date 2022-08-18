import React from 'react';
import {useNavigate} from "react-router-dom";

function Profile(props) {

    const navigate= useNavigate()
    const logoutHandler=()=>{
        console.log('Logout handler worked')
        navigate('/')
    }

    return (
        <div className='white'>
            Profile <br />
            <button onClick={logoutHandler}>Log out</button>
        </div>
    );
}

export default Profile;