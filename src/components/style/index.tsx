import { createGlobalStyle } from "styled-components";

const EstilosGlobais = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* colocar aqui a fonte */
    color: #fff;
    font-family: 'Montserrat', sans-serif;
  }
  
  body {
    background-color: #161A30;
  }
  
  p {
    text-align: center;
  }
  
  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
`;

export default EstilosGlobais