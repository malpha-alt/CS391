import PageContainer from "./PageContainer";
import styled from "styled-components";
import { ListMain, ListSub, ListDate} from "./ListStyle";

const MyUl = styled.ul`
    list-style: none; 
    flex: 1;
    padding: 1vh 1vw 1vh 3vw;
    margin: 0;
`;

const Title = styled.h1`
font-size: calc(1px + 2vw);
margin: 1.5vh auto;
padding: 1vh 1vw;
color: whitesmoke;
`;
export default function WorkExperience() {
    return (
      <PageContainer>
          <main>
          <Title>Work Experience</Title>
    
    <MyUl>
        <ListMain>Primeo Bank - Web Back-End Internship</ListMain>
        <ListSub>Developed a RESTful API for the company’s 
                 website with Spring Boot 2 in Java 17.</ListSub>
        <ListSub>Implemented JWT for
                 different permission levels with Spring Security and OAuth 2.0.</ListSub>
        <ListDate>May 2023 - August 2023</ListDate>
        <ListMain>Hebron Holdings - Full-Stack Internship</ListMain>
        <ListSub>Developed a web application for the company’s 
                 clients with React.js and Node.js.</ListSub>
        <ListSub>Implemented a RESTful API with Express.js and MongoDB.</ListSub>
        <ListDate>October 2024 - Present</ListDate>
    </MyUl>
          </main>
      </PageContainer>
    );
  }