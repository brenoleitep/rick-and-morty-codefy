import gifRicky from "../../assets/giftest.gif";
import logo from "../../assets/logo.png";
import Button from "../../components/Button/Button";
import { Music } from "../../components/Music";
import { useIsMobile } from "../../hooks/useIsMobile";
import {
  BackgroundContainer,
  Content,
  ImageContainer,
  TypingContainer,
} from "./landingPageStyles";

const LandingPage = () => {
  const isMobile = useIsMobile();

  return (
    <BackgroundContainer>
      <Music />

      <Content>
        <TypingContainer>
          Seja bem-vindo ao <br /> <img src={logo} alt="Rick and Morty logo" />
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
      <ImageContainer>
        {" "}
        <img src={gifRicky} alt="Ricky and Morty saindo do portal" />
      </ImageContainer>

      {isMobile && (
        <>
          <Button text="Descubra tudo" redirectTo="/persons" />
        </>
      )}
    </BackgroundContainer>
  );
};

export default LandingPage;
