import { useState } from "react";
import Select, { SingleValue } from "react-select";
import { useFetchCharacters } from "../../hooks/useFetchCharacters";
import Card from "../Card/Card";
import { AllPersonsContainer, SelectContainer } from "./FilterPersons.style";

// Opções para o react-select
const speciesOptions = [
  { value: "", label: "Todas as espécies" },
  { value: "Human", label: "Humano" },
  { value: "Alien", label: "Alien" },
];

const statusOptions = [
  { value: "", label: "Todos os status" },
  { value: "Alive", label: "Vivo" },
  { value: "Dead", label: "Morto" },
];

const FilterPersons = () => {
  const { data, error, isLoading } = useFetchCharacters();
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    species: "",
  });

  // Atualiza os filtros com base no input de texto
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Atualiza filtros com react-select
  const handleSelectChange = (
    selectedOption: SingleValue<{ value: string; label: string }>,
    name: keyof typeof filters
  ) => {
    setFilters((prev) => ({
      ...prev,
      [name]: selectedOption?.value || "",
    }));
  };

  // Exibição de loading ou erros
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Erro ao carregar os personagens.</p>;

  // Filtrando os personagens
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
      <div>
        <input
          type="text"
          name="name"
          placeholder="Filtrar por nome"
          value={filters.name}
          onChange={handleInputChange}
        />
        <SelectContainer>
          <Select
            options={speciesOptions}
            placeholder="Filtrar por espécie"
            onChange={(option) => handleSelectChange(option, "species")}
            isClearable
          />

          <Select
            options={statusOptions}
            placeholder="Filtrar por status"
            onChange={(option) => handleSelectChange(option, "status")}
            isClearable
          />
        </SelectContainer>
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
    </AllPersonsContainer>
  );
};

export default FilterPersons;
