import styled from "styled-components";

export const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  background-color: black;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.colors.white};

  p {
    font-size: 0.6rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const SpanContainer = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-family: "Press Start 2P", cursive;
  font-size: 1.2rem;
  text-shadow: 0px 0px 0px 1px;
  font-weight: 900;
`;

export const TypingContainer = styled.h2`
  font-family: "Press Start 2P", cursive;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0px 0px 0px 1px;
  line-height: 1.5;
`;

export const ImageContainer = styled.div<{
  movement: { x: number; y: number };
}>`
  width: 320px;
  height: auto;
  margin: 0 auto;
  perspective: 800px;

  img {
    width: 100%;
    min-height: 360px;
  }

  @media (min-width: 768px) {
    width: 50%;

    img {
      height: 460px;
    }
  }

  @media (min-width: 1024px) {
    width: 50%;

    img {
      height: 560px;
    }
  }
`;
