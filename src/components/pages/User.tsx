import { FC } from "react";
import { UserProps } from "../../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

import styled from "styled-components";

const SectionContainer = styled.section `
    background-color: #161A30;
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
        border: 4px solid #31304D;
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

const DivContainer = styled.div `
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
        background-color: #B6BBC4;
        padding: .4rem .8rem;
        border-radius: 3px;
        color: #161A30;
    }
        
`;

type UserPropsWithOnClick = UserProps & {
    onClick?: () => void;
  };
  
  const User: FC<UserPropsWithOnClick> = ({
    login,
    avatar_url,
    location,
    name,
  }: UserPropsWithOnClick) => {
    return (
      <SectionContainer>
        <Link to={`/user/${login}`}>
          <img src={avatar_url} alt={login} />
        </Link>
        <h2>
          <Link to={`/${login}`}>{login}</Link>
        </h2>
        {location && (
          <p>
            <MdLocationPin />
            <span>{location}</span>
          </p>
        )}
        <DivContainer>
          <div>
            <p>Nome:</p>
            <span className="name">{name}</span>
          </div>
        </DivContainer>
      </SectionContainer>
    );
  };
  
  export default User;