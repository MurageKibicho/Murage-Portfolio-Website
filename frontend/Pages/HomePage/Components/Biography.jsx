import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faGraduationCap, faMailBulk, faSchool } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faStackOverflow, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { DeviceType } from '../../../responsive';


const Container = styled.div`
height: 100%;
width: 100%;
display:block;
background-color: var(--color0);
color: var(--color1);
display: flex;
@media ${DeviceType.tablet} 
{
    display: block;
}
`;

const LeftContainer = styled.div`
width: 40%;
height: 100%;
display: block;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 2%;
@media ${DeviceType.tablet} 
{
    width: 100%;
    height: 30%;
    margin-top: 0%;
}
`;
 
const RightContainer = styled.div`
width: 60%;
height: 100%;
display: block;
margin-top: 2%;
@media ${DeviceType.tablet} 
{
    width: 100%;
    height: 70%;
    margin-top: 0%;
}
`;

const ProfilePictureContainer = styled.div`
width: 80%;
height: 50%;
margin-left: 10%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
@media ${DeviceType.tablet} 
{
}
`;
    


const ProfilePicture = styled.div`
height : 400px;
width: 400px;
border-radius: 200px;
background: ${(props) => `url(https://avatars.githubusercontent.com/u/69147048?v=4)`};
background-repeat:no-repeat;
-webkit-background-size:cover;
-moz-background-size:cover;
-o-background-size:cover;
background-size:cover;
background-position:center;
@media ${DeviceType.tablet} 
{
    margin-top:10%;
}
`;

const NameContainer = styled.div`
height : fit-content;
width: 100%;
margin-top: 15px;
font-size: 1.7em;
@media ${DeviceType.tablet} 
{
    margin-top: 15px;
    font-size: 1.5em;
}
`;

const TitleContainer = styled.div`
height : fit-content;
width: 100%;
margin-top: 15px;
color: grey;
font-weight: 300;
font-size: 1.2em;
@media ${DeviceType.tablet} 
{
    margin-top: 5px;
    font-size: 1.0em;
}
`;

const WebsiteContainer = styled.div`
height : fit-content;
margin-top: 15px;
font-size: 1.2em;
width: 100%;
color: #bbdefb;
cursor: pointer;
&:hover {
    text-decoration: underline;
}
@media ${DeviceType.tablet} 
{
    margin-top: 5px;
    font-size: 1.0em;
}
`;

const IconsContainer = styled.div`
height: 50px;
width: 100%;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: white;
margin-left: 2%;
font-size: 2rem;
margin-top: 3%;
margin-left: 30px;
cursor: pointer;
&:hover {
    color: #8dc6f5;
}
`;

const ResumeIcon = styled(FontAwesomeIcon)`
color: white;
font-size:1.2rem;
margin-left: 30px;
margin-right: 10px;
cursor: pointer;
&:hover {
    color: #8dc6f5;
}
`;

const BiographyTitle = styled.div`
font-size: 3rem;
margin-bottom: 20px;
@media ${DeviceType.tablet} 
{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 10px;
}
`;

const BiographyTextContainer = styled.div`
font-size: 1.4rem;
height: fit-content;
width: 95%;
@media ${DeviceType.tablet} 
{
    margin-left: 15px;
    font-size: 1.1rem;
    margin-bottom: 10px;
}
`;

const DownloadResumeContainer = styled.div`
display: flex;
align-items: bottom;
font-size: 1.2rem;
height: fit-content;
width: 100%;
`;

const ResumeContainer = styled.div`
height : fit-content;
width: fit-content;
margin-left: 5px;
color: #bbdefb;
cursor: pointer;
&:hover {
    text-decoration: underline;
}
`;

const InterestsEducationContainer = styled.div`
height : 25%;
width: 100%;
display: flex;
margin-top: 20px;
@media ${DeviceType.tablet} 
{
    margin-top: 10px;
}
`;

const InterestsEducationTitle = styled.div`
height : fit-content;
width: 100%;
display: flex;
margin-top: 40px;
font-weight: 800;
font-size: 1.5em;
margin-bottom: 20px;
@media ${DeviceType.tablet} 
{
    margin-top: 10px;
    font-weight: 800;
    font-size: 1.5em;
    margin-bottom: 5px;
}
`; 

const InterestsContainer = styled.div`
height : 100%;
width: 50%;
display: block;
`;

const EducationContainer = styled.div`
height : 100%;
width: 50%;
display: block;
`;

const EducationItemContainer = styled.div`
height : 30%;
width: 100%;
display: flex;
`;

const MainEducationContainer = styled.div`
height : 100%;
width: 100%;
display: block;
`;
const DegreeContainer = styled.div`
height : 50%;
width: 100%;
display: flex;

`;

const SchoolContainer = styled.div`
height : 50%;
width: 100%;
display: flex;
color: grey;
`;

const EducationIcon = styled(FontAwesomeIcon)`
color: grey;
font-size: 1.2rem;
margin-top: 5px;
margin-right: 5px;
`;

const StyledLine = styled.li`
margin-bottom: 15px;
font-size: 1.2em;
`;
const Biography = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentTime = Date.now();
    const pageDetails = {'path':location.pathname, 'time': currentTime};
    const thesisLink = 'https://statistics.yale.edu/news/sds-poster-session-success';
    const emailLink = "mailto:murage.kibicho@yale.edu";
    const twitterLink = "https://twitter.com/murage_kibicho";
    const linkedinLink = "www.linkedin.com/in/kibicho-murage";
    const githubLink = "https://github.com/MurageKibicho";
    const stackOverflowLink = "https://stackoverflow.com/users/13035630/murage-kibicho";
    const OpenLink = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
return(
    <Container>
        <LeftContainer>
            <ProfilePictureContainer><ProfilePicture/></ProfilePictureContainer>
            <NameContainer>Murage Kibicho</NameContainer>
            <NameContainer>מוראג' קיביצ'ו</NameContainer>
            <TitleContainer>Senior at Yale</TitleContainer>
            <WebsiteContainer onClick={() =>OpenLink(thesisLink)}>(Researcher) Statistics and Near Eastern Languages</WebsiteContainer>
            <IconsContainer>
            <StyledFontAwesomeIcon onClick={() =>OpenLink(emailLink)} icon={faEnvelope} title="email"/>
            <StyledFontAwesomeIcon onClick={() =>OpenLink(twitterLink)} icon={faTwitter} title="twitter"/>
            <StyledFontAwesomeIcon onClick={() =>OpenLink(linkedinLink)} icon={faLinkedin} title="linkedin"/>
            <StyledFontAwesomeIcon onClick={() =>OpenLink(githubLink)} icon={faGithub} title="github"/>
            <StyledFontAwesomeIcon onClick={() =>OpenLink(stackOverflowLink)} icon={faStackOverflow} title="stackoverflow"/>

            </IconsContainer>
        </LeftContainer>

        <RightContainer>
            <BiographyTitle>Biography</BiographyTitle>
            <BiographyTextContainer>
                {text0}
                <br/><br/>
                {text1}
                <br/><br/>
                {text2}
                <br/><br/>
            </BiographyTextContainer>
            <DownloadResumeContainer>
                <ResumeIcon  icon={faDownload}/>
                Download Murage's  <ResumeContainer>resumé.</ResumeContainer>
            </DownloadResumeContainer>

            <InterestsEducationContainer>
                <InterestsContainer>
                    <InterestsEducationTitle>Interests</InterestsEducationTitle>
                    <ul>
                        <StyledLine>Information Theory and Compression</StyledLine>
                        <StyledLine>Web Development</StyledLine>
                        <StyledLine>Open source programming</StyledLine>
                    </ul>
                </InterestsContainer>
                <EducationContainer>
                    <InterestsEducationTitle>Education</InterestsEducationTitle>
                    <EducationItemContainer>
                        <EducationIcon  icon={faGraduationCap}/>
                        <MainEducationContainer>
                            <DegreeContainer>Bachelors in Statistics</DegreeContainer>
                            <SchoolContainer>Yale University</SchoolContainer>
                        </MainEducationContainer>
                    </EducationItemContainer>

                    <EducationItemContainer>
                        <EducationIcon  icon={faSchool}/>
                        <MainEducationContainer>
                            <DegreeContainer>Kenya Certificate of Secondary Education</DegreeContainer>
                            <SchoolContainer>Ranked 20th Nationally out of 600,000 students</SchoolContainer>
                        </MainEducationContainer>
                    </EducationItemContainer>

                    <EducationItemContainer>

                    </EducationItemContainer>
                </EducationContainer>
            </InterestsEducationContainer>
        </RightContainer>
    </Container>
)
}

const text0 = "Murage Kibicho is a senior at Yale studying Statistics and Near Eastern Languages. His senior thesis is on Uniform Distributions and he has studied the Hebrew Language for 3 years.";
const text1 = "He is currently in Kenya taking a gap year. He plans to complete his final semester in Fall '24.";
const text2 = "He programs primarily in C and maintains an open-source React framework written in Javascript.";


export default Biography