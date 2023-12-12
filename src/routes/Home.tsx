import { FC, useState } from 'react';
import Search from '../components/pages/Search';
import User from '../components/pages/User';
import Error from '../components/pages/Error';
import { useNavigate } from 'react-router-dom';
import { UserProps } from '../types/user';
import api from '../services/api';

const Home: FC = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();


const loadUser = async (userName: string) => {
  setError(false);
  setUser(null);

  try {
    const res = await api.get(`/users/${userName}`);

    const data = res.data;

    const { avatar_url, login, location, name, id, followers, public_repos, repos_list } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      name,
      id,
      followers,
      public_repos,
      repos_list,
    };

    setUser(userData);
  } catch (e) {
    setError(true);
    console.error(e);
    return;
  }
};


  const navigateToDetails = (userName: string) => {
    navigate(`/user/${userName}`);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && (
        <div>
          <User {...user} onClick={() => navigateToDetails(user.login)} />
        </div>
      )}
      {error && <Error />}
    </div>
  );
};

export default Home;
