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
export default function Education() {
    return (
      <PageContainer>
          <main>
            <Title>Education</Title>
            <MyUl>
                <ListMain>Undergraduate: Boston University</ListMain>
                <ListSub>B.A. in Computer Science</ListSub>
                <ListSub>B.A. in Economics</ListSub>
                <ListDate>Boston, MA. 2021 - Present</ListDate>
                <ListMain>High School: Escola Viva</ListMain>
                <ListDate>São Paulo, Brazil. 2016 - 2019</ListDate>
            </MyUl>
          </main>
      </PageContainer>
    );
  }