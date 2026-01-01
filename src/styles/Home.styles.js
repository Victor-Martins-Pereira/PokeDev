import styled from "styled-components";

export const Container = styled.main`
  max-width: 1250px;
  width: 100%;
  ${({ theme }) => theme.layout.flexCenter};
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  border: ${({ theme }) => theme.borders.container};
  border-radius: ${({ theme }) => theme.radius.lg};
  margin: ${({ theme }) => theme.spacing.lg} auto;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.layout.flexCenter};
  font-size: ${({ theme }) => theme.typography.md};
  letter-spacing: 0.2rem;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const HomeInput = styled.input`
  background: ${({ theme }) => theme.colors.buttonSecondary};
  color: ${({ theme }) => theme.colors.textInverted};
  width: 22.5rem;
  height: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  border: ${({ theme }) => theme.borders.button};
  border-radius: ${({ theme }) => theme.radius.md};
  letter-spacing: 0.1rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textInverted};
  }
`;

export const HomeButton = styled.button`
  width: 10rem;
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

export const DivButton = styled.div`
  ${({ theme }) => theme.layout.flexCenter};
  gap: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.lg} 0;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 85%;
    input,
    button {
      width: 100%;
    }
`;
