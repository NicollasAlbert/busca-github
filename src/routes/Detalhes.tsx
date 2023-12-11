import { UserProps } from "../types/user";
import Search from "../components/pages/Search";
import { useState } from "react";
import User from "../components/pages/User";
import Error from "../components/pages/Error";
import axios from "axios";
import Info from "../components/pages/Info";

const Detalhes = () => {
  const [user, setUser] = useState<UserProps | null >(null);
  const [error, setError] = useState(false);

  const loadUser = async(userName: string) => {
    setError(false);
    setUser(null);

    try{
      
      const res = await axios.get(`https://api.github.com/users/${userName}`)

      const data = res.data;

        const {avatar_url, login, location, name, id, followers, repos, repos_list} = data;

        const userData: UserProps = {
          avatar_url,
          login,
          location,
          name,
          id,
          followers,
          repos,
          repos_list
        }
      setUser(userData);

    } catch(e) {
      setError(true);
      console.log(e);
      return;
      
    }
  };

  return (
    
    <div>
      {/* <h1>{loadUser()}</h1> */}
      {/*<Search loadUser={loadUser} />*/}
      <h1>{user?.avatar_url}</h1>
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  )
}

export default Detalhes