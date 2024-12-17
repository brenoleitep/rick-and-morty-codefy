import { BackgroundContainer, Content } from "./landingPageStyles";

const LandingPage = () => {
  return (
    <BackgroundContainer>
      <Content>
        <h2>Seja bem-vindo ao Rick and Morty: Ultimate.</h2>

        <p>
          Aqui você vai ter uma imersão completa do universo Rick and Morty.
          Você poderá navegar por todos os personagens, podendo:
        </p>

        <ul>
          <li>Pesquisar por nome e status</li>
          <li>Navegar na lista de personagens</li>
          <li>Visualizar o total de personagens do universo</li>
          <li>Visualizar a página própria de um personagem específico</li>
        </ul>

        <p>
          Se você não conhece Rick and Morty,{" "}
          <a
            href="https://www.adultswim.com/videos/rick-and-morty"
            target="_blank"
            rel="noopener noreferrer"
          >
            clique aqui
          </a>{" "}
          para saber mais sobre.
        </p>
      </Content>
    </BackgroundContainer>
  );
};

export default LandingPage;
