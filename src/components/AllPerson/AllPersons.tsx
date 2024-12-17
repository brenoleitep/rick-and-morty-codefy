import { useFetchCharacters } from "../../hooks/useFetchCharacters";
import Card from "../Card/Card";
import { AllPersonsContainer } from "./AllPersons.style";

const AllPersons = () => {
  const { data, error, isLoading } = useFetchCharacters();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>F...</p>;

  return (
    <AllPersonsContainer>
      <h2>Personagens filtrados por: Vivos</h2>

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

export default AllPersons;
