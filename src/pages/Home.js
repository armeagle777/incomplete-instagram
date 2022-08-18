import React, {useEffect, useState} from 'react';
import Header from "../components/Header/Header";
import {Container} from "@mui/material";
import {Route, Routes, useSearchParams} from "react-router-dom";
import Photos from "./Photos";
import {getDataFromApi, getSearchDataFromApi} from "../utils/getDataFromApi";
import Notfound from "./Notfound";
import Profile from "./Profile";
import Index from "./Index";


function Home() {
    const [data, setData] = useState([])
    const [searchInputValue, setSearchInputValue] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const [timeoutId, setTimeoutId] = useState(null)

    useEffect(() => {
        clearTimeout(timeoutId)
        const queryParam = searchParams.get('search')
        if (queryParam) {
            const myId = setTimeout(() => {
                setTimeoutId(myId)
                getSearchDataFromApi(queryParam).then(data => {
                    console.log('fetched')
                    setData(data.results)
                })
            }, 1000)

        } else {
            getDataFromApi().then(res => setData(res))
        }
    }, [searchParams,timeoutId])

    const searchInputHandler = (ev) => {
        const newValue = ev.target.value
        setSearchInputValue(newValue)
        if (newValue.length >= 3) {
            setSearchParams({search: newValue})
        } else {
            setSearchParams({})
        }
    }

    return <>
        <Header searchInputValue={searchInputValue} searchInputHandler={searchInputHandler}/>
        <Container maxWidth="xl" sx={{pt: 2}}>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/profile' element={<Profile />} />
                <Route path="/photos" element={<Photos data={data}/>}/>
                <Route path='*' element={<Notfound/>}/>
            </Routes>
        </Container>
    </>;
}


export default Home