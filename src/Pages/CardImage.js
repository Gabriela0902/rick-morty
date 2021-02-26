import React from 'react'
import {Text, Image, Cara, ContentCard,} from "./../components/common.styled";

export default function CardImage({url, name}) {
    return (
        <Cara className="cara">
            <ContentCard>
                <Image src={url} width="100%" mwidth="100%" alt ="Name"/>
                <Text class="card-title" textAlign="center" marginTop="5%" marginBottom="5%">{name}</Text>
            </ContentCard>
        </Cara>
    )
}
