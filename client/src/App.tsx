import React from 'react'
import './App.css';
import { Link } from "react-router-dom"
import Mainheader from './components/mainheader'

import { Outlet } from "react-router-dom"

import { useEffect, useState } from 'react';

const App = () => {
  
  const [categories, setCategories] = useState<any>([]);

  console.log(process.env.REACT_APP_API_BASE_URL);
  

  useEffect(() => {

    const loadCategories = async () => {
      // const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/categories`);
      const res = await fetch(`http://localhost:4000/categories`);
      const categories = await res.json();
      
      setCategories(categories);
    }

    loadCategories();
  }, [])

return (<>
  <Mainheader/>
  <div className='main'>
  
    <nav className='categories'>
    
    <Link to={`/`}>Hem</Link>
    <Link to={`/contact`}>Feedback</Link>
    <Link to={`/collectletter`}>Prenumerera</Link>
      <h2>Kategori</h2>
      {categories.map((category: any) =>
        <React.Fragment key={category}>
          <Link to={`/categories/${category[0]}/recipes`}>{category[0]} ({category[1]})</Link> 
        </React.Fragment>
      )}
    </nav>
    <div className="content">
      <Outlet />
    </div>
    
  </div>
</>)
}

export default App;
