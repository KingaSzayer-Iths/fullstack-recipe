import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/home'
import Category from './components/category'
import Recipe from './components/recipe'
import Contact from './components/contact'
import Collectletter from './components/collectletter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collectletter" element={<Collectletter />} />
        <Route path="/categories/:categoryName/recipes" element={<Category />} />
        <Route path="/recipes/:recipeId" element={<Recipe />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
