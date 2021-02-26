import React from 'react'
import {ContentCard, SubText, Text, CaraBack} from "../components/common.styled";

function CardContent({specie, gender,status, name}) {
    return (
        <CaraBack class="cara detras">
            <ContentCard>
                <Text class="card-title"  fontSize="40px" textAlign="center" marginTop="20%" marginBottom="10%">{name}</Text>
                <div className="row" style={{width: "90%", margin:"auto"}}>
                    <div className="col-5 padding0">
                        <SubText class="card-text">Especie:</SubText>
                    </div>
                    <div className="col-7 padding0">
                        <SubText class="card-text">{specie}</SubText>
                    </div>
                    <div className="col-5 padding0">
                        <SubText class="card-text">Genero:</SubText>
                    </div>
                    <div className="col-7 padding0">
                        <SubText class="card-text">{gender}</SubText>
                    </div>
                    <div className="col-5 padding0">
                        <SubText class="card-text">Estatus:</SubText>
                    </div>
                    <div className="col-7 padding0">
                        <SubText class="card-text">{status}</SubText>
                    </div>
                </div>
            </ContentCard>
        </CaraBack>
    )
}


export default CardContent;
