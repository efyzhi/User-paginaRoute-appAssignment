import React, {useState, useEffect} from 'react';
import { Link, Outlet, useParams, useSearchParams, useLocation} from 'react-router-dom';
import axios from 'axios';
import "../Styles/Users.css"



export default function ServiceUsers() {
  
  const [page, setPage] = useState(1)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const [searchUser, setSearchUser] = useSearchParams()
  const location = useLocation()
  let {userId} = useParams()

  const PER_PAGE = 10
  const total = users?.results?.length
  const pages = Math.ceil(total/PER_PAGE) 
  const skip = page * PER_PAGE - PER_PAGE
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const {data:response} = await axios.get('https://randomuser.me/api/?results=50')
        setUsers(response);
      }catch (error){
        console.error(error.message)
      }
      setLoading(false)
    }
    fetchData()
  }, []) 


   const handlePrev = () => {
     setPage((prev) => prev - 1)
   }
   
   const handleNext = () => {
     setPage((prev) => prev + 1)
   }
      
   return (
    <div>
<h1>Users </h1>
      
      {loading && <div>Loading</div>} 
      {!loading && (
        <div>
       {users?.results
      .slice(skip, skip + PER_PAGE)
       .map((user, index) => {
         return (
<main key={index} >
    <article className="card-wrapper" >
      <h2>  {index + 1} </h2>
      <div className="user_img"> 
        <img src={user.picture.medium} alt="user_img" />
      </div>
      <div className="text">
        <h3>{user.name.first} {user.name.last} </h3>
        <h3>{user.gender}</h3> 
         <h4>{user.location.country}</h4>
      </div>
      </article>
   </main>         
         )
       })} 
        </div>)} 

    <div className="btn-page">
      
        <button 
        className="btn"
        onClick={handlePrev}
        disabled={page <= 1} > prev </button>
      
        <p className="page"> pages: {page} of {pages} </p>
      
      {Array.from({length:pages}, (_, index) => index + 1).map((user) => (
          <button 
            className="btn-user"
            key={user} onClick={() => setPage(user)}>{user}</button>))} 
      
        <button 
          className="btn"
        onClick={handleNext} 
        disabled={page >= pages}
        aria-disabled={page >= pages}
        > next </button>

      </div> 

    
        
    </div>
  )
}