import styled from 'styled-components'
import Header from "./components/Header";
import Nav from "./components/Nav";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import About from "./components/About.tsx";
import Home from "./components/Home";
import Footer from "./components/Footer";

import {Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom'

const PageContainer = styled.div`
  display: flex;
  flex-direction: collumn;
`;

function Root() {
  return (
    <>
      <Header />
      <PageContainer>
        <Nav/>
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/education"} element={<Education />} />
            <Route path={"/certifications"} element={<Certifications />} />
            <Route path={"/work-experiences"} element={<WorkExperience />} />
            <Route path={"/projects"} element={<Projects />} />
        </Routes>
      </PageContainer>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}