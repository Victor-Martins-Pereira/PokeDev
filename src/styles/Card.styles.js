import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardLink = styled(Link)`
  display: block;
`;

export const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  justify-items: center;
`;

export const CardDiv = styled.div`
  ${({ theme }) => theme.layout.flexCenter};
  flex-direction: column;
`;

export const CardList = styled.li`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  ${({ theme }) => theme.components.card};
  ${({ theme }) => theme.layout.flexCenter};
  border: ${({ theme }) => theme.borders.card};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: background-color 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.buttonSecondary};
  }
`;

export const PokemonTitle = styled.h4`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 3px 40px;
  border: ${({ theme }) => theme.borders.info};
  border-radius: ${({ theme }) => theme.radius.sm};
`;

export const PokemonImage = styled.img`
  background-color: ${({ theme }) => theme.colors.cardInnerBackground};
  ${({ theme }) => theme.components.image};
  margin: 8px;
  border: ${({ theme }) => theme.borders.card};
  border-radius: ${({ theme }) => theme.radius.sm};
  object-fit: contain;
`;

export const PokemonType = styled.p`
  background-color: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  ${({ theme }) => theme.components.info};
  ${({ theme }) => theme.layout.flexCenter};
  border: ${({ theme }) => theme.borders.info};
  border-radius: ${({ theme }) => theme.radius.sm};
`;
