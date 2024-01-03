import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import ImagePreview2 from './ImagePreview2';
import { DeviceType } from '../../../responsive';



const Container = styled.div`
height: 100%;
width: 100%;
display:flex;
background-color: var(--color0);
color: var(--color1);
@media ${DeviceType.tablet} 
{
  display: block;
}
`;
 
const LeftContainer = styled.div`
height :100%;
width: 40%;
margin-top: 1%;
@media ${DeviceType.tablet} 
{
    margin-top: 0%;
    height :20%;
    width: 100%;
}
`;

const TitleText = styled.div`
margin-top: 5%;
height:fit-content;
width: 100%;
text-align: center;
font-size: 50px;
@media ${DeviceType.tablet} 
{
    margin-top: 0%;
    font-size: 1.5em;
}
`;

const RightContainer = styled.div`
margin-top: 1%;
height :100%;
width: 60%;
@media ${DeviceType.tablet} 
{
    margin-top: 0%;
    height :80%;
    width: 100%;
}
`;

const TalksContainer = styled.div`
height: fit-content;
width: 100%;
margin-bottom: 30px;

`;
const Talks = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};

return(
    <Container>
        <LeftContainer>
            <TitleText>
                Coding Portfolio
            </TitleText>
            
        </LeftContainer>
        <RightContainer>
            <ImagePreview2/>
        </RightContainer>
    </Container>
)
}

export default Talks;


