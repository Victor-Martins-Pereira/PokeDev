import { useState, useEffect, useContext } from "react";
import PokemonCards from "../pokemonCards";
import { ThemeContext } from "../../context/ThemeContext";
import {
  Container,
  Title,
  HomeButton,
  DivButton,
  HomeInput,
} from "../../styles/Home.styles";

const Home = () => {
  const [page, setPage] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const fetchPokemons = async (page) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }

      const data = await response.json();

      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const details = await response.json();

          return {
            id: details.id,
            name: details.name,
            image: details.sprites.front_default,
            types: details.types.map((t) => t.type.name),
          };
        })
      );

      if (!data.next) setHasMore(false);

      setPokemonList((prev) => {
        const combined = [...prev, ...pokemonDetails];
        return combined.filter(
          (pokemon, index, self) =>
            index === self.findIndex((p) => p.id === pokemon.id)
        );
      });
    } catch (err) {
      setError("Erro ao carregar Pokémons");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!hasMore) return;
    fetchPokemons(page);
  }, [page]);

  return (
    <Container>
      <Title>PokeDev</Title>

      <DivButton>
        <HomeInput
          type="text"
          placeholder="Qual o tipo de Pokémon você procura?"
        />
        <HomeButton onClick={toggleTheme}>Tema: {theme}</HomeButton>
      </DivButton>

      {error && <p>{error}</p>}

      <PokemonCards pokemonList={pokemonList} />

      <DivButton>
        <HomeButton
          onClick={() => setPage((prev) => prev + 1)}
          disabled={isLoading || !hasMore}
        >
          {isLoading ? "Carregando..." : "Carregar mais"}
        </HomeButton>
      </DivButton>
    </Container>
  );
};

export default Home;
