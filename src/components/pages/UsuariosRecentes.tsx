import api from "../../services/api";

const addProfileToHistory = async (userName: string) => {
  try {
    const userData = await fetchUserData(userName);

    const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    const updatedHistory = [
      ...history,
      {
        userName,
        avatar_url: userData.avatar_url,
        name: userData.name,
        login: userData.login,
        location: userData.location,
        public_repos: userData.public_repos,
      },
    ];

    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  } catch (error) {
    console.error('Erro ao buscar informações do usuário:', error);
  }
};

const fetchUserData = async (userName: string) => {
  const response = await api.get(`/users/${userName}`);
  return response.data;
};

export default addProfileToHistory;
