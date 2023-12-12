export type UserProps = {
    avatar_url: string;
    login: string;
    name: string;
    location: string;
    id: number;
    followers: number;
    public_repos: number;
    repos_list: Array<string>;
}