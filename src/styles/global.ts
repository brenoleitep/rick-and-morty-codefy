import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Smooth scrolling behavior */
  html {
    scroll-behavior: smooth;
  }

  /* Font-family padrão */
  body {
    font-family: "Press Start 2P", cursive;
    margin: 0;
    background-color: black;
  }

  /* Remove estilos padrão para listas */
  ul, ol {
    list-style: none;
  }

  /* Links estilizados */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Imagens responsivas */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Definindo estilos para inputs e buttons */
  input, button {
    font-family: inherit;
    outline: none;
  }

  button {
    cursor: pointer;
  }

`;
