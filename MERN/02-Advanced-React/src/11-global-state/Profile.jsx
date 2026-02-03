import { useContext } from 'react'
import UserContext from './UserContext'

const Profile = () => {
    const user = useContext(UserContext);
  return (
    <div>{user.name} {user.role}</div>
  )
}

export default Profile