import {NavLink} from 'react-router-dom';

const Layout = () => {
  return(
    <div>
      <NavLink to="/">Dashboard</NavLink>||
      <NavLink to="users"> ServiceUsers</NavLink>
    </div>
  )
}

export default Layout