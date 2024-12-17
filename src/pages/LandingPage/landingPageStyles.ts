import styled from "styled-components";

export const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  p {
    font-size: 0.6rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
`;

export const SpanContainer = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Press Start 2P", cursive;
  font-size: 1.2rem;
  text-shadow: 0px 0px 0px 1px;
  font-weight: 900;
`;

export const TypingContainer = styled.h2`
  font-family: "Press Start 2P", cursive;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 0px 0px 0px 1px;
  line-height: 1.5;
  text-align: center;
`;

export const ImageContainer = styled.div<{
  movement: { x: number; y: number };
}>`
  width: 320px;
  height: auto;
  margin: 0 auto;
  perspective: 800px; /* Define a profundidade para o efeito 3D */

  img {
    width: 100%;
    height: auto;
    transition: transform 0.1s ease-out; /* Suaviza o movimento */
    transform: ${({ movement }) =>
      `rotateX(${(movement.y - window.innerHeight / 2) / 20}deg) 
       rotateY(${(movement.x - window.innerWidth / 2) / 20}deg)`};
  }
`;
