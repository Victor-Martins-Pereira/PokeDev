import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ContainerPokemon,
  PokemonAbilitys,
  PokemonButton,
  PokemonDescription,
  PokemonImage,
  PokemonInfo,
  PokemonIsLoading,
  PokemonMoves,
  PokemonsName,
  PokemosList,
  PokemosListAbility,
} from "../../styles/PokemonDetails";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [showAllMoves, setShowAllMoves] = useState(false);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!response.ok) {
          throw new Error("Pokémon não encontrado");
        }

        const data = await response.json();
        setPokemon(data);

        const abilitiesData = await Promise.all(
          data.abilities.map(async (item) => {
            const response = await fetch(item.ability.url);
            const abilityData = await response.json();

            const pt = abilityData.flavor_text_entries.find(
              (entry) => entry.language.name === "pt-br"
            );
            const en = abilityData.flavor_text_entries.find(
              (entry) => entry.language.name === "en"
            );

            const text =
              pt?.flavor_text || en?.flavor_text || "Descrição não encontrada.";

            return {
              name: item.ability.name,
              description: text.replace(/\n/g, " ").replace(/\f/g, " ").trim(),
            };
          })
        );

        setAbilities(abilitiesData);

        const speciesResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`
        );

        if (!speciesResponse.ok) {
          throw new Error("Erro ao carregar descrição");
        }

        const speciesData = await speciesResponse.json();

        const ptDescription = speciesData.flavor_text_entries.find(
          (entry) => entry.language.name === "pt-br"
        );
        const enDescription = speciesData.flavor_text_entries.find(
          (entry) => entry.language.name === "en"
        );

        const descriptionText =
          ptDescription?.flavor_text ||
          enDescription?.flavor_text ||
          "Descrição não está disponível.";

        const clearDescription = descriptionText
          .replace(/\n/g, " ")
          .replace(/\f/g, " ")
          .trim();
        setDescription(clearDescription);
      } catch (err) {
        setError(err.message || "Erro ao carregar o Pokémon");
      } finally {
        setIsLoading(false);
      }
    }

    getPokemon();
  }, [id]);

  if (isLoading) {
    return <PokemonIsLoading>Carregando...</PokemonIsLoading>;
  }

  if (error) {
    return (
      <>
        <p>{error}</p>
        <button onClick={() => navigate("/")}>Voltar para Home</button>
      </>
    );
  }

  if (!pokemon) {
    return null;
  }

  return (
    <ContainerPokemon>
      <PokemonButton onClick={() => navigate("/")}>
        Voltar para Home
      </PokemonButton>
      <PokemonInfo>
        <PokemonsName>{pokemon.name}</PokemonsName>
        <PokemonImage
          src={pokemon.sprites.front_default}
          alt={`Imagem do Pokémon ${pokemon.name}`}
        />
        <p>Tipo(s): {pokemon.types.map((t) => t.type.name).join(" |  ")}</p>
      </PokemonInfo>
      <PokemonDescription>
        <PokemonsName>DESCRIÇÃO DO POKÉMON</PokemonsName>
        <p>{description}</p>
      </PokemonDescription>
      <PokemonMoves>
        <PokemonsName>MOVIMENTOS</PokemonsName>
        <PokemosListAbility>
          {(showAllMoves ? pokemon.moves : pokemon.moves.slice(0, 5)).map(
            (m) => (
              <li key={m.move.name}> - {m.move.name}</li>
            )
          )}
        </PokemosListAbility>
        <PokemonButton onClick={() => setShowAllMoves((prev) => !prev)}>
          {showAllMoves ? "Mostrar menos" : "Mostrar todos"}
        </PokemonButton>
      </PokemonMoves>
      <PokemonAbilitys>
        <PokemonsName>HABILIDADES</PokemonsName>
        <PokemosList>
          {abilities.map((ability) => (
            <li key={ability.name}>
              <h3>
                <strong>{ability.name}:</strong>
              </h3>
              <p>{ability.description}</p>
            </li>
          ))}
        </PokemosList>
      </PokemonAbilitys>
    </ContainerPokemon>
  );
};

export default PokemonDetails;
