import {
  CardContainer,
  CardDiv,
  CardLink,
  CardList,
  PokemonImage,
  PokemonTitle,
  PokemonType,
} from "../../styles/Card.styles";
import { PokemonIsLoading } from "../../styles/PokemonDetails";

const PokemonCards = ({ pokemonList = [] }) => {
  if (pokemonList.length === 0) {
    return <PokemonIsLoading>Nenhum Pokémon encontrado.</PokemonIsLoading>;
  }
  return (
    <CardContainer>
      {pokemonList.map((pokemon) => (
        <CardList key={pokemon.id}>
          <CardLink to={`/pokemon/${pokemon.id}`}>
            <CardDiv>
              <PokemonTitle>{pokemon.name}</PokemonTitle>
              <PokemonImage
                src={pokemon.image}
                alt={`Imagem do pokémon ${pokemon.name}`}
              />
              <PokemonType>{pokemon.types.join(" | ")}</PokemonType>
            </CardDiv>
          </CardLink>
        </CardList>
      ))}
    </CardContainer>
  );
};

export default PokemonCards;
