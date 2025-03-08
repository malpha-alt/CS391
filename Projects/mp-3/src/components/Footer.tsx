import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: rgb(0, 43, 7);
    color: whitesmoke;
    padding: 1vh 1vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const StyledP = styled.a`
  a {
    margin: 0 0.5vw;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledP>
        All Rights Reserved by Matheus A A S
        <a href="https://www.linkedin.com/in/malphadas/" target="_blank">
          Credits
        </a>
        &copy;
      </StyledP>
    </StyledFooter>
  );
};

export default Footer;