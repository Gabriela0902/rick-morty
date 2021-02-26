import React, {useEffect, useState} from 'react';
import {Image} from "./../components/common.styled";
import API from "./../config/apollo";
const api = new API();

export default function ImagenVideo({character}) {
    const [episodios, setepisodios] = useState([]); 
    const [lengthCharacter, setlengthCharacter] = useState(character != undefined ? character.length-1 : 0);
    const url = character != undefined ? character[lengthCharacter] : ""

    useEffect(() =>
    {
        async function getCharacter()
        {
            if(url != "")
            {
                setepisodios(await api.getCharacter(url));
                console.log(await api.getCharacter(url));
                console.log("*****************");
                console.log(episodios);
            }
        }
        console.log(url);
        getCharacter();
    },[url])

    return (
        <Image src={episodios.image} height="100%" heightMobile="100%"/>
    )
}
