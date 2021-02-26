import React, {useState, useEffect} from 'react'
import API from "./../config/apollo";
import LocationCard from "./LocationCard";
import "./../components/Header.css";
import {Container,} from "./../components/common.styled";

const api = new API();

export default function Location() {
    const [episode, setepisodios] = useState([]); 

    useEffect(() =>
    {
        async function getEpisode()
        {
            setepisodios(await api.getEpisode(2));
            console.log(await api.getEpisode(2))
            console.log(episode);
        }
        
        getEpisode()
    },[])

    return (
        <Container mwidth="90%" width="90%" >
            <div class="row">
                <LocationCard episode={episode}/>
            </div>
        </Container>
    );
}
