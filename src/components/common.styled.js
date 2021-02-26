import styled from 'styled-components';
import {imageComponent} from "./common"

export const Container = styled.div`
    width: ${(props) => props.width || ' '};
    padding: ${(props) => props.padding || '0.4rem 0 0.4rem 0'}; 
    margin: ${(props) => props.margin || 'auto'};
    display: ${(props) => props.display || ' '};
    text-align:  ${(props) => props.align || ' '};
    background: ${(props) => props.background || ' '};
    @media (max-width: 760px) {
        width: ${(props) => props.mwidth || '90%'};
    }
`;

export const Image = styled(imageComponent)`
    max-width: ${(props) => props.maxwidth || '100%'};
    width: ${(props) => props.width || '100%'};
    position: ${(props) => props.position || 'initial'};
    height: ${(props) => props.height || ' '};
    @media (max-width: 800px) {
        width: ${(props) => props.mwidth || props.width || '100%'};
    }
    @media (max-width: 700px) {
        height: ${(props) => props.heightMobile || ' '};
    }
    @media (max-width: 460px) {
        width: ${(props) => props.mwidth || props.width || '100%'};
    }   
`;

export const Title = styled.h1`
    text-align: ${(props) => props.textAlign || 'left'};
    margin-top: ${(props) => props.marginTop || ' '};
    margin-bottom: ${(props) => props.marginBottom || ' '};
    color: #000;
    font-family: 'Finger Paint';
    font-style: normal;
    font-weight: 400;
`;

export const Text = styled.h5`
    text-align: ${(props) => props.textAlign || 'left'};
    margin-top: ${(props) => props.marginTop || ' '};
    margin-bottom: ${(props) => props.marginBottom || ' '};
    font-family: 'Finger Paint';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/fingerpaint/v10/0QInMXVJ-o-oRn_7dron8YW-9JzT.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    font-size : ${(props) => props.fontSize || '15px'};
`;

export const SubText = styled.p`
    text-align: ${(props) => props.textAlign || 'left'};
    margin-top: ${(props) => props.marginTop || ' '};
    margin-bottom: ${(props) => props.marginBottom || '0px'};
    font-family: 'Finger Paint';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/fingerpaint/v10/0QInMXVJ-o-oRn_7dron8YW-9JzT.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
`;

export const CardBox = styled.div`
    margin: auto;
    width: 250px;
    height: 300px;
    position: relative;
    perspective: 1000px;
    cursor: pointer;
`;

export const Card= styled.div`
    transform-style: preserve-3d;
    transition: all 0.5s linear;
`;


export const Cara = styled.div`
    position: absolute;
    backface-visibility: hidden;
`;


export const ContentCard= styled.div`
    width: 250px;
    height:300px;
    border: 3px solid #000;
    background-color: #fff;
    border-radius: 10px;
`;


export const CaraBack= styled.div`
    transform: rotateY(180deg);
`;

export const ImagenFlotante = styled.div`
    height: ${props => props.height || '69px'};  
    width: ${props => props.width || '90px'}; 
    border-radius: ${props => props.radius || '40%'};  
    top: 2px; 
    left: 14px; 
    margin-bottom: 20px; 
    position: fixed; 
    z-index: 3000; 
    display:  ${props => props.display || 'flex'}; 
    @media (max-width: 800px) {
        display: ${(props) => props.displaym || 'none'};
    }

`;


export const TitleVideo = styled.h1`
    font-size: 18px;
    margin-top: 5%;
    margin-bottom: 5%;
    font-weight: 800;
    color: #fff;
    min-height: 41px;
`;

export const SubTitleVideo = styled.p`
    font-size: 15px;
    font-weight: 800;
    color: rgb(158, 158, 158);
    text-align: left;
    margin-bottom: 5px;
`;

export const TextVideo = styled.p`
    font-size: 15px;
    font-weight: 800;
    color: #fff;
    text-align: left;
    margin-bottom: 5px;
`;










