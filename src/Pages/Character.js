import React, { Component , useState, useEffect } from 'react';
import {Container, Title, Image, ImagenFlotante} from "./../components/common.styled";
import CardCharacter from "./CardCharacter";
import Pagination from "./Pagination";
import "./../components/Header.css";
import API from "./../config/apollo";
import Logo1 from "./../components/img/logo1.gif"
import "./../components/Header.css";

const api = new API();

function CharacterPrincipal() {

    const [charactergeneral, setcharactergeneral] = useState([]); 
    const [characters, setcharacters] = useState([]); 
    const [paginationT, setpaginationT] = useState(1);
    const [pagination, setpagination] = useState(1);

    useEffect(() =>
    {
        async function getCharacterGeneral()
        {
            setcharactergeneral(await api.getCharacterGeneral(pagination));
            setcharacters(charactergeneral.results); 
            console.log(paginationT);
        }
        getCharacterGeneral()
    },[pagination])

    return (
        <Container mwidth="90%" width="80%" >
            <Title textAlign="center" marginTop="3%" marginBottom="3%">Personajes</Title>
            <div class="row">
                <CardCharacter characters={charactergeneral} setpaginationT={setpaginationT}/>
            </div>
            <Pagination pagination={pagination} setpagination={setpagination} paginationT={paginationT}/>
            <ImagenFlotante className="Flotante">
                <Image src={Logo1}/>
            </ImagenFlotante>
        </Container>
    );
}
export default CharacterPrincipal
