import React, {useEffect, useState} from 'react'
import CardContent from "./CardContent";
import CardImage from "./CardImage";
import {CardBox, Card} from "./../components/common.styled";

function CardCharacter({characters, setpaginationT}) {
    const character = characters != undefined ? characters.results : [];
    const pagT = characters != undefined ? characters.info : 1;
    const [pages, setpages] = useState([]);
    useEffect(() =>
    {
        setpaginationT(pagT);
    },[pagT])
    console.log(character);
    
    return (
        character != undefined && character.length != 0 &&  character.length != undefined ? 
        <>
            {character.map(
                (post) => (
                   (
                    <div class="col-12 col-sm-12 col-md-4 .col-lg-4 col-xl-4">
                        <div class="card text-center CardPrincipal">
                            <div class="card-body">
                                <CardBox className="carta-box">
                                    <Card className="carta">    
                                        <CardImage name={post.name} url={ post.image}/>
                                        <CardContent specie={post.species} gender={post.gender} status ={post.status} name={post.name}/>
                                    </Card>
                                </CardBox>
                            </div>
                        </div>
                    </div>  
             )))}
        </>: null
    )
}

export default CardCharacter

