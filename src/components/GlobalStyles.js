import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  body {
    padding-top:50px ;
    padding-left: 5px;
    background-color: rgba(30,30,30,1);
    color: #fff;
  }
`;

export default GlobalStyles;
