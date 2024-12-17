import Button from "../../components/Button/button";
import { Music } from "../../components/Music";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useMoviment3d } from "../../hooks/useMoviment3d";
import {
  BackgroundContainer,
  Content,
  ImageContainer,
  SpanContainer,
  TypingContainer,
} from "./landingPageStyles";

const LandingPage = () => {
  const isMobile = useIsMobile();
  const { movement } = useMoviment3d();

  return (
    <BackgroundContainer>
      <Music />

      <Content>
        <TypingContainer>
          Seja bem-vindo ao <br />{" "}
          <SpanContainer>Rick And Morty: Ultimate</SpanContainer>
        </TypingContainer>

        <p>
          Explore o universo de Rick and Morty de maneira única! Pesquise
          personagens por nome e status, navegue pela lista completa, descubra
          detalhes exclusivos e acompanhe a evolução dessa incrível série. Tudo
          o que você precisa saber sobre os personagens está aqui!
        </p>

        {!isMobile && (
          <>
            <Button text="Descubra tudo" redirectTo="/persons" />
          </>
        )}
      </Content>
      <ImageContainer movement={movement}>
        {" "}
        <img src="/public/giftest.gif" alt="Ricky and Morty saindo do portal" />
      </ImageContainer>

      {isMobile && (
        <>
          <Button text="Ver personagens" redirectTo="/persons" />
        </>
      )}
    </BackgroundContainer>
  );
};

export default LandingPage;
