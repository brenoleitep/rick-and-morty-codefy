import { useEffect, useState } from "react";
import Button from "../../components/Button/button";
import {
  BackgroundContainer,
  Content,
  ImageContainer,
  SpanContainer,
  TypingContainer,
} from "./landingPageStyles";

const LandingPage = () => {
  const [movement, setMovement] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX: mouseX, clientY: mouseY } = event;
    setMovement({ x: mouseX, y: mouseY });
  };

  const handleTouchMove = (event: TouchEvent) => {
    const { clientX: touchX, clientY: touchY } = event.touches[0];
    setMovement({ x: touchX, y: touchY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <BackgroundContainer>
      <Content>
        <TypingContainer>
          Seja bem-vindo ao <br />{" "}
          <SpanContainer>Rick And Morty: Ultimate</SpanContainer>
        </TypingContainer>

        <p>
          Tudo o que você precisa saber sobre o universo Rick and Morty está
          aqui.
        </p>
      </Content>

      <ImageContainer movement={movement}>
        {" "}
        <img
          src="/public/rickmortyportal.png"
          alt="Ricky and Morty saindo do portal"
        />
      </ImageContainer>

      <div>
        <Button text="Ver personagens" redirectTo="/persons" />
      </div>
    </BackgroundContainer>
  );
};

export default LandingPage;
