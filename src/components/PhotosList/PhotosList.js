import React from 'react';
import {Grid} from "@mui/material";

import SingleCard from "../SingleCard/SingleCard";


function PhotoList({imagesData}) {
    return (
        <Grid container
              direction="row"
              columns={{ xs: 1, md: 4, lg: 10 }}
              justifyContent="space-between"
              alignItems = "flex-start"
              spacing={3}
        >
            {imagesData.map(image => <Grid key={image.id} item xs={12} lg={2}  ><SingleCard  imageInfo = {image} /></Grid>)}
        </Grid>
    );
}

export default PhotoList;