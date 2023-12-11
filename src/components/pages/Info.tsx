import { Link } from "react-router-dom"
import { UserProps } from "../../types/user"
import { MdLocationPin } from "react-icons/md"

const Info = ({
    login,
    avatar_url,
    location,
    name
}: UserProps) => {
  return (
    <section>
        <Link to={`/${login}`}><img src={avatar_url} alt={login} /></Link>
        <h2>{login}</h2>
        {location && (
            <p>
            <MdLocationPin />
            <span>{location}</span>
        </p>
        )}
        <div>
            <div>
                <p>Nome:</p>
                <p className="name">{name}</p>
            </div>
        </div>
    </section>
  )
}

export default Info