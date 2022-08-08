import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  padding: 0 2%;
  background-color: #F5F5F5;
  font-family: 'Inter', sans-serif;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

`;

export default GlobalStyles;