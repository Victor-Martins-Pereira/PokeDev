import styled from "styled-components";

export const ContainerPokemon = styled.main`
  max-width: 1250px;
  width: 100%;
  ${({ theme }) => theme.layout.flexCenter};
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  border: ${({ theme }) => theme.borders.container};
  border-radius: ${({ theme }) => theme.radius.lg};
  margin: ${({ theme }) => theme.spacing.lg} auto;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};
`;

export const PokemonButton = styled.button`
  width: 10rem;
  font-weight: 600;
  height: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: ${({ theme }) => theme.borders.button};
  border-radius: ${({ theme }) => theme.radius.md};
  ${({ theme }) => theme.layout.flexCenter};
  transition: background-color 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokemonsName = styled.p`
  background-color: ${({ theme }) => theme.colors.invertedBackground};
  color: ${({ theme }) => theme.colors.textInverted};
  padding: 7px 80px;
  font-size: 1.2rem;
  font-weight: 600;
  border: ${({ theme }) => theme.borders.info};
  border-radius: ${({ theme }) => theme.radius.sm};
`;

export const PokemonImage = styled.img`
  background-color: ${({ theme }) => theme.colors.cardInnerBackground};
  width: 10rem;
  margin: ${({ theme }) => theme.spacing.md};
  object-fit: contain;
  border: ${({ theme }) => theme.borders.card};
  border-radius: ${({ theme }) => theme.radius.sm};
`;

export const PokemonDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 15px;
`;

export const PokemonMoves = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokemonAbilitys = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokemosListAbility = styled.ul`
  max-width: 1000px;
  margin: ${({ theme }) => theme.spacing.md} 0;
  padding: ${({ theme }) => theme.spacing.md};
  border: 3px dashed ${({ theme }) => theme.colors.textPrimary};
  border-radius: ${({ theme }) => theme.radius.md};
  column-count: 5;
  column-gap: 30px;
  column-rule: 1px solid ${({ theme }) => theme.colors.textPrimary};
  justify-items: center;
  @media (max-width: 600px) {
    column-count: 2;
  }
`;

export const PokemosList = styled.ul`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin: 15px 0;
  padding: ${({ theme }) => theme.spacing.md};
  border: 3px dashed ${({ theme }) => theme.colors.textPrimary};
  border-radius: ${({ theme }) => theme.radius.md};
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const PokemonIsLoading = styled.h2`
  ${({ theme }) => theme.layout.flexCenter};
  color: ${({ theme }) => theme.colors.textPrimary};
`;
