import React from 'react';
import {Grid} from "@mui/material";
import Media from "../Media/Media";


function Loader(props) {
    return (
        <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
        >
            <Grid item xs={12} lg={2}><Media/></Grid>
            <Grid item xs={12} lg={2}><Media/></Grid>
            <Grid item xs={12} lg={2}><Media/></Grid>
            <Grid item xs={12} lg={2}><Media/></Grid>
            <Grid item xs={12} lg={2}><Media/></Grid>
        </Grid>
    );
}

export default Loader;