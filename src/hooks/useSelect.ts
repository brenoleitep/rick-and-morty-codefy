import { useState } from "react";
import { SingleValue } from "react-select";
import { useFetchCharacters } from "./useFetchCharacters";

export const useSelect = () => {
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

  const { data } = useFetchCharacters();
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    species: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (
    selectedOption: SingleValue<{ value: string; label: string }>,
    name: keyof typeof filters,
  ) => {
    setFilters((prev) => ({
      ...prev,
      [name]: selectedOption?.value || "",
    }));
  };

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

  return {
    filteredCharacters,
    handleSelectChange,
    handleInputChange,
    speciesOptions,
    statusOptions,
    filters,
    setFilters,
  };
};
