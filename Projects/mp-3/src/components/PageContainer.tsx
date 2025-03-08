import styled from "styled-components";

const PageContainer = styled.div`
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    overflow: auto;
    background-color: #2d2d2d;

    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;  
    scrollbar-width: none;  
`;



export default PageContainer;