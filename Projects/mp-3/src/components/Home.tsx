import styled from "styled-components";
import pic1 from "../assets/pic1.jpg";
import PageContainer from "./PageContainer";

const RowBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
padding: 3vh 0;

`;

const Image = styled.img`
border : 1px solid whitesmoke;
width: 35vh;
height: 35vh;
margin: 1vh 1vw 0 5vw;
`;

const Title = styled.h1`
font-size: calc(1px + 2vw);
margin: 1.5vh auto;
padding: 1vh 1vw;
color: whitesmoke;
`;

const Text = styled.p`
text-align: justify;
font-size: calc(1px + 1.5vw);
width: 80%;
margin: 5vh auto;
color: whitesmoke;
line-height: 1.5;
`;
export default function Home() {

  return (
    <>
      <PageContainer>
        <main>
          <Title>Welcome to my Resume Website!</Title>
          <RowBox>
          <Image src={pic1} alt="A picture of Matheus" />
          

            <div id="main-text">
              <Text>
                My name is <strong>Matheus Alpha de Andrade Souza</strong>, and I am Senior
                studying Computer Science and Economics at Boston University. I
                am a Brazilian student who is passionate about technology and
                programming and I am looking for opportunities to further my
                academic and professional career.
              </Text>
            </div>
          
    </RowBox>
          <Text>
            I am currently looking for internships in the field of software
            development and data analysis.
          </Text>

        </main>
      </PageContainer>
    </>
  );
}
