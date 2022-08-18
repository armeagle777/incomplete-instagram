import React from 'react';
import {useContext} from "react";
import {DataContext} from "../../utils/DataContext";
function Alert(props) {


    const name = useContext(DataContext)
    return (
        <div className='alert alert-danger'>
            {name.age}
        </div>
    );
}

export default Alert;