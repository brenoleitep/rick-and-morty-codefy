import { render, screen } from "@testing-library/react";
import Card from "./Card";

const character = {
  id: 1,
  name: "Test Character",
  image: "https://example.com/image.jpg",
  status: "Alive",
  episode: ["Episode 1", "Episode 2"],
  origin: "Earth",
  species: "Human",
  location: "Earth",
  description: "This is a test character description.",
};

describe("Card Component", () => {
  beforeEach(() => {
    render(
      <Card
        key={character.id}
        imageUrl={character.image}
        name={character.name}
        status={character.status}
        totalEpisodes={character.episode.length}
        origin={character.origin}
        species={character.species}
        current_location={character.location}
      />
    );
  });

  test("should render all properties when description is provided", () => {
    const locationElement = screen.getAllByText((content) =>
      content.includes(character.location)
    )[0];
    const speciesElement = screen.getAllByText((content) =>
      content.includes(character.species)
    )[0];
    const originElement = screen.getAllByText((content) =>
      content.includes(character.origin)
    )[0];
    const descriptionElement = screen.queryByText((content) =>
      content.includes(character.description || "")
    );

    expect(screen.getByText(character.name)).toBeInTheDocument();

    expect(character.episode).toHaveLength(character.episode.length);

    expect(screen.getByText(character.status)).toHaveTextContent("Alive");
    expect(locationElement).toHaveTextContent("Earth");
    expect(speciesElement).toHaveTextContent("Human");
    expect(originElement).toHaveTextContent("Earth");

    expect(descriptionElement).toBeNull();
  });
});
