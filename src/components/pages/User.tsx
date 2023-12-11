import { UserProps } from "../../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

import styled from "styled-components";

const SectionEstilizada = styled.section `
    background-color: #2b3566;
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
    p svg {
        fill: #4ed8c7;
        font-size: 1.5rem;
    }
    p span {
        color: #9da5d1;
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

const DivEstilizado = styled.div `
    display: flex;
    div {
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        gap: .4rem;
    }
    p {
        justify-content: center;
    }
    .name {
        background-color: #9da5d1;
        padding: .4rem .8rem;
        border-radius: 3px;
        color: #17191f;
    }
        
`;

const User = ({
    login,
    avatar_url,
    location,
    name
}: UserProps) => {
  return (
    <SectionEstilizada>
        <Link to={`/${login}`}><img src={avatar_url} alt={login} /></Link>
        <h2>{login}</h2>
        {location && (
            <p>
            <MdLocationPin />
            <span>{location}</span>
        </p>
        )}
        <DivEstilizado>
            <div>
                <p>Nome:</p>
                <p className="name">{name}</p>
            </div>
        </DivEstilizado>
    </SectionEstilizada>
  )
}
export default User