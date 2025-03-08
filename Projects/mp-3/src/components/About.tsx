import PageContainer from "./PageContainer";
import styled from "styled-components";
import { ListMain} from "./ListStyle";

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
export default function About() {
  return (
    <>
      <PageContainer>
          <main>
          <Title id="title">About</Title>

          <MyUl>
            <ListMain>Name: Matheus Alpha de Andrade Souza</ListMain>
            <ListMain>Date of Birth: 29 AUG 2001</ListMain>
            <ListMain>Location of Birth: BA, Brazil</ListMain>
            <ListMain>Location: Boston, MA</ListMain>
            <ListMain>Education: Boston University</ListMain>
            <ListMain>Major: Computer Science and Economics</ListMain>
          </MyUl>
          </main>
      </PageContainer>
    </>
  );
}