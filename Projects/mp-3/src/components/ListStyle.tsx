import styled from "styled-components";

const ListMain = styled.li`
    margin: 3vh 0;
    padding: 2vh;
    border-left: 6px solid rgb(0, 43, 7);
    font-size: calc(1px + 1.8vw);
    color: whitesmoke;
    background-color: #333;
`;

const ListSub = styled.li`
    margin: 3vh 0vw 0vw 10vw;
    padding: 2vh;
    border-left: 6px solid rgb(0, 43, 7);
    font-size: calc(1px + 1.2vw);
    color: whitesmoke;
    background-color: #333;
`;

const ListDate = styled.li`
    font-size: calc(1px + 1vw);
    color: whitesmoke;
    border: 0;
    background-color: #2d2d2d;
    text-align: right;
    margin: 3vh 1vw;
`;
export { ListMain, ListSub, ListDate };
