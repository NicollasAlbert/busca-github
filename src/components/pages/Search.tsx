type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { useState, KeyboardEvent } from 'react';
import { BsSearch } from 'react-icons/bs';
import styled from "styled-components";

const SectionEstilizado = styled.section `
  background-color: #2b3566;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  p {
      color: #9da5d1;
  }
`;

const DivEstilizado = styled.div `
  display: flex;
  gap: 0.5rem;
  input, button {
      padding: .6rem;
      border-radius: 3px;
      border: none;
      color: #2b3566;
  }
  button {
      background-color: #0e1129;
      cursor: pointer;
  }
`;

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");
  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter") {
      loadUser(userName);
    }
  }

  return (
    <SectionEstilizado>
        <h2>Busque por um usuário:</h2>
        <DivEstilizado>
            <input type="text" placeholder='Digite o nome do usuário' onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handleKeyDown}
            />
            <button onClick={() => loadUser(userName)}>
                <BsSearch />
            </button>
        </DivEstilizado>
    </SectionEstilizado>
  )
}

export default Search