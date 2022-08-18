import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getDataFromApi} from "../../utils/getDataFromApi";

function Photo(props) {
    const [productData, setProductData] = useState({})
    const params = useParams()

    useEffect(()=>{
       getDataFromApi(`/${params.id}`).then(productData => setProductData(productData))
    },[])
    return (
        <div>
            {productData.title}
        </div>
    );
}

export default Photo;