import React from 'react'
import {TitleVideo, SubTitleVideo,TextVideo} from "./../components/common.styled";
export default function DescriptionVideo({character}) {
    return (
        <>
            <TitleVideo>{character.name}</TitleVideo>
            <SubTitleVideo>Capitulo</SubTitleVideo>
            <TextVideo>{character.episode}</TextVideo>
            <SubTitleVideo>Lanzamiento</SubTitleVideo>
            <TextVideo>{character.air_date}</TextVideo>
            
        </>
    )
}
