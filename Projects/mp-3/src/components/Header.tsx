import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    font-size: calc(1px + 2vw);
    padding: 1vh 1vw;
    background-color: rgb(0, 43, 7);
    color: whitesmoke;
`;

const Title = styled.h1`
  font-size: calc(1px + 3vw);
  margin: 0;
  `;
const Sub = styled.h3`
  font-size: calc(1px + 2vw);
    margin: 0;
`;

export default function Header() {
  return (
    <>
      <StyledHeader>
          <Title>Matheus Alpha de Andrade Souza</Title>
          <Sub>Online Resume</Sub>
      </StyledHeader>
    </>
  );
}