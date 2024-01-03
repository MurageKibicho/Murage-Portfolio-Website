import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import PublicationItem from './PublicationItem';
import { DeviceType } from '../../../responsive';



const Container = styled.div`
height: 100%;
width: 100%;
display:flex;
background-color: var(--color2);
color: white;
@media ${DeviceType.tablet} 
{
  display: block;
}
`;
 
const LeftContainer = styled.div`
height :100%;
width: 40%;
margin-top: 3%;
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
margin-top: 5%;
height :100%;
width: 60%;
@media ${DeviceType.tablet} 
{
    margin-top: 0%;
    height :80%;
    width: 100%;
}
`;

const PublicationsContainer = styled.div`
height: fit-content;
width: 100%;
margin-bottom: 10px;
`;
const Publications = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};

return(
    <Container>
        <LeftContainer>
            <TitleText>
                Recent <br/>Articles
            </TitleText>
            
        </LeftContainer>
        <RightContainer>
        {
            PublicationList.map(function(data)
            {
                return (
                <PublicationsContainer> <PublicationItem authors = {data.authors} year = {data.year} title = {data.title} journal = {data.journal} chip = {data.chip}/></PublicationsContainer>
            )
        })}
        </RightContainer>
    </Container>
)
}

export default Publications;

const PublicationList = [
{
    "authors": "Murage Kibicho",
    "year" : "2023",
    "title" : "FFmpeg and SDL : Part 1 of Coding a Video Player in less than 1000 lines of C code",
    "journal" : "Substack",
    "chip" : "Substack",
    "url" : "https://ffmpeg.substack.com/p/ffmpeg-and-sdl-part-1-of-making-a"
},
{
    "authors": "Murage Kibicho",
    "year" : "2023",
    "title" : "Failing Startups : Maybe I should get a job ",
    "journal" : "IndieHackers",
    "chip" : "Article",
    "url" : "https://www.indiehackers.com/post/failing-startups-maybe-i-should-get-a-job-653e1efd52"
},
{
    "authors": "Murage Kibicho",
    "year" : "2023",
    "title" : "FFMPEG C Data Structures Memory Leak Cheatsheet",
    "journal" : "Dev.to",
    "chip" : "Article",
    "url" : "https://dev.to/muragekibicho/ffmpeg-c-data-structures-memory-leak-cheatsheet-2nhb"
},
{
    "authors": "Murage Kibicho",
    "year" : "2022",
    "title" : "Auditory Illusions",
    "journal" : "Medium",
    "chip" : "PDF",
    "url" : "https://kibichomurage.medium.com/auditory-illusions-3f1d4581bb84"
},
{
    "authors": "Murage Kibicho",
    "year" : "2021",
    "title" : "Hebrew 130 : Making a Deepfake for my language class",
    "journal" : "YouTube",
    "chip" : "Video",
    "url" : "https://youtu.be/CkTEyAbzZe0?feature=shared"
},
{
    "authors": "Murage Kibicho",
    "year" : "2021",
    "title" : "Chinese 120 Final Project ",
    "journal" : "YouTube",
    "chip" : "Video",
    "url" : "https://youtu.be/-E3O_W9d2Zk?feature=shared"
},
{
    "authors": "Murage Kibicho",
    "year" : "2021",
    "title" : "Coding a Crypto Startup from Scratch: 02: App Demo, Filecoin Presentation ",
    "journal" : "YouTube",
    "chip" : "Video",
    "url" : "https://youtu.be/-U5LlfElwws?feature=shared"
}
];
