import Select from "react-select";
import { useSelect } from "../../hooks/useSelect";
import Card from "../Card/Card";
import { AllPersonsContainer, SelectContainer } from "./FilterPersons.style";

const FilterPersons = () => {
  const {
    speciesOptions,
    statusOptions,
    filters,
    handleInputChange,
    handleSelectChange,
    filteredCharacters,
  } = useSelect();

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
