import PageContainer from "./PageContainer";
import styled from "styled-components";
import { ListMain, ListSub, ListDate } from "./ListStyle";
import { useState } from "react";

const MyUl = styled.ul`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  padding: 1vh 1vw 1vh 3vw;
  margin: 0;
`;

const Title = styled.h1`
  font-size: calc(1px + 2vw);
  margin: 1.5vh auto;
  padding: 1vh 1vw;
  color: whitesmoke;
`;

const StyledInput = styled.input`
  margin: 1vh 1vw;
  padding: 1vh 1vw;
  font-size: calc(1px + 1vw);
  border-radius: 5px;
  border: 1px solid #ccc;
   width: 20vw;
  height: 5vh;
  text-align: center;
`;

const Result = styled.p<{ isNegative: boolean }>`
  margin: 1vh 1vw;
  padding: 1vh 1vw;
  font-size: calc(1px + 1vw);
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.isNegative ? "red" : "whitesmoke")};
  color: ${(props) => (props.isNegative ? "white" : "black")};
`;

const StyledButton = styled.button`
  margin: 1vh 1vw;
    padding: 1vh 1vw;
    font-size: calc(1px + 1vw);
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #333;
    color: whitesmoke;
    cursor: pointer;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ButtonBox = styled.div`
  display: flex;
    flex-direction: row;
    justify-content: center;
`;
export default function Projects() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  function Addition() {
    const num1 = Number(input1);
    const num2 = Number(input2);
    setResult(String(num1 + num2));
  }

  function Multiplication() {
    const num1 = Number(input1);
    const num2 = Number(input2);
    setResult(String(num1 * num2));
  }

  function Subtraction() {
    const num1 = Number(input1);
    const num2 = Number(input2);
    setResult(String(num1 - num2));
  }

  function Division() {
    const num1 = Number(input1);
    const num2 = Number(input2);
    setResult(String(num1 / num2));
  }

  function Power() {
    let num1 = Number(input1);
    let num2 = Number(input2);

    let result = 1;
    for (let i = 0; i < num2; i++) {
      result = result * num1;
    }
    setResult(String(result));
  }

  const Clear = () => {
    setInput1("");
    setInput2("");
    setResult("");
  };

  const isNegative = Number(result) < 0;

  return (
    <PageContainer>
     
     <Title>Projects</Title>

        <MyUl>
          <ListMain>Calculator</ListMain>
          <ListSub>
            <InputBox>
            <StyledInput
              id="input-1"
              type="number"
              placeholder="Enter Input 1"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
            <StyledInput
              id="input-2"
              type="number"
              placeholder="Enter Input 2"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
            </InputBox>
            <ButtonBox>
            <StyledButton onClick={() => Addition()}>+</StyledButton>
            <StyledButton onClick={() => Subtraction()}>-</StyledButton>
            <StyledButton onClick={() => Multiplication()}>*</StyledButton>
            <StyledButton onClick={() => Division()}>/</StyledButton>
            <StyledButton onClick={() => Power()}>^</StyledButton>
            <StyledButton onClick={() => Clear()}>Clear</StyledButton>
            </ButtonBox>
            <Result 
                id="calc-output" 
                isNegative={isNegative}
                
            >
             Result: {result}
            </Result>
            </ListSub>
            
          <ListMain>
            Analysis of Chelsea's Water Consumption Statistics
          </ListMain>
          <ListSub>
            Analyzed the water consumption statistics of Chelsea, MA, and
            developed a report on the findings.
          </ListSub>
          <ListSub>
            Used Python and Pandas to clean and analyze the data.
          </ListSub>
          <ListDate>September 2023 - December 2023</ListDate>
          <ListMain>Simple Neural Network for Digit Recognition</ListMain>
          <ListSub>
            Developed a basic neural network using Python and TensorFlow to
            classify handwritten digits from the MNIST dataset.
          </ListSub>
          <ListSub>
            Trained the model with various activation functions and optimizers
            to improve accuracy, achieving over 95% accuracy on the test set.
          </ListSub>
          <ListDate>October 2024 - December 2024</ListDate>
        </MyUl>
     
    </PageContainer>
  );
}
