import React, { Component , useState, useEffect } from 'react';
import {Container, Title, Image, ImagenFlotante} from "./../components/common.styled";
import title from "./../components/img/Title.png";
import logo from "./../components/img/Fondo1.png";
import "./../components/Header.css";
import Location from "./Location";
function Home() {

    return (
        <>
            {/* Contenerdor de Imagen de Inicio e imagen  */}
            <Container mwidth="90%" width="80%" align="center" >
                <Image src={title} width="500px"/>
            </Container>
            {/* Contenerdor de Logo y Logo  */}
            <Container mwidth="90%" width="80%" align="center">
                <Image src={logo} width="210px" />
            </Container>
            {/* Contenerdor de Capitulos */}
            <Container mwidth="100%" width="100%" align="center" background="rgb(36, 40, 47)">
                <Container mwidth="90%" width="80%">
                    <Location/>
                </Container>
            </Container>
        </>
    );
}

export default Home;