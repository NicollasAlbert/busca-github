import Navbar from "./components/pages/Navbar";
import { Outlet } from "react-router-dom";
import EstilosGlobais from "./components/style";
import styled from "styled-components";

const MainEstilizado = styled.main `
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

function App() {

  return (
    <>
    <EstilosGlobais />
      <Navbar />
      <MainEstilizado>
        <Outlet />
      </MainEstilizado>
    </>
  )
}

export default App
