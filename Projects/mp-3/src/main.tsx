import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: rgb(20, 20, 20);
    font-family: "Trebuchet MS", monospace; 
}
`;
const PageWrapper = styled.main`

  width: 90%;
  background-color: red;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <PageWrapper>
      <App />
    </PageWrapper>
  </StrictMode>
);