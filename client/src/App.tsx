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
      const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/categories`);
      const categories = await res.json();
      
      setCategories(categories);
    }

    loadCategories();
  }, [])

return (<>
  <Mainheader/>
  <div className='main'>
    <nav className='categories'>
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
