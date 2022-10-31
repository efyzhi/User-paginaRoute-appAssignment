import './App.css'
import {Routes, Route} from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Users from './Pages/Users';
import User from './Pages/User';





export default function App() {

  
  

  return (
    <main>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} >
          <Route path=":userId" element={<User />} />
        </Route>
      </Routes>
    </main>
  )
}
