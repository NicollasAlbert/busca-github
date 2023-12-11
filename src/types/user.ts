export type UserProps = {
    avatar_url: string;
    login: string;
    name: string;
    location: string;
    id: number;
    followers: number;
    repos: number;
    repos_list: Array<string>;
}