import {Link, Outlet} from 'react-router-dom';
import User from './User';



const Users = () => {
  return(
    <div>
      <h1>Welcome welcome </h1>
      <h2>
        <Link to="users">
        Users' profile
      </Link>
       </h2>
      <Outlet />
    </div>
  )
}

export default Users 