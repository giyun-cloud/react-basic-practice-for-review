import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}  
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: #f2f2f2;
  }
  body {
    background-color: #333;
    color: #f2f2f2;
    padding-top: 50px;
  }
`;

export default GlobalStyle;
