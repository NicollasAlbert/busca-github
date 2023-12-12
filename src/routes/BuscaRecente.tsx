import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RecenteContainerLi = styled.li`
  background-color: #31304D;
  margin-top: 10px;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 8rem;
  img {
      width: 140px;
      height: 140px;
      border: 4px solid #644aff;
      border-radius: 50%;
  }
  div {
    display: flex;
    align-items: start;
    flex-direction: column;
  }
`;

const BuscaRecente: FC = () => {
  const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');

  return (
    <section>
      <h2>Histórico de Buscas</h2>
      <ul>
        {history.map((profile: any, index: number) => (
          <Link to={`/user/${profile.userName}`}>
          <RecenteContainerLi key={index}>
            <img src={profile.avatar_url} alt={profile.login} />
            <div>
              <p>Nome: {profile.name}</p>
              <p>Login: {profile.login}</p>
              <p>Localização: {profile.location}</p>
              <p>Repositórios Públicos: {profile.public_repos}</p>
            </div>
            
          </RecenteContainerLi>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default BuscaRecente;
