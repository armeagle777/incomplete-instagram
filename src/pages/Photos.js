import React, {useState} from 'react';

import Loader from "../components/Loader/Loader";
import PhotoList from "../components/PhotosList/PhotosList";
import {Button} from "@mui/material";


function Photos({data}) {



    return (
        <>
            { data.length === 0
                    ? <Loader/>
                    : <PhotoList imagesData={data} />
            }
            <Button >Next</Button>
            {/*<MyImageList/>*/}
        </>
    );
}

export default Photos;