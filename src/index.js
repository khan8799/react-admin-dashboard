import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login'
import Home from './Home/Home'
import CategoryList from './Category/CategoryList/CategoryList'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="category" element={<CategoryList />}></Route>
        <Route path="product" element={<CategoryList />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  </BrowserRouter>
);
