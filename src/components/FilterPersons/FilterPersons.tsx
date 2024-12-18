import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import Select from "react-select";
import { useSelect } from "../../hooks/useSelect";
import Card from "../Card/Card";
import {
  AllPersonsContainer,
  Dropdown,
  FilterDropdown,
  FilterDropdownContainer,
  FilterIcon,
  SelectContainer,
  SelectTitle,
} from "./FilterPersons.style";

const FilterPersons = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {
    speciesOptions,
    statusOptions,
    filters,
    handleInputChange,
    handleSelectChange,
    filteredCharacters,
  } = useSelect();

  const handleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <AllPersonsContainer>
      <FilterDropdownContainer>
        <input
          type="text"
          name="name"
          placeholder="Pesquisar"
          value={filters.name}
          disabled={isDropdownOpen}
          onChange={handleInputChange}
        />

        <FilterDropdown>
          {isDropdownOpen && (
            <Dropdown>
              <SelectContainer>
                <SelectTitle>
                  <h2>Filtros</h2>
                  <h2 onClick={handleDropdown}>X</h2>
                </SelectTitle>

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
            </Dropdown>
          )}

          <p>Filtros</p>

          <FilterIcon onClick={handleDropdown}>
            <FaFilter />
          </FilterIcon>
        </FilterDropdown>
      </FilterDropdownContainer>

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
