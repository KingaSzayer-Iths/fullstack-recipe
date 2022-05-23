import React from 'react'
import './App.css';
import { Link } from "react-router-dom"
import Mainheader from './components/mainheader'
import Recipecard from './components/recipecard'

import { Outlet } from "react-router-dom"

import { useEffect, useState } from 'react';

const App = () => {
  
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {

    const loadCategories = async () => {
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
      <h2>Kategori</h2>
      {categories.map((category: any) =>
        <React.Fragment key={category}>
          <Link to={`/categories/${category}/recipes`}>{category}</Link> 
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
