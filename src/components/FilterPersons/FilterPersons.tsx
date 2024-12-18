import { useState } from "react";
import { useFetchCharacters } from "../../hooks/useFetchCharacters";
import Card from "../Card/Card";
import { AllPersonsContainer } from "./FilterPersons.style";

const FilterPersons = () => {
  const { data, error, isLoading } = useFetchCharacters();
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    species: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>F...</p>;

  const filteredCharacters = data?.results.filter((character) => {
    const matchesName = character.name
      ?.toLowerCase()
      .includes(filters.name.toLowerCase());
    const matchesSpecies = character.species
      ?.toLowerCase()
      .includes(filters.species.toLowerCase());
    const matchesStatus = character.status
      ?.toLowerCase()
      .includes(filters.status.toLowerCase());

    return matchesName && matchesSpecies && matchesStatus;
  });

  return (
    <AllPersonsContainer>
      <h2>Personagens filtrados</h2>

      <div>
        <input
          type="text"
          name="name"
          placeholder="Filtrar por nome"
          value={filters.name}
          onChange={handleInputChange}
        />
        <select
          name="species"
          value={filters.species}
          onChange={handleInputChange}
        >
          <option value="">Todas as espécies</option>
          <option value="Human">Humano</option>
          <option value="Alien">Alien</option>
        </select>
        <select
          name="status"
          value={filters.status}
          onChange={handleInputChange}
        >
          <option value="">Todos os status</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Morto</option>
        </select>
      </div>

      <div>
        {filteredCharacters?.length ? (
          filteredCharacters.map((character) => (
            <Card
              key={character.id}
              imageUrl={character.image ? character.image : ""}
              name={character.name ? character.name : ""}
              status={character.status ? character.status : ""}
              totalEpisodes={
                character.episode?.length ? character.episode.length : 0
              }
              origin={character.origin?.name ? character.origin.name : ""}
              species={character.species ? character.species : ""}
              current_location={
                character.location?.name ? character.location.name : ""
              }
            />
          ))
        ) : (
          <p>Nenhum personagem encontrado com esses filtros.</p>
        )}
      </div>
      <Card
        imageUrl="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        name="Rick Sanchez"
        status="Vivo"
        totalEpisodes={51}
        origin="C-137 Earth"
        species="Human"
        current_location="Earth"
      />
    </AllPersonsContainer>
  );
};

export default FilterPersons;
