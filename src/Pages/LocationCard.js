import React from 'react'
import ImageVideo from "./ImagenVideo";
import DescriptionVideo from "./DescriptionVideo"
export default function LocationCard({episode}) {
    const location = episode != undefined && episode != [] ? episode.results  : [];
    console.log(episode);

    return (
        location != undefined && location.length != 0 &&  location.length != undefined ? 
        <>
            {location.map(
                (post) => (
                   (
                    <div class="col-12 col-sm-12 col-md-6 .col-lg-4 col-xl-6">
                        <div class="card text-center CardPrincipal">
                            <div class="card-body row">
                                <div class="col-5 padding0">
                                    <ImageVideo character = {post.characters}/>
                                </div>
                                <div class="col-7 BackColorCard">
                                    <DescriptionVideo character = {post} />
                                </div>                                
                            </div>
                        </div>
                    </div>   
             )))}
        </>: null
    )
}
