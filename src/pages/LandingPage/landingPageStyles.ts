import styled from "styled-components";

export const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &::before {
    content: "";
    background-image: url("/public/gif.gif");
    background-size: cover;
    background-position: center;
    filter: blur(8px);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  padding: 2rem;
  color: #ffffff;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p,
  li {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li::before {
    content: "✓ ";
    color: #4caf50;
  }
`;
