# 🧩 PokeDev

PokeDev é uma aplicação web inspirada em uma Pokédex, desenvolvida como parte do desafio técnico da DevQuest.  
O projeto consome a **PokeAPI** para listar Pokémons, exibir detalhes individuais e oferecer uma experiência interativa com suporte a **tema claro e escuro**.

---

## 🎯 Objetivo do Projeto

O objetivo do PokeDev é demonstrar habilidades em:

- Consumo de APIs REST
- Componentização com React
- Gerenciamento de estado
- Boas práticas de organização de código
- Estilização moderna com styled-components
- Tomada de decisões técnicas durante o desenvolvimento

---

## ⚙️ Funcionalidades

- ✅ Listagem paginada de Pokémons
- ✅ Exibição de nome, imagem e tipos
- ✅ Página de detalhes do Pokémon
- ✅ Descrição do Pokémon (PT-BR quando disponível)
- ✅ Lista de movimentos com opção "Mostrar mais / menos"
- ✅ Exibição de habilidades com descrição
- ✅ Tratamento de erros e loading
- ✅ Tema claro e escuro (Dark / Light Mode)
- ✅ Estilização inspirada em uma Pokédex

---

## 🛠️ Tecnologias Utilizadas

- **React**  
  Utilizado para construção da interface com componentes reutilizáveis.

- **React Router DOM**  
  Responsável pela navegação entre páginas (Home e Detalhes do Pokémon).

- **Styled-components**  
  Utilizado para estilização dos componentes, permitindo:

  - Temas dinâmicos
  - Estilos reutilizáveis
  - Melhor organização do CSS

- **Context API**  
  Utilizada para gerenciar o estado global do tema (light/dark).

- **PokeAPI**  
  API pública utilizada para obter dados dos Pokémons.

- **Vite**  
  Ferramenta de build escolhida por sua rapidez e simplicidade.

---

## 🧠 Decisões Técnicas

- Separação clara entre **componentes**, **estilos** e **contextos**
- Criação de temas (light e dark) centralizados
- Uso de `Promise.all` para otimizar múltiplas requisições
- Tratamento de erros e estados de carregamento para melhor UX
- Paginação simples para evitar carregamento excessivo de dados
- Código focado em legibilidade e manutenção

---

## 🚀 Como rodar o projeto localmente

### Pré-requisitos

- Node.js instalado
- Git instalado

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/pokedev.git

# Entre na pasta do projeto
cd pokedev

# Instale as dependências
npm install

# Rode o projeto
npm run dev

```

## 🔗 Deploy
A aplicação está disponível em:
https://victor-martins-pereira.github.io/PokeDev/

## 💻 Autor

**Desenvolvido por [Victor Martins Pereira](https://github.com/Victor-Martins-Pereira)**

---

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/victor-martins-pereira-dev/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Victor-Martins-Pereira)
