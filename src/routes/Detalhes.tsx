import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import { UserProps } from '../types/user';
import styled from 'styled-components';
import { IRepoProps } from '../types/IRepoProps';

const DetalhesContainer = styled.section`
background-color: #31304D;
padding: 2rem;
border-radius: 1rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1.2rem;
img {
    width: 140px;
    height: 140px;
    border: 4px solid #644aff;
    border-radius: 50%;
}
p {
    display: flex;
    align-items: center;
    gap: 0.4rem;
}
p span {
    color: #B6BBC4;
    font-weight: bold;
}
a {
    border-radius: 5px;
    opacity: .8;
    transition: .3s;
}
    
a:hover {
    opacity: 1;
}
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 5px;
    font-weight: bold;
  }
`;

const ReposContainer = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: #0366d6;
  }

  p {
    margin-bottom: 5px;
  }
`;

const Detalhes: FC = () => {
  const { userName } = useParams<{ userName: string }>();
  const [user, setUser] = useState<UserProps | null>(null);
  const [repos, setRepos] = useState<IRepoProps[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      setError(false);

      try {
        const response = await api.get(`/users/${userName}`);
        const userData: UserProps = response.data;

        const reposResponse = await api.get(`/users/${userName}/repos`);
        const reposList: IRepoProps[] = reposResponse.data.map((repo: any) => ({
          name: repo.name,
          url: repo.html_url,
          language: repo.language,
          description: repo.description,
          created_at: repo.created_at,
          updated_at: repo.updated_at,
        }));

        setRepos(reposList);
        setUser(userData);
      } catch (e) {
        setError(true);
        console.error(e);
      }
    };

    fetchUserDetails();
  }, [userName]);

  return (
    <DetalhesContainer>
      {user && (
        <div>
          <UserContainer>
            <img src={user.avatar_url} alt={user.login} />
            <UserInfo>
              <h2>{user.login}</h2>
              <p>ID: {user.id}</p>
              {user.location && <p>Localização: {user.location}</p>}
              <p>Seguidores: {user.followers}</p>
              <p>Repositórios Públicos: {user.public_repos}</p>
            </UserInfo>
          </UserContainer>
          <div>
          <p>Repositórios:</p>
          <ReposContainer>
            {repos.map((repo, index) => (
              <li key={index}>
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
                <p>Linguagem: {repo.language}</p>
                <p>Descrição: {repo.description}</p>
                <p>Data de Criação: {repo.created_at}</p>
                <p>Último Push: {repo.updated_at}</p>
              </li>
            ))}
          </ReposContainer>
          </div>
        </div>
      )}
      {error && <p>Erro ao carregar detalhes do usuário.</p>}
    </DetalhesContainer>
  );
};

export default Detalhes;