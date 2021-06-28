import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  body {
    background-color: #333;
    padding-top: 50px;
    color: white;
  }
`;

export default GlobalStyle;
