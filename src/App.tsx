import "./App.css";
import { useFetchCharacters } from "./hooks/useFetchCharacters";

function App() {
  const { data, error, isLoading } = useFetchCharacters();

  console.log(data);
  if (error) return <p>Erro ao buscar personagens!</p>;

  if (isLoading) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Personagens de Rick and Morty</h1>

      <ul>
        {data?.results.map((character) => (
          <li key={character.id}>
            <h2>{character.name}</h2>
            <p>{character.species}</p>
            <img src={character.image} alt={character.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
