import { FC } from 'react';

const Historico: FC = () => {
  const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');

  return (
    <section>
      <h2>Histórico de Buscas</h2>
      <ul>
        {history.map((profile: any, index: number) => (
          <li key={index}>
            <img src={profile.avatar_url} alt={profile.login} />
            <div>
              <p>Nome: {profile.name}</p>
              <p>Login: {profile.login}</p>
              <p>Localização: {profile.location}</p>
              <p>Repositórios Públicos: {profile.public_repos}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Historico;
